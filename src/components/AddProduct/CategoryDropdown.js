import React, { useState } from "react";
import Select from "react-select";

const categories = [
  // ... (the provided data)
];

const brands = [
  // ... (the provided brand data)
];

const CategoryDropdown = (props) => {
  const {
    categories,
    brands,
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    selectedBrand,
    setSelectedBrand,
  } = props;

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setSelectedSubcategory(null); // Reset subcategory when changing the category
  };

  const handleSubcategoryChange = (selectedOption) => {
    setSelectedSubcategory(selectedOption);
  };

  const handleBrandChange = (selectedOption) => {
    setSelectedBrand(selectedOption.value);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">
        Select Category, Subcategory, and Brand
      </h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="w-full sm:w-1/2">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Category
          </label>
          <Select
            options={categories.map((item) => ({
              label: item.name,
              value: item.name,
            }))}
            value={selectedCategory}
            onChange={handleCategoryChange}
            placeholder="Select Category"
            className="w-full rounded-lg px-4 py-3 border focus:outline-none focus:border-blue-500 text-lg"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Subcategory
          </label>
          <Select
            options={
              selectedCategory
                ? categories
                    .find((item) => item.name === selectedCategory.value)
                    .subCategories.map((item) => ({
                      label: item.name,
                      value: item.name,
                    }))
                : []
            }
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            placeholder="Select Subcategory"
            className="w-full rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-lg"
            isDisabled={!selectedCategory}
          />
        </div>
      </div>

      <div className="w-full mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Brand
        </label>
        <Select
          options={brands.map((item) => ({
            label: item.name,
            value: item.name,
          }))}
          value={{value:selectedBrand, label:selectedBrand}}
          onChange={handleBrandChange}
          placeholder="Select Brand"
          className="w-full rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-lg"
        />
      </div>
    </div>
  );
};

export default CategoryDropdown;
