import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Modal from "../../components/Modal/Modal";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UploadForm from "../../components/UploadForm/UploadForm";
import { useState } from "react";

const GalleryV2 = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className=''>
      <SectionTitle heading='Gallery' subheading='Share your pictures of us' />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
};

export default GalleryV2;
