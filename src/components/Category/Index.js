import React, { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
import SubCategoryBox from "./SubCategoryBox";
import BrandBox from "./BrandBox";
import VariantTab from "./VariantTab";
import SubVariantTab from "./SubVariantTab";

const emptyCategory = {
  name: "",
  imageUrl: "",
  subCategories: [],
};
const EmptyBrand = {
  name: "",
  imageUrl: "",
};

const Category = ({ selectedTab, metaData, saveBrands, saveCategories, saveVariants, saveSubVariants }) => {
  
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [variants, setVariants] = useState([])
  const [subVariants, setSubVariants] = useState([])
  // const {saveBrands} = useCategories();
  // console.log(brands)
  console.log(categories)

  function AddCategory() {
    setCategories([...categories, { ...emptyCategory }]);
  }
  console.log(metaData);
  function AddBrand() {
    setBrands([...brands, { ...EmptyBrand }]);
  }

  useEffect(()=>{
    if(metaData.categories)setCategories(metaData.categories)
    if(metaData.brands)setBrands(metaData.brands)
    if(metaData.variants)setVariants(metaData.variants)
    if(metaData.subVariants)setSubVariants(metaData.subVariants)
  },[metaData])

  return (
    <>
      {selectedTab === "categories" && (
        <div className="justify-center flex">
          <div className="container xl:w-4/6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-gray-500 font-bold text-2xl">
                Category
              </label>
              <button
                className="bg-green-700 max-w-full mx-2 my-2 px-2 py-2 text-center text-white rounded-full"
                onClick={() => AddCategory()}
              >
                Add Category
              </button>
            </div>
            {categories.map((category, categoryIndex) => {
              return (
                <div className="border p-3 gap-3 bg-slate-100" key={categoryIndex}>
                  <CategoryBox
                    category={category}
                    categories={categories}
                    setCategories={setCategories}
                    categoryIndex={categoryIndex}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.subCategories.map((subCat, subCatIndex) => (
                      <SubCategoryBox
                        key={subCatIndex}
                        subCat={subCat}
                        subCatIndex={subCatIndex}
                        setCategories={setCategories}
                        categories={categories}
                        categoryIndex={categoryIndex}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="float-right">
              <button
                className="bg-green-700 max-w-full mx-2 my-2 px-2 py-2 text-center text-white rounded-full"
                onClick={() => saveCategories(categories)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedTab === "brands" && (
        <div className="justify-center flex">
          <div className="container xl:w-4/6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-gray-500 font-bold md:text-right mb-1 ml-5 md:mb-0 pr-4">
                Brand
              </label>
              <button
                className="bg-green-700 max-w-full mx-2 my-2 px-2 py-2 text-center text-white rounded-full"
                onClick={() => AddBrand()}
              >
                Add brand
              </button>
            </div>
            {brands.map((brand, brandIndex) => (
              <BrandBox
                key={brandIndex}
                brand={brand}
                brandIndex={brandIndex}
                brands={brands}
                setBrands={setBrands}
              />
            ))}
            <div className="float-right">
              <button
                className="bg-green-700 max-w-full mx-2 my-2 px-2 py-2 text-center text-white rounded-full"
                onClick={() => saveBrands(brands)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedTab === "variant" && (
        <VariantTab saveVariants={saveVariants} variants={variants} setVariants={setVariants}/>
      )}
      {selectedTab === "subVariant" && (
        <SubVariantTab saveSubVariants={saveSubVariants} subVariants={subVariants} setSubVariants={setSubVariants}/>
      )}
    </>
  );
};

export default Category;
