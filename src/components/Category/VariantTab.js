import React, { useEffect, useState } from "react";

const ColorVariantList = (props) => {

    const {saveVariants, variants, setVariants} = props;

//   const [variants, setVariants] = useState([]);
  const [variantName, setVariantName] = useState("");
  const [variantValue, setVariantValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    setVariantValue(selectedColor);
  }, [selectedColor]);

  const addVariant = () => {
    if (variantName.trim() !== "" && variantValue.trim() !== "") {
      if (!variants.some((variant) => variant.name === variantName)) {
        setVariants([...variants, { name: variantName, value: variantValue }]);
        setVariantName("");
        setVariantValue("");
      } else {
        alert("Variant name must be unique.");
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addVariant();
    }
  };

  const removeVariant = (index) => {
    const updatedVariants = [...variants];
    updatedVariants.splice(index, 1);
    setVariants(updatedVariants);
  };

  return (
    <div className="p-4">
      <div className="flex justify-around">
        <h2 className="text-xl font-bold mb-4">Color Variants</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={()=> saveVariants(variants)}>
            Save Changes
        </button>
      </div>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Enter a variant name"
          value={variantName}
          onChange={(e) => setVariantName(e.target.value)}
          className="w-1/3 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter a variant value"
          value={variantValue}
          onChange={(e) => setVariantValue(e.target.value)}
          className="w-1/3 p-2 border border-gray-300 rounded"
        />
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
        <button
          onClick={addVariant}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Variant
        </button>
      </div>
      <div className="mb-4">
        <p>Selected Color: {selectedColor}</p>
      </div>
      <ul>
        {variants.map((variant, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
          >
            <span>{index + 1}</span>
            <div
              className="w-9 h-9"
              style={{ background: variant.value }}
            ></div>
            <div>
              <p>Name: {variant.name}</p>
              <p>Value: {variant.value}</p>
            </div>
            <button
              onClick={() => removeVariant(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover-bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorVariantList;
