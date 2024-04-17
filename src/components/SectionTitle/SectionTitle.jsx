import { string } from "prop-types";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className='flex flex-col items-center py-5'>
      <h1 className=' text-xl md:text-2xl font-[Montserrat]'>{subheading}</h1>
      <h2 className='text-5xl md:text-7xl font-[Montserrat]'>{heading}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: string,
  subheading: string,
};

export default SectionTitle;
