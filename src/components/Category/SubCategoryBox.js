import { useEffect, useState } from "react";
import ToggleButton from "../ToggleButton";
import ImageUploadModel from "../ImageUploadModel";
import ImageUpload from "../ImageUpload";
import { DeleteIconButton } from "../Button/IconButton";
import ImageUploadModal from "../Modal/ImageUploadModal";

const SubCategoryBox = (props) => {
  const { categories, setCategories, subCat, subCatIndex, categoryIndex } =
    props;
  const [showModel, setShowModel] = useState(false);
  const [imgUrl, setImgUrl] = useState(subCat.imgUrl);
  const [subCatName, setSubCatName] = useState(subCat.name);
  const [subCatNumber, setSubCatNumber] = useState(subCat.sortNumber || "");

  useEffect(() => {
    const categoriesCopy = JSON.parse(JSON.stringify(categories));
    categoriesCopy[categoryIndex].subCategories[subCatIndex].imgUrl = imgUrl;
    categoriesCopy[categoryIndex].subCategories[subCatIndex].name = subCatName;
    categoriesCopy[categoryIndex].subCategories[subCatIndex].sortNumber = subCatNumber;
    setCategories(categoriesCopy);
  }, [imgUrl, subCatName, subCatNumber]);

  function removeSubCategory() {
    const categoriesCopy = JSON.parse(JSON.stringify(categories));
    categoriesCopy[categoryIndex].subCategories.splice(subCatIndex, 1);
    setCategories(categoriesCopy);
  }

  function handleUrl(url) {
    console.log("url", url);
    setImgUrl(url);
  }
  console.log(showModel);
  return (
    <div className="bg-white my-2 p-4 rounded-md md:col-span-1">
      <div className="flex items-center gap-2 justify-between">
        <h1 className="font-bold text-lg ">
          Sub Category {subCatIndex + 1}
        </h1>
        {/* <button
          className="font-bold text-red-400 hover:text-red-600"
          onClick={() => removeSubCategory()}
        >
          <img
            src="https://img.icons8.com/plasticine/40/000000/filled-trash.png"
            alt="Remove Sub Category"
          />
        </button> */}
        <DeleteIconButton onClick={() => removeSubCategory()}>SubCat</DeleteIconButton>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-3 flex-1">
          <div>
            <label className="font-bold">Name</label>
            <input
              type="text"
              value={subCatName}
              onChange={(e) => setSubCatName(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            />
            <label className="font-bold mt-5">Sort Number</label>
            <input
              type="text"
              value={subCatNumber}
              onChange={(e) => {
                let value = e.target.value
                if(isNaN(value)) return
                setSubCatNumber(value)
              }}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
        </div>
        <ImageUploadModal setOpenModal ={setShowModel} openModal={showModel} handleUrl={handleUrl} setShowModel={setShowModel}/>
        <ImageUpload imgUrl={imgUrl} onClick={() => setShowModel(true)} />
      </div>
    </div>
  );
};

export default SubCategoryBox;
