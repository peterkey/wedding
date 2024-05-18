import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 md:items-center'>
          <div className=''>
            <h1 className='top-heading text-[rgba(127,23,52,0.9)] md:text-[5vw] md:leading-[5.5vw] font-[Cabin] font-[600] uppercase md:mt-20'>
              The <br /> Wedding <br /> of Peter & Jessica
            </h1>
            <button className='bg-[#e0e0e0] hover:bg-[#fbfbfb] hover:border-[#7f1734] border-2 hover:border-solid text-[14px] leading-[18px] py-2 px-5 mt-5 ml-5 rounded-sm font-[Cabin]'>
              <Link to='/RSVP'>
                RSVP <span className='text-[#7f1734]'>before</span> 8th August 2024
              </Link>
            </button>
          </div>
          <div>
            <h2 className='bottom-heading md:text-[3vw] md:leading-[3vw] font-[Cabin] font-[600] uppercase pl-10 md:pl-20'>
              8th <br /> November <br /> 2024
            </h2>
          </div>
          <a
            className='text-[#98989884] text-[8px] pt1-0 md:pt-0 md:pl-5 md:mt-5'
            href='https://www.freepik.com/free-vector/abstract-pattern-design_921180.htm#fromView=search&page=1&position=2&uuid=bb43b381-43aa-482e-a424-74e3c8cc8f06'>
            Image by Layerace on Freepik
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
