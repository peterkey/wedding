import Accommodation from "../../components/Accommodation/Accommodation";
import Food from "../../components/Food/Food";
import Taxis from "../../components/Taxis/Taxis";
import "./Details.css";
import { FaLocationDot } from "react-icons/fa6";
import stdavids from "../../images/stdavids.jpg";
import Hensol from "../../images/Hensol.jpg";
import toast from "../../images/toast.jpg";
import people from "../../images/people.jpg";
import cake from "../../images/cake.jpg";
import platter from "../../images/platter.jpg";
import wine from "../../images/wine.jpg";
import dj from "../../images/dj.jpg";

const Details = () => {
  return (
    <>
      <div className='heading text-center'>Order of the Day</div>
      <div className='grid__wrapper grid grid-cols-2 lg:grid-cols-4 gap-2'>
        <img src={stdavids} alt='St, Davids Church' />
        <div className='text__wrapper'>
          <div className='heading'>Ceremony</div>
          <div>
            <a href='https://maps.app.goo.gl/7U1zxi9vai2QTRwZ8' target='_blank' rel='noopener noreferrer'>
              <FaLocationDot className='w-4 inline' />
              <span className='text-[#7f1734]'> St Davids Church, Miskin, CF72 8PW</span>
            </a>
          </div>
          <div className='timestamp'>11:00</div>
          <p>Please make your way to the church for 10:30.</p>
          <p>Dress code - Wedding Formal</p>
        </div>
        <img src={Hensol} alt='Hensol Castle' />
        <div className='text__wrapper'>
          <div className='heading'>Arrive @ Hensol Castle</div>
          <div>
            <a href='https://maps.app.goo.gl/WPnfYSKkgxvciTSTA' target='_blank' rel='noopener noreferrer'>
              <FaLocationDot className='w-4 inline' />{" "}
              <span className='text-[#7f1734]'>Hensol Castle, Pontyclun, CF72 8JX</span>
            </a>
          </div>
          <div className='timestamp'>12:15</div>
        </div>
        <img src={toast} alt='Hensol Castle' />
        <div className='text__wrapper'>
          <div className='heading'>Food + Speeches</div>
          <div className='timestamp'>14:30</div>
        </div>
        <img src={people} alt='Hensol Castle' />
        <div className='text__wrapper'>
          <div className='heading'>Evening Reception</div>
          <div className='timestamp'>18:30</div>
        </div>
        <img src={cake} alt='Hensol Castle' />
        <div className='text__wrapper'>
          <div className='heading'>Cutting Cake + First Dance</div>
          <div className='timestamp'>19:30</div>
        </div>
        <img src={platter} alt='Hensol Castle' />
        <div className='text__wrapper'>
          <div className='heading'>Buffet</div>
          <div className='timestamp'>20:30</div>
        </div>
        <img src={wine} alt='Hensol Castle' />
        <div className='text__wrapper'>
          <div className='heading'>Bar Close</div>
          <div className='timestamp'>00:30</div>
        </div>
        <img src={dj} alt='Hensol Castle' />
        <div className='text__wrapper'>
          <div className='heading'>Music Ends</div>
          <div className='timestamp'>01:00</div>
        </div>
      </div>
      <Food />
      <div className='gift__wrapper flex flex-col justify-center items-center mt-10'>
        <div className='heading text-center'>Gifts</div>
        <p className='text-center'>
          We&apos;re tying the knot and we just can&apos;t wait, <br /> We knew it would happen on our very first date.{" "}
          <br /> As we&apos;ve got our home dressed up with accessories, <br /> We don&apos;t really think that a
          wedding gift list is necessary. <br /> But if you did want to give something to help us on our way, <br />{" "}
          Some money in a card would truly make our day!
        </p>
        <Accommodation />
        <Taxis />
      </div>
    </>
  );
};

export default Details;
