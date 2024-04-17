import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

import PropTypes from "prop-types";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className='my-5 mx-auto p-2 md:p-10 grid grid-cols-3 md:grid-cols-4 gap-1 lg:gap-8'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='overflow-hidden h-0 py-[50%] px-0 relative opacity-80'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}>
            <motion.img
              src={doc.url}
              alt='uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className='max-w-full max-h-full absolute top-0 bottom-0 left-0 right-0 margin-auto object-cover object-top  w-full h-full'
            />
          </motion.div>
        ))}
    </div>
  );
};

ImageGrid.propTypes = {
  setSelectedImg: PropTypes.func.isRequired,
};

export default ImageGrid;
