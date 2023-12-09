import React, { useEffect, useState } from "react";
import ImageUploadComp from "../ImageUploadComp";
import InputformComp from "../InputFormComp";
import DropDownMenu from "../DropDownMenu";
import ImageUploadModel from "../ImageUploadModel";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/config";
import DeliveryCodesComp from "../DeliveryCodesComp";

import { useNavigate } from "react-router-dom";
import ToggleButton from "../ToggleButton";
import Select from "react-select";
import ProductVariantComponent from "./ProductVariantComponent";
import CategoryDropdown from "./CategoryDropdown";
import ReviewForm from "./ReviewForm";
import ProductForm from "./ProductInfo";
import ImageUpload from "../ImageUpload";
import DescriptionManager from "./DescriptionManager";
import useCreateProduct from "../../hooks/useCreateProduct";
import ImageUploadModal from "../Modal/ImageUploadModal";
import { AddIconButton, SaveIconButton } from "../Button/IconButton";

const AddProductForm = ({ allCat, brands, allVariants, allSubVariants, productData }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const [GST, setGST] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(10);
  const [descriptions, setDescriptions] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [deliveryCodes, setDeliveryCodes] = useState([]);
  const [error, setError] = useState(null);
  const [variants, setVariants] = useState([]);
  const [brand, setBrand] = useState(null);
  const [reviews, setReviews] = useState([]);
  const {addProduct, validationErrors} = useCreateProduct()
console.log(brand)

  useEffect(()=>{
    if(productData){
      setGST(productData.GST)
      setName(productData.productName)
      setSubCategory({label:productData.subCategory, value:productData.subCategory})
      setCategory({label:productData.mainCategory, value:productData.mainCategory})
      setBrand(productData.brand)
      setDescriptions(productData.productDescription)
      setImgUrl(productData.featureImage)
      setVariants(productData.variants)
    }
  }, [productData])



  function handleUrl(url) {
    setError(null);
    setImgUrl(url);
  }

  async function handleCreateAndUpdate() {
   
    // try {
    //   const docRef = await addDoc(collection(db, "products"), FinalProduct);
    //   console.log("Document written with ID: ", docRef.id);
    //   window.alert(`Document written with ID: ${docRef.id}`);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    //   window.alert("Cannot create the product, Please try again");
    // }
    const data = { name, GST, category, subCategory, descriptions, imgUrl, brand, variants };
    if(productData){
      return addProduct(data, productData.id)
    }
    addProduct(data)
  }
  return (
    <div className="container xl:w-4/6 grid gap-3 bg-gray-100">
      <div className="flex flex-wrap items-end">
      <div className="flex-1">
        
      <ProductForm name={name} setName={setName} GST={GST} setGST={setGST} />
      </div>
      
        
          {/* // <ImageUploadModel setShowModel={setShowModel} handleUrl={handleUrl} /> */}
          <ImageUploadModal setOpenModal ={setShowModel} openModal={showModel} handleUrl={handleUrl} setShowModel={setShowModel}/>

  
      <ImageUpload imgUrl={imgUrl} onClick={()=> setShowModel(true)} />
      </div>
      <ProductVariantComponent variants={variants} setVariants={setVariants} allVariants={allVariants} allSubVariants={allSubVariants}/>


      <CategoryDropdown
        categories={allCat}
        brands={brands}
        selectedCategory={category}
        selectedSubcategory={subCategory}
        selectedBrand={brand}
        setSelectedCategory={setCategory}
        setSelectedSubcategory={setSubCategory}
        setSelectedBrand={setBrand}
      />

      <DescriptionManager descriptions={descriptions} setDescriptions={setDescriptions}/>
      <ReviewForm reviews={reviews} setReviews={setReviews}/>
      {/* <div className="">
        <DeliveryCodesComp
          deliveryCodes={deliveryCodes}
          setDeliveryCodes={setDeliveryCodes}
        />
      </div> */}
      {validationErrors.length>0 && 
      validationErrors.map(err=> (
        <p className="p-1 bg-red-600 rounded-b break-words text-white">
          {err}
        </p>
      ))}
      <SaveIconButton label={productData? "Save Product":"Create Product"} onClick={handleCreateAndUpdate}/>
      
    </div>
  );
};


export default AddProductForm;
