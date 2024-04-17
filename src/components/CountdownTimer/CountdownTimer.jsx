import Countdown from "react-countdown";
import "./CountdownTimer.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const CountdownTimer = () => {
  // Random component
  const Completionist = () => <span>Wedding Day</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const Days = days != "1" ? "Days" : "Day";
    const Hours = hours != "1" ? "Hours" : "Hour";
    const Minutes = minutes != "1" ? "Minutes" : "Minute";
    const Seconds = seconds != "1" ? "Seconds" : "Second";
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div className='timer__wrapper flex flex-col items-center mb-1'>
            <span className='text-[#e0e0e0] font-[Cabin] mb-2'>{days}</span>{" "}
            <span className='text-[#e0e0e0] font-[Sacramento]'>{Days}</span>
          </div>
          <div className='timer__wrapper flex flex-col items-center mb-1'>
            <span className='text-[#e0e0e0] font-[Cabin] mb-2'>{hours}</span>{" "}
            <span className='text-[#e0e0e0] font-[Sacramento]'>{Hours}</span>
          </div>
          <div className='timer__wrapper flex flex-col items-center mb-1'>
            <span className='text-[#e0e0e0] font-[Cabin] mb-2'>{minutes}</span>{" "}
            <span className='text-[#e0e0e0] font-[Sacramento]'>{Minutes}</span>
          </div>
          <div className='timer__wrapper flex flex-col items-center mb-1'>
            <span className='text-[#e0e0e0] font-[Cabin] mb-2'>{seconds}</span>{" "}
            <span className='text-[#e0e0e0] font-[Sacramento]'>{Seconds}</span>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className='bg-[#7f1734] p-5'>
        <div>
          <SectionTitle subheading='Wedding Ceremony' heading='Countdown' />
        </div>
        <div className=''>
          <h1 className='text-5xl'>
            <Countdown date={"2024-11-08T11:00:00"} renderer={renderer} zeroPadTime={2} zeroPadDays={2} />
          </h1>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
