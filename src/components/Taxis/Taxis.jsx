import { FaPhoneAlt } from "react-icons/fa";

const Accommodation = () => {
  return (
    <div>
      <div className='flex justify-center items-center heading py-8'>Travel</div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
        <a href='https://www.uber.com/gb/en/ride/'>
          <div className='text__wrapper card '>
            <div className='heading flex justify-center items-center'>Uber</div>
          </div>
        </a>
        <a href='tel:01179252626'>
          <div className='text__wrapper card '>
            <div className='heading flex justify-center items-center'>Veezu</div>
            <FaPhoneAlt className='w-6 block mr-2 ' />
            <span>01179 25 26 26</span>
          </div>
        </a>
        <a href='tel:01443224422'>
          <div className='text__wrapper card '>
            <div className='heading flex justify-center items-center'>Dai&apos;s Cabs</div>
            <FaPhoneAlt className='w-6 block mr-2 ' />
            <span>01443 22 44 22</span>
          </div>
        </a>
        <a href='tel:01443224100'>
          <div className='text__wrapper card '>
            <div className='heading flex justify-center items-center'>Pontyclun Taxis</div>
            <FaPhoneAlt className='w-6 block mr-2 ' />
            <span>01443 22 41 00</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Accommodation;
