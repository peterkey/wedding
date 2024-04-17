import { Link } from "react-router-dom";
import { MdPhone, MdEmail, MdHome, MdCookie } from "react-icons/md";
import { RiHome2Line, RiContactsLine, RiGalleryLine, RiUserHeartLine, RiSendPlane2Line } from "react-icons/ri";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className='bg-white text-black py-6 '>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap -mx-4 justify-center '>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0'>
              <h2 className='text-lg font-semibold mb-4'>Quick Links</h2>
              <ul className='space-y-2'>
                <li>
                  <Link to='/' className='hover:underline hover:text-7f1374' onClick={handleClick}>
                    <RiHome2Line className='inline mr-2' /> Home
                  </Link>
                </li>
                <li>
                  <Link to='/OurStory' className='hover:underline hover:text-7f1374' onClick={handleClick}>
                    <RiUserHeartLine className='inline mr-2' /> Our Story
                  </Link>
                </li>
                <li>
                  <Link to='/Details' className='hover:underline hover:text-7f1374' onClick={handleClick}>
                    <RiContactsLine className='inline mr-2' /> Details
                  </Link>
                </li>
                <li>
                  <Link to='/Gallery' className='hover:underline hover:text-7f1374' onClick={handleClick}>
                    <RiGalleryLine className='inline mr-2' /> Gallery
                  </Link>
                </li>
                <li>
                  <Link to='/RSVP' className='hover:underline hover:text-7f1374' onClick={handleClick}>
                    <RiSendPlane2Line className='inline mr-2' /> RSVP
                  </Link>
                </li>
                <li>
                  <Link to='/Contact' className='hover:underline hover:text-7f1374' onClick={handleClick}>
                    <RiContactsLine className='inline mr-2' /> Contact
                  </Link>
                </li>
                <li>
                  <Link to='/Privacy&Cookies' className='hover:underline hover:text-7f1374' onClick={handleClick}>
                    <MdCookie className='inline mr-2' /> Privacy & Cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
              <h2 className='text-lg font-semibold mb-4'>Contact Information</h2>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <MdPhone className='mr-2' />
                  <span>Peter: +447711233307 // Jessica: +447511860750</span>
                </li>
                <li className='flex items-center'>
                  <MdEmail className='mr-2' />
                  <span>williamskeywedding@gmail.com</span>
                </li>
                <li className='flex items-center'>
                  <MdHome className='mr-2' />
                  <span>25 Heol Y Gylfinir, Llanilid, Pontyclun, CF72 4AX</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600'> &copy; {new Date().getFullYear()} Peter Key</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
