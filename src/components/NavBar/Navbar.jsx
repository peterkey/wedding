import LinkButton from "./Buttons/LinkButton";
import "./Navbar.css";
import { useState } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import PropTypes from "prop-types";

const NavLinks = ({ toggleNavbar }) => {
  return (
    <>
      <LinkButton onClick={toggleNavbar} page='/' title='Home' />
      <LinkButton onClick={toggleNavbar} page='/OurStory' title='Our Story' />
      <LinkButton onClick={toggleNavbar} page='/Details' title='Details' />
      <LinkButton onClick={toggleNavbar} page='/Gallery' title='Gallery' />
      <LinkButton onClick={toggleNavbar} page='/Rsvp' title='RSVP' />
      <LinkButton onClick={toggleNavbar} page='/Contact' title='Contact' />
    </>
  );
};

NavLinks.propTypes = {
  toggleNavbar: PropTypes.func,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <>
      <header className='bg-white top-0 flex-wrap'>
        <nav className='flex w-[92%] justify-end md:justify-center mx-auto py-2'>
          <div className='hidden w-3/4 md:flex justify-around font-[EB Garamond]'>
            <NavLinks />
          </div>
          <div className='md:hidden justify-end'>
            <button onClick={toggleNavbar}>{isOpen ? <IoCloseOutline /> : <IoMenu />}</button>
          </div>
        </nav>
        <motion.div
          className='flex flex-col items-center'
          initial='closed'
          animate={isOpen ? "open" : "closed"}
          variants={variants}>
          {isOpen && <NavLinks toggleNavbar={toggleNavbar} />}
        </motion.div>
      </header>
    </>
  );
};

export default Navbar;
