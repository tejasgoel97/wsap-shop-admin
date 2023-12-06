import { useState } from "react";

import InputformComp from "./InputFormComp";
import ImageUploadModel from "./ImageUploadModel"

import {db} from "../firebase/config"
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";

const AddCategoryForm = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [error, setError] = useState(null)

  function handleUrl(url){
    setError(null)
    setImgUrl(url)
  }
  async function handleCreateDoc(){
    // if(!name) return setError("Please enter a Name");
    // else if(!imgUrl) return setError("Please select a valid image")
    // const docRef = await setDoc(doc(db,"categories", name), {
    //   categoryName: name,
    //   imgUrl:imgUrl
    // })
    const docData ={
      catName:"Seeds",
      id:"Seeds",
      img:{
        imgName:"Seeds Category",
        altText: "Seeds Category",
        url:"https://media.istockphoto.com/photos/hands-planting-the-seeds-into-the-dirt-picture-id1126541751?k=20&m=1126541751&s=612x612&w=0&h=bsH8mS2ZXM5tjCpFV3KmUSL9IjPadoeEYWenSD1kSwg=",
      },
      subCat:[
        {
          id:"Flowering Seeds",
          subCatName:"Flowering Seeds",
          img:{
            altText:"Flowering Seeds",
            url:"https://www.fnp.com/images/pr/l/v20190502133931/vivid-red-roses-bouquet_1.jpg"
          }
        },
        {
          id:"Sprouts Seeds",
          subCatName:"Decorative Seeds",
          img:{
            altText:"Decorative Seeds",
            url:"media.istockphoto.com/photos/green-sprouts-picture-id511976070?k=20&m=511976070&s=612x612&w=0&h=Ky08WcnyMTqN_8lO4-OxEC6z-9y1WFA_bjE7pWKzRuc="
          }
        },
        {
          id:"Oil Seeds",
          subCatName:"Air Purifier Seeds",
          img:{
            altText:"Air Purifier Seeds",
            url:"https://media.istockphoto.com/photos/oil-of-carrot-seeds-in-a-bottle-closeup-top-view-picture-id507488811?k=20&m=507488811&s=612x612&w=0&h=tDdxFDw19OkFD_X2f205kSJm1xObCpp2cLrxnT-sPHU="
          }
        }
      ]
    }
    const docRef = await setDoc(doc(db, "categories", "Seeds"), docData)
    console.log(docRef)
    if(docRef.id) console.log("Its Done Now")

  }
  
  return (
    <div className="w-auto xl:w-4/6 space-y-3">
      <InputformComp
        label="Category Name"
        text={name}
        setText={setName}
        type="text"
      />
      <button
        onClick={() => setShowModel(true)}
        class="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
        {imgUrl ?"Change Image": "Add Image"}
      </button>
      {/* This is model to show Image Uploading frature */}
      {showModel && <ImageUploadModel setShowModel={setShowModel} handleUrl={handleUrl}/>}
      {/* <ImageUploadComp  imgName = {name} folderName="categoty"/> */}
      {imgUrl && <img src={imgUrl}/>}
      {error && <p className="text-red-500 text-2xl bg-red-300 p-2 rounded">!! {error}</p>}
      <button 
        className="bg-green-700 mx-2 my-2 px-2 py-2 text-center text-white rounded-full w-full"
        onClick={handleCreateDoc}>
        Create
      </button>
      
    </div>
  );
};

export default AddCategoryForm;
