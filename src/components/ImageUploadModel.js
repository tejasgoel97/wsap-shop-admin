import { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";
import InputformComp from "./InputFormComp";

const ImageFirebaseUpload = ({ setShowModel, handleUrl }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [altText, setAltText] = useState("");
  const [imgName, setImgName] = useState("");
  const [finalUploadFile, setFinalUploadFile] = useState();
  const { progress, url, error: error2 } = useStorage(finalUploadFile);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const types = ["image/png", "image/jpeg"];

 
  useEffect(()=>{
    if (progress === 100) {
      console.log("In progress")
      console.log("here is URL", url)
      if (handleUrl) handleUrl(url);
      setTimeout(() => {
        setShowModel(false);
      }, 500);
    }
  }, [url])

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    setError(null);
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setError("Please upload JPEG or PNG file");
    }
  };

  const handleUploadImage = () => {
    if (!file) {
      return setError("Please select a valid file");
    }
    const ALT_TEXT = altText || file.name;
    const IMG_NAME = imgName || file.name;
    setFinalUploadFile(file);
  };

  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-50">
      <div className="bg-white px-8 py-6 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500">Add Image</h1>
        <input type="file" onChange={handleFileInput} className="my-4" />
        <div className="output">
          {error && <p className="text-red-500">{error}</p>}
          {file && (
            <div className="flex flex-row flex-1 justify-center items-center">
              <img
                className="h-56 object-contain"
                src={URL.createObjectURL(file)}
                alt="Selected File"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-indigo-500 px-4 py-2 rounded-md text-md text-white mr-2 font-semibold"
            onClick={() => setShowModel(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 px-7 py-2 rounded-md text-md text-white font-semibold"
            onClick={() => handleUploadImage()}
          >
            Upload
          </button>
        </div>
        {progress > 0 && (
          <div className="w-full bg-gray-200 mt-4 rounded-full">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center py-0.5 leading-none rounded-full"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        )}
        {progress === 100 && <h2>Done</h2>}
      </div>
    </div>
  );
};

export default ImageFirebaseUpload;
