import { FaLocationDot } from "react-icons/fa6";

const Accommodation = () => {
  return (
    <div>
      <div className='flex justify-center items-center heading py-8'>Accommodation</div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
        <a href='https://www.valeresort.com/' target='_blank' rel='noopener noreferrer'>
          <div className='text__wrapper card '>
            <div className='heading'>Vale Resort</div>
            <div>
              <FaLocationDot className='w-4 inline' />
              <span className='text-[#7f1734]'> Hensol, CF72 8JY</span>
            </div>
            <div>Distance: 0.7 Miles</div>
          </div>
        </a>
        <a href='https://miskinmanor.co.uk/' target='_blank' rel='noopener noreferrer'>
          <div className='text__wrapper card '>
            <div className='heading'>Miskin Manor</div>
            <div>
              <FaLocationDot className='w-4 inline' />
              <span className='text-[#7f1734]'>Miskin, CF72 8ND</span>
            </div>
            <div>Distance: 2.5 Miles</div>
          </div>
        </a>
        <a
          href='https://www.premierinn.com/gb/en/hotels/wales/glamorgan/llantrisant/llantrisant.html?cid=GLBC_LLALLA'
          target='_blank'
          rel='noopener noreferrer'>
          <div className='text__wrapper card'>
            <div className='heading'>Premier Inn</div>
            <div>
              <FaLocationDot className='w-4 inline' />
              <span className='text-[#7f1734]'>Llantrisant, CF72 8UX</span>
            </div>
            <div>Distance: 4.5 Miles</div>
          </div>
        </a>
        <a href='https://www.travelodge.co.uk/hotels/83/Cardiff-M4-hotel' target='_blank' rel='noopener noreferrer'>
          <div className='text__wrapper card'>
            <div className='heading'>Travelodge</div>
            <div>
              <FaLocationDot className='w-4 inline' />
              <span className='text-[#7f1734]'>Cowbridge, CF71 7AF</span>
            </div>
            <div>Distance: 3.9 Miles</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Accommodation;
