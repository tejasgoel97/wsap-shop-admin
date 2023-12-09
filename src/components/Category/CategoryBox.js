import InputformComp from "../InputFormComp";
import ImageUploadModel from "../ImageUploadModel";
import { useEffect, useState } from "react";
import ToggleButton from "../ToggleButton";
import ImageUpload from "../ImageUpload";
import { AddIconButton, DeleteIconButton } from "../Button/IconButton";
import { TextInput } from "flowbite-react";
import ImageUploadModal from "../Modal/ImageUploadModal";

const EmptySubCategory = {
  name: "",
  imgUrl: "",
};

const CategoryBox = (props) => {
  const { category, categories, setCategories, categoryIndex } = props;
  const [showModel, setShowModel] = useState(false);
  const [imgUrl, setImgUrl] = useState(category.imageUrl);

  useEffect(() => {
    const categoriesCopy = [...categories];
    categoriesCopy[categoryIndex].imageUrl = imgUrl;
    setCategories(categoriesCopy);
  }, [imgUrl]);

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
    console.log(categoriesCopy);
    setCategories(categoriesCopy);
  }

  function removeCategory(categoryIndex) {
    let categoriesCopy = [...category];
    categoriesCopy.splice(categoryIndex, 1);
    setCategories(categoriesCopy);
  }

  return (
    <div>
      <div className="flex gap-2 items-center justify-between">
        <h1 className="font-bold text-2xl">Category {categoryIndex + 1}</h1>

        <DeleteIconButton
          onClick={() => removeCategory(categoryIndex)}
        ></DeleteIconButton>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-3">
        <div className="flex items-center w-full gap-3">
          {/* <InputformComp
            label={""}
            text={category.name}
            setText={(value) => handleCategoryChange(value, categoryIndex)}
          /> */}
          <TextInput
            placeholder="Name"
            addon="Name"
            onChange={(e) => handleCategoryChange(e.target.value, categoryIndex)}
            value={category.name}
            required
          />

          <ImageUploadModal
            setOpenModal={setShowModel}
            openModal={showModel}
            handleUrl={handleUrl}
            setShowModel={setShowModel}
          />

          <AddIconButton onClick={() => AddSubCategory(categoryIndex)}>
            New SubCategory
          </AddIconButton>
        </div>
        <ImageUpload imgUrl={imgUrl} onClick={() => setShowModel(true)} />
      </div>
    </div>
  );
};

export default CategoryBox;
