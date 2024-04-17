import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [files, setFiles] = useState([]); // Changed 'file' to 'files'
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    const selected = Array.from(e.target.files); // Convert FileList to array

    if (selected.every((file) => types.includes(file.type))) {
      setFiles(selected); // Set the state to the array of files
      setError("");
    } else {
      setFiles([]);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <>
      <form className='w-[85%] mx-auto flex flex-col justify-center items-center'>
        <label className='relative w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7f1734] text-gray-600 hover:text-[#e0e0e0] transition-all'>
          <input type='file' onChange={changeHandler} multiple className='absolute inset-0 opacity-0 cursor-pointer' />{" "}
          {/* Added 'multiple' attribute */}
          <span className='text-4xl '>+</span>
        </label>
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {files &&
            files.map((file) => (
              <div className='' key={file.name}>
                {file.name}
                <ProgressBar file={file} setFile={setFiles} />
              </div>
            ))}
        </div>
      </form>
    </>
  );
};

export default UploadForm;
