import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactInfoItem from "../../components/ContactInfo/ContactInfoItem";
import ContactForm from "../../components/ContactForm/ContactForm";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className='contain'>
        <SectionTitle heading='Contact Us' subheading='Get in touch' />
      </div>
      <div className='contactSection__wrapper'>
        <div className='left mx-5'>
          <ContactInfoItem icon={<MdLocalPhone />} text='Peter: +447711233307 // Jessica: +447511860750' />
          <ContactInfoItem icon={<MdEmail />} text='williamskeywedding@gmail.com' />
          <ContactInfoItem text='25 Heol Y Gyfinir, Llanilid, Pontyclun, CF72 4AX' />
        </div>
        <div className='right'>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
