import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase/config';
import { useNavigate } from 'react-router';

function useCreateProduct() {
    const navigate = useNavigate();

  const [validationErrors, setValidationErrors] = useState([]);

  function validateData(data) {
    const { name, GST, category, subCategory, descriptions, imgUrl, brand, variants } = data;
    const errors = [];

    if (typeof name !== 'string' || name.trim() === '') {
      errors.push('Name should not be empty.');
    }

    const GSTValue = Number(GST);
    if (isNaN(GSTValue)) {
      errors.push('GST should be a valid number.');
    }

    if (typeof category !== 'object' || category === null) {
      errors.push('Please select a category');
    }

    if (typeof subCategory !== 'object' || subCategory === null) {
      errors.push('Please select a sub Category.');
    }

    if (!Array.isArray(descriptions)) {
      errors.push('Please Give Atleast One description');
    }

    if (typeof imgUrl !== 'string' || imgUrl.trim() === '') {
      errors.push('Please provide image');
    }

    if (typeof brand !== 'string' || brand === null) {
      errors.push('Please select a Brand');
    }

    if (!Array.isArray(variants)) {
      errors.push('Please select atleast One Variant.');
    } else {
      variants.forEach((variant, index) => {
        if (typeof variant.name !== 'string' || variant.name.trim() === '') {
          errors.push(`Variant name at index ${index+1} should be a non-empty.`);
        }

        if (!Array.isArray(variant.subvariants)) {
          errors.push(`Please select atleat one sub Variant for ${variant.name}.`);
        } else {
          variant.subvariants.forEach((subvariant, subIndex) => {
            if (typeof subvariant.name !== 'string' || subvariant.name.trim() === '') {
              errors.push(`Subvariant name at index ${subIndex+1} in variant at index ${index+1} should be a non-empty.`);
            }

            const MRPValue = Number(subvariant.MRP);
            const SPValue = Number(subvariant.SP);

            if (isNaN(MRPValue) || isNaN(SPValue)) {
              errors.push(`MRP and SP for subvariant at index ${subIndex+1} in variant at index ${index+1} should be valid numbers.`);
            }
          });
        }
      });
    }

    return errors;
  }

  async function addProduct(data) {
    const errors = validateData(data);
    const { name, GST, category, subCategory, descriptions, imgUrl, brand, variants } = data;

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    const CatName = category.label;
    const SubCatName = subCategory.label;
    const FinalProduct = new ProductModel(
        name,
        GST,
        CatName,
        SubCatName,
        brand,
        descriptions,
        imgUrl,
        variants
      );

    try {
        const docRef = await addDoc(collection(db, "products"), FinalProduct);
        console.log("Document written with ID: ", docRef.id);
        window.alert(`Document written with ID: ${docRef.id}`);
        // navigate("/");
    } catch (error) {
      console.error('API call error:', error);
      window.alert("Cannot create the product, Please try again");
      throw error;
    }
  }

  return { addProduct, validationErrors };
}

function ProductModel(
    productName,
    GST,
    mainCategory,
    subCategory,
    brand,
    productDescription,
    featureImage,
    variants
  ) {
    return {
      productName,
      GST,
      mainCategory,
      subCategory,
      brand,
      productDescription,
      featureImage,
      variants,

    };
  }
  

export default useCreateProduct;
