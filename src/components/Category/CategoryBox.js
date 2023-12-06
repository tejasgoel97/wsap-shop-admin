import InputformComp from "../InputFormComp";
import ImageUploadModel from "../ImageUploadModel";
import { useEffect, useState } from "react";
import ToggleButton from "../ToggleButton";
import ImageUpload from "../ImageUpload";

const EmptySubCategory = {
  name: "",
  imgUrl: "",
};

const CategoryBox = (props) => {
  const { category,categories, setCategories, categoryIndex } = props;
  const [showModel, setShowModel] = useState(false);
  const [imgUrl, setImgUrl] = useState(category.imageUrl);
  
  useEffect(()=>{
    const categoriesCopy = [...categories];
    categoriesCopy[categoryIndex].imageUrl = imgUrl;
    setCategories(categoriesCopy);
  }, [imgUrl])

  function handleUrl(url) {
    setImgUrl(url);
  }


  function handleCategoryChange(value, index) {
    const categoriesCopy = [...categories];
    categoriesCopy[index].name = value;
    setCategories(categoriesCopy);
  }
  function AddSubCategory(index) {
    const categoriesCopy = JSON.parse(JSON.stringify(categories));
    console.log(categoriesCopy);
    categoriesCopy[index].subCategories.push(EmptySubCategory);
    console.log(categoriesCopy)
    setCategories(categoriesCopy);
  }

  function removeCategory(categoryIndex) {
    let categoriesCopy = [...category];
    categoriesCopy.splice(categoryIndex, 1);
    setCategories(categoriesCopy);
  }

  return (
    <div>
      <div>
        <h1 className="font-bold">Category {categoryIndex + 1}</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-3">
        <div className="flex items-center w-full gap-3">
          <InputformComp
            label={"Name"}
            text={category.name}
            setText={(value) => handleCategoryChange(value, categoryIndex)}
          />
  
          {showModel && (
            <ImageUploadModel
              setShowModel={setShowModel}
              handleUrl={handleUrl}
              imgUrl={imgUrl}
            />
          )}
          <button
            className="font-bold mb-2 md:mb-0 hover:text-red-400"
            onClick={() => AddSubCategory(categoryIndex)}
          >
            <img
              className="inline-block"
              src="https://img.icons8.com/color/30/000000/plus--v3.png"
              alt="Add Sub Category"
            />
          </button>
          <button
            className="font-bold hover:text-red-400"
            onClick={() => removeCategory(categoryIndex)}
          >
            <img
              src="https://img.icons8.com/plasticine/40/000000/filled-trash.png"
              alt="Remove Category"
            />
          </button>
        </div>
        <ImageUpload imgUrl={imgUrl} onClick={() => setShowModel(true)} />
      </div>
    </div>
  );
};

export default CategoryBox;
