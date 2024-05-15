import { useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { projectFirestore } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { serverTimestamp } from "firebase/firestore";

const initialGuest = {
  firstName: "",
  lastName: "",
  attending: "",
  isAdult: false,
  isChild: false,
  adultChoice: {
    starter: "",
    main: "",
    dessert: "",
  },
  childChoice: {
    starter: "",
    main: "",
    dessert: "",
  },
  songRequest: "",
  additionalInfo: "",
};

const mealOptions = {
  adult: {
    starter: [
      "",
      "Roasted Plum Tomato and Pimento Bisque - VG",
      "Pork Belly and Confit Duck Rillettes",
      "Baked Perl Wen Welsh Brie - V",
    ],
    main: [
      "",
      "Pan Roasted Chicken Breast - GF",
      "Pave of Braised Beef - GF",
      "Sweet Potato, Carrot and Hazelnut Nut Roast - VG",
    ],
    dessert: [
      "",
      "White Chocolate and Raspberry Creme Brulee - V",
      "Toffee Apple Crumble Tart - V",
      "Salted Caramel Brownie - V",
    ],
  },
  child: {
    starter: ["", "Melon Balls and Grapes - VG/GF", "Tomato Soup - VG/GF", "Toasted Pitta Bread - VG"],
    main: ["", "Pasta Primavera - VG", "Chicken Goujons", "Fish Fingers"],
    dessert: ["", "Fudge Brownie - V", "Vanilla Ice Cream with Fresh Berries - V/GF", "Chocolate Chip Cookie - V"],
  },
};

const WeddingRSVPForm = () => {
  const [passcode, setPasscode] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [guests, setGuests] = useState([initialGuest]);
  const [isEveningGuest, setIsEveningGuest] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (passcode.length < 6 && /[0-9]/.test(event.key)) {
        setPasscode(passcode + event.key);
      } else if (event.key === "Backspace") {
        setPasscode(passcode.slice(0, -1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [passcode]);

  const addGuest = () => {
    if (guests.length < 10) {
      setGuests([...guests, initialGuest]);
    }
  };

  const removeGuest = (index) => {
    const newGuests = [...guests];
    newGuests.splice(index, 1);
    setGuests(newGuests);
  };

  const handleInputChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const newGuests = [...guests];
    if (type === "checkbox") {
      if (name === "isAdult") {
        newGuests[index] = { ...newGuests[index], isAdult: checked, isChild: !checked };
      } else if (name === "isChild") {
        newGuests[index] = { ...newGuests[index], isChild: checked, isAdult: !checked };
      }
    } else {
      const [category, meal] = name.split("-");
      if (category === "adultChoice") {
        newGuests[index] = {
          ...newGuests[index],
          adultChoice: { ...newGuests[index].adultChoice, [meal]: value },
        };
      } else if (category === "childChoice") {
        newGuests[index] = {
          ...newGuests[index],
          childChoice: { ...newGuests[index].childChoice, [meal]: value },
        };
      } else {
        newGuests[index] = { ...newGuests[index], [name]: value };
      }
    }
    if (name === "songRequest") {
      newGuests[index] = { ...newGuests[index], songRequest: value };
    }
    if (name === "additionalInfo") {
      newGuests[index] = { ...newGuests[index], additionalInfo: value };
    }

    setGuests(newGuests);
  };

  const guestPasscode = "081124";
  const eveningGuestPasscode = "081120";

  const handleSubmit = () => {
    if (passcode === guestPasscode) {
      // Check the passcode entered by daytime guests
      setAuthenticated(true);
      setIsEveningGuest(false);
    } else if (passcode === eveningGuestPasscode) {
      // Check the passcode entered by evening guests
      setAuthenticated(true);
      setIsEveningGuest(true);
    } else {
      toast.error("Incorrect Passcode. Please try again.", {
        duration: 3000,
      });
      setPasscode("");
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const navigate = useNavigate();

  const submitForm = async () => {
    let isAttending = true;
    try {
      await Promise.all(
        guests.map(async (guest) => {
          if (guest.attending === "No") {
            isAttending = false;
          }
          await addDoc(collection(projectFirestore, "guests"), { ...guest, createdAt: serverTimestamp() });
        })
      );
      if (isAttending) {
        toast.success("You're all set! We Can't wait to see you.", {
          duration: 10000,
        });
      } else {
        toast.success("Thank You! We're sorry to hear you can't make it, you will be missed.", {
          duration: 10000,
        });
      }
      await delay(2000);
      navigate("/");
    } catch (error) {
      toast.error("Error submitting. Please check all fields and try again");
    }
  };

  return (
    <div className='container mx-auto py-8 max-w-[3/4] font-montserrat'>
      {!authenticated ? (
        <div className='mb-8'>
          <h2 className='text-lg font-semibold mb-2 '>Enter Passcode:</h2>
          <div className='flex justify-center items-center mb-4'>
            <div className='grid grid-cols-3 gap-2 w-32 max-w-300'>
              {Array.from(Array(6).keys()).map((index) => (
                <div key={index} className='h-12 w-12 flex justify-center items-center border rounded'>
                  {index < passcode.length ? "*" : ""}
                </div>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-3 gap-2 w-[300px] mx-auto'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0].map((digit, index) => (
              <button
                key={index}
                className='m-1 p-2 bg-gray-200 rounded text-lg w-full hover:bg-[#7f1734] hover:text-white'
                onClick={() => setPasscode((prevPasscode) => prevPasscode + digit)}>
                {digit}
              </button>
            ))}
            <button
              className='m-1 p-2 bg-gray-200 rounded text-lg w-full hover:bg-[#7f1734] hover:text-white'
              onClick={() => setPasscode((prevPasscode) => prevPasscode.slice(0, -1))}>
              <RiCloseCircleFill />
            </button>
            <button onClick={handleSubmit} className='bg-[#7f1734] text-white py-2 px-4 rounded mt-4 hover:bg-rose-700'>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <>
          {isEveningGuest ? (
            // Display simplified form for evening guests
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {guests.map((guest, index) => (
                <div key={index} className='bg-white shadow-md p-4 rounded-md'>
                  <h2 className='text-lg font-semibold mb-2'>Guest {index + 1}</h2>
                  <div className='mb-4'>
                    <button onClick={() => removeGuest(index)} className='text-red-600 mb-2'>
                      <RiCloseCircleFill /> Remove Guest
                    </button>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-1'>First Name:</label>
                    <input
                      type='text'
                      name='firstName'
                      value={guest.firstName}
                      onChange={(e) => handleInputChange(index, e)}
                      className='border rounded py-2 px-3 w-full'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-1'>Last Name:</label>
                    <input
                      type='text'
                      name='lastName'
                      value={guest.lastName}
                      onChange={(e) => handleInputChange(index, e)}
                      className='border rounded py-2 px-3 w-full'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-1'>Are you attending?</label>
                    <select
                      name='attending'
                      value={guest.attending}
                      onChange={(e) => handleInputChange(index, e)}
                      className='border rounded py-2 px-3 w-full'>
                      <option value=''>Select</option>
                      <option value='Yes'>Yes</option>
                      <option value='No'>No</option>
                    </select>
                  </div>
                  {guest.attending === "Yes" && (
                    <div>
                      <div className='mb-4'>
                        <label className='block mb-1'>Song Request (optional):</label>
                        <input
                          type='text'
                          name='songRequest'
                          value={guest.songRequest}
                          onChange={(e) => handleInputChange(index, e)}
                          className='border rounded py-2 px-3 w-full'
                        />
                      </div>
                      <div className='mb-4'>
                        <label className='block mb-1'>Additional Information:</label>
                        <textarea
                          name='additionalInfo'
                          value={guest.additionalInfo}
                          placeholder='E.g. Gluten Free or No Alcohol'
                          onChange={(e) => handleInputChange(index, e)}
                          className='border rounded py-2 px-3 w-full'
                          rows='4'></textarea>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {guests.map((guest, index) => (
                  <div key={index} className='bg-white shadow-md p-4 rounded-md'>
                    <h2 className='text-lg font-semibold mb-2'>Guest {index + 1}</h2>
                    <div className='mb-4'>
                      <button onClick={() => removeGuest(index)} className='text-red-600 mb-2'>
                        <RiCloseCircleFill /> Remove Guest
                      </button>
                    </div>
                    <div className='mb-4 flex'>
                      <div className='mr-2'>
                        <label className='block mb-1'>First Name:</label>
                        <input
                          type='text'
                          name='firstName'
                          value={guest.firstName}
                          onChange={(e) => handleInputChange(index, e)}
                          className='border rounded py-2 px-3 w-full'
                          required
                        />
                      </div>
                      <div>
                        <label className='block mb-1'>Last Name:</label>
                        <input
                          type='text'
                          name='lastName'
                          value={guest.lastName}
                          onChange={(e) => handleInputChange(index, e)}
                          className='border rounded py-2 px-3 w-full'
                          required
                        />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <label className='block mb-1'>Are you attending?</label>
                      <select
                        name='attending'
                        value={guest.attending}
                        onChange={(e) => handleInputChange(index, e)}
                        className='border rounded py-2 px-3 w-full'>
                        <option value=''>Select</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                    </div>
                    {guest.attending === "Yes" && (
                      <div>
                        <label className='block mb-1'>Age:</label>
                        <div className='flex items-center mb-2'>
                          <input
                            type='checkbox'
                            name='isAdult'
                            checked={guest.isAdult}
                            onChange={(e) => handleInputChange(index, e)}
                            className='mr-2'
                          />
                          <label className='mr-4'>Adult</label>
                          <input
                            type='checkbox'
                            name='isChild'
                            checked={guest.isChild}
                            onChange={(e) => handleInputChange(index, e)}
                            className='mr-2'
                          />
                          <label>Child(Under 12)</label>
                        </div>
                        {guest.isAdult && (
                          <>
                            <div className='mb-4'>
                              <label className='block mb-1'>Starter Choice:</label>
                              <select
                                name={`adultChoice-starter`}
                                value={guest.adultChoice.starter}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                                required>
                                {mealOptions.adult.starter.map((option, idx) => (
                                  <option key={idx} value={option}>
                                    {option || "Select"}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label className='block mb-1'>Main Course Choice:</label>
                              <select
                                name={`adultChoice-main`}
                                value={guest.adultChoice.main}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                                required>
                                {mealOptions.adult.main.map((option, idx) => (
                                  <option key={idx} value={option}>
                                    {option || "Select"}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label className='block mb-1'>Dessert Choice:</label>
                              <select
                                name={`adultChoice-dessert`}
                                value={guest.adultChoice.dessert}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                                required>
                                {mealOptions.adult.dessert.map((option, idx) => (
                                  <option key={idx} value={option}>
                                    {option || "Select"}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label className='block mb-1'>Song Request (optional):</label>
                              <input
                                type='text'
                                name='songRequest'
                                value={guest.songRequest}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                              />
                            </div>
                          </>
                        )}
                        {guest.isChild && (
                          <>
                            <div className='mb-4'>
                              <label className='block mb-1'>Starter Choice:</label>
                              <select
                                name={`childChoice-starter`}
                                value={guest.childChoice.starter}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                                required>
                                {mealOptions.child.starter.map((option, idx) => (
                                  <option key={idx} value={option}>
                                    {option || "Select"}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label className='block mb-1'>Main Course Choice:</label>
                              <select
                                name={`childChoice-main`}
                                value={guest.childChoice.main}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                                required>
                                {mealOptions.child.main.map((option, idx) => (
                                  <option key={idx} value={option}>
                                    {option || "Select"}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label className='block mb-1'>Dessert Choice:</label>
                              <select
                                name={`childChoice-dessert`}
                                value={guest.childChoice.dessert}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                                required>
                                {mealOptions.child.dessert.map((option, idx) => (
                                  <option key={idx} value={option}>
                                    {option || "Select"}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label className='block mb-1'>Song Request (optional):</label>
                              <input
                                type='text'
                                name='songRequest'
                                value={guest.songRequest}
                                onChange={(e) => handleInputChange(index, e)}
                                className='border rounded py-2 px-3 w-full'
                              />
                            </div>
                          </>
                        )}

                        <div className='mb-4'>
                          <label className='block mb-1'>Additional Information:</label>
                          <textarea
                            name='additionalInfo'
                            value={guest.additionalInfo}
                            placeholder='E.g. Gluten Free or No Alcohol'
                            onChange={(e) => handleInputChange(index, e)}
                            className='border rounded py-2 px-3 w-full'
                            rows='4'></textarea>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
          {guests.length < 10 && (
            <button
              onClick={addGuest}
              className='bg-[#7f1734] text-white py-2 px-4 rounded hover:bg-rose-700 mt-4 mr-4'>
              Add Another Guest
            </button>
          )}
          <button
            type='submit'
            onClick={submitForm}
            className='bg-[#7f1734] text-white py-2 px-4 rounded hover:bg-rose-700 mt-4'>
            Submit RSVP
          </button>
        </>
      )}
    </div>
  );
};

export default WeddingRSVPForm;
