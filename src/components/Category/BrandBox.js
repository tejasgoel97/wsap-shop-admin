import { useEffect, useState } from "react";
import InputformComp from "../InputFormComp";
import ImageUploadModel from "../ImageUploadModel";
import ToggleButton from "../ToggleButton";
import ImageUpload from "../ImageUpload";
import ImageUploadModal from "../Modal/ImageUploadModal";
import { DeleteIconButton } from "../Button/IconButton";
import { TextInput } from "flowbite-react";

const BrandBox = (props) => {
  const { brand, brandIndex, brands, setBrands } = props;
  const [imgUrl, setImgUrl] = useState(brand.imageUrl);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const brandsCopy = [...brands];
    brandsCopy[brandIndex].imageUrl = imgUrl;
    setBrands(brandsCopy);
  }, [imgUrl]);

  function handleBrandChange(value, index) {
    const brandsCopy = [...brands];
    brandsCopy[index].name = value;
    setBrands(brandsCopy);
  }

  function removedescription(brandIndex) {
    let brandsCopy = [...brands];
    brandsCopy.splice(brandIndex, 1);
    setBrands(brandsCopy);
  }

  function handleUrl(url) {
    setImgUrl(url);
  }

  return (
    <div className="border p-3 w-full">
      <div className="flex items-center float-right">
        <ToggleButton
          isSelected="dcndn"
          setIsSelected="dchd"
          rightLabel="Available"
          leftLabel="Not Available"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center w-full gap-3">
          
                <TextInput placeholder="Brand Name" addon={brandIndex + 1} value={brand.name} onChange={(e) => handleBrandChange(e.target.value, brandIndex)}/>

          <DeleteIconButton onClick={() => removedescription(brandIndex)}>
            SubCat
          </DeleteIconButton>
        </div>
        <div>
          <ImageUploadModal
            setOpenModal={setShowModel}
            openModal={showModel}
            handleUrl={handleUrl}
            setShowModel={setShowModel}
          />

          <ImageUpload imgUrl={imgUrl} onClick={() => setShowModel(true)} />
        </div>
      </div>
    </div>
  );
};

export default BrandBox;
