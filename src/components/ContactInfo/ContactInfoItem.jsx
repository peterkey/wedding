import { object, string } from "prop-types";
import { MdPlace } from "react-icons/md";
import "./ContactInfoItem.css";

const ContactInfoItem = ({ icon = <MdPlace />, text = " this is info" }) => {
  return (
    <div className='flex'>
      <div className='w-4/5 p-4 bg-[#7f1734] flex items-center gap-2 rounded-lg mb-8'>
        <div className='icon text-[#e0bb95] bg-[#f7cfd5] p-2 items-center justify-center rounded-full'>{icon}</div>
        <div className='info text-[#fff] font-[Montserrat]'>{text}</div>
      </div>
    </div>
  );
};

ContactInfoItem.propTypes = {
  icon: object,
  text: string,
};

export default ContactInfoItem;
