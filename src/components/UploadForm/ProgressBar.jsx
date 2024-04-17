import useStorage from "../../hooks/useStorage";
import PropTypes from "prop-types";
import "./ProgressBar.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className='w-[85%] mx-auto'>
      <motion.div className='progress-bar' initial={{ width: 0 }} animate={{ width: progress + "%" }}></motion.div>
    </div>
  );
};

ProgressBar.propTypes = {
  file: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
};

export default ProgressBar;
