import "./Modal.css";
import { motion } from "framer-motion";

import PropTypes from "prop-types";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div className='backdrop' onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
      <motion.img src={selectedImg} alt='Lightbox Image' />
    </motion.div>
  );
};

Modal.propTypes = {
  selectedImg: PropTypes.string.isRequired,
  setSelectedImg: PropTypes.func.isRequired,
};

export default Modal;
