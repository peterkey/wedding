import { useState } from "react";

const Food = () => {
  const [menuToggle, menuToggleState] = useState(true);

  return (
    <>
      <div className='heading flex justify-center items-center py-8'>Wedding Breakfast</div>
      <div className='flex justify-center items-center'>
        <button
          onClick={() => menuToggleState(!menuToggle)}
          className='mb-4 px-4 py-2 text-[#7f1734] border border-[#7f1734] rounded hover:bg-[#7f1734] hover:text-white transition-all'>
          {menuToggle ? "Show Children's Menu" : "Show Adults Menu"}
        </button>
      </div>

      {menuToggle && (
        <div>
          <div className='text-center text-[2rem] mb-4'>Adults Menu</div>
          <div className='grid grid-cols-1'>
            <div className='flex justify-center items-center text-[2rem]'>Starters</div>
            <div className='p-4 leading-10'>
              <div className='border-y-4 border-t-[#7f173479] text-center'>
                Roasted Plum Tomato and Pimento Bisque - Herb and roasted garlic oil - VG
              </div>
              <div className='border-b-4 text-center'>
                Pork Belly and Confit Duck Rillettes - Fig and honey chutney, char-grilled sourdough
              </div>
              <div className='border-b-4 text-center'>
                Baked Perl Wen Welsh Brie - Panko crust, cranberry and red onion marmalade, baby leaf salad - V
              </div>
            </div>
            <div className='flex justify-center items-center text-[2rem]'>Main Course</div>
            <div className='p-4 leading-10'>
              <div className='border-y-4 border-t-[#7f173479] text-center'>
                Pan Roasted Chicken Breast - Crispy roast potatoes, honey roasted parsnip and carrot, green beans, pan
                gravy, Yorkshire pudding - GF
              </div>
              <div className='border-b-4 text-center'>
                Pave of Braised Beef - Chive crushed new potatoes, braised leeks bundled with fine green beans and
                carrots, red wine and thyme jus - GF
              </div>
              <div className='border-b-4 text-center'>
                Sweet Potato, Carrot and Hazelnut Nut Roast - Crispy roast potatoes, honey roasted parsnip and carrot,
                green beans, spicy sauce romesco - VG
              </div>
            </div>

            <div className='flex justify-center items-center text-[2rem]'>Dessert</div>
            <div className='p-4 leading-10'>
              <div className='border-y-4 border-t-[#7f173479] text-center'>
                White Chocolate and Raspberry Crème Brulee - Cocoa marbled biscotti - V
              </div>
              <div className='border-b-4 text-center'>
                Toffee Apple Crumble Tart - Clotted cream ice cream, grated nutmeg - V
              </div>
              <div className='border-b-4 text-center'>
                Salted Caramel Brownie - Chocolate ganache, Chantilly cream, caramel drizzle - V
              </div>
            </div>
          </div>
        </div>
      )}
      {!menuToggle && (
        <div>
          <div className='text-center text-[2rem] mb-4'>Children&apos;s Menu</div>
          <div className='grid grid-cols-1'>
            <div className='flex justify-center items-center text-[2rem]'>Starters</div>
            <div className='p-4 leading-10'>
              <div className='border-y-4 text-center border-t-[#7f173479]'>
                Melon Balls and Grapes - Raspberry sauce - VG + GF
              </div>
              <div className='border-b-4 text-center'>Tomato Soup - VG + GF</div>
              <div className='border-b-4 text-center'>
                Toasted Pitta Bread - with Hummus, cucumber, carrot sticks - VG
              </div>
            </div>
            <div className='flex justify-center items-center  text-[2rem]'>Main Courses</div>
            <div className='p-4 leading-10'>
              <div className='border-y-4 text-center border-t-[#7f173479]'>
                Pasta Primavera - Fresh vegetables and penne pasta in homemade tomato sauce - VG
              </div>
              <div className='border-b-4 text-center'>Chicken Goujons - Chips, peas</div>
              <div className='border-b-4 text-center'>Fish Fingers - Chips, peas</div>
            </div>

            <div className='flex justify-center items-center text-[2rem]'>Desserts</div>
            <div className='p-4 leading-10'>
              <div className='border-y-4 text-center border-t-[#7f173479]'>Warm Fudge Brownie - V</div>
              <div className='border-b-4 text-center'>Vanilla Ice Cream with Fresh berries - V + GF</div>
              <div className='border-b-4 text-center'>Chocolate Chip Cookie - Stack with Chantilly cream - V</div>
            </div>
          </div>
        </div>
      )}
      <div className='grid grid-cols-1 p-4'>
        <div className='flex justify-center items-center text-[2rem] border-b-4 border-[#7f173479] p-4'>Buffet</div>
        <div className='text-center leading-10'>
          <ul>
            <li>Mini BBQ Style Evening Buffet</li>
            <li>Mini beef burgers with gherkin relish and Monterey jack cheese</li>
            <li>Chicken churrasco skewers with garlic and saffron aioli</li>
            <li>Bourbon BBQ pulled pork baps with crackling and apple slaw</li>
            <li>Spicy potato wedges with creamy peppercorn dip</li>
            <li>Traditional coleslaw</li>
            <li>New potato salad with sour cream and chives</li>
            <li>Tomato, cucumber and red onion salad</li>
          </ul>
        </div>
        <div className='flex justify-center items-center text-[1rem] mt-5'>
          <p className='text-center'>
            Please let us know if you have any dietary requirements or allergies. <br /> We will do our best to
            accommodate you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Food;
