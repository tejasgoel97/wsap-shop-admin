
import { Button, Modal, Progress } from 'flowbite-react';
import { useEffect, useLayoutEffect, useState } from "react";
import useStorage from "../../hooks/useStorage";
function ImageUploadModal(props) {
  const {openModal, setOpenModal,setShowModel, handleUrl} = props;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [altText, setAltText] = useState("");
  const [imgName, setImgName] = useState("");
  const [finalUploadFile, setFinalUploadFile] = useState();
  const { progress, url, error: error2, uploadToFirebase, setProgress } = useStorage();

  const types = ["image/png", "image/jpeg"];
 
  useEffect(()=>{
    setProgress(0)
  },[])

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
    console.log(file)
    if (!file) {
      return setError("Please select a valid file");
    }
    const ALT_TEXT = altText || file.name;
    const IMG_NAME = imgName || file.name;
    setFinalUploadFile(file);
    uploadToFirebase(file)
  };

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
        <div className="">
      <div className="bg-white px-8 py-6 rounded-md text-center">
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
        
        {progress > 0 && (
          <Progress
          progress={progress}
          progressLabelPosition="inside"
          textLabel="Uploading..."
          textLabelPosition="outside"
          size="lg"
          labelProgress
          labelText
        />
        )}
      </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ () => handleUploadImage()}>Upload</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ImageUploadModal