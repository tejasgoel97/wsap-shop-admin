import React, { useEffect, useState } from "react";

const ColorVariantList = (props) => {

    const {saveSubVariants, subVariants, setSubVariants} = props;

//   const [subVariants, setSubVariants] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");



  const addVariant = () => {
    if (name.trim() !== "" && value.trim() !== "") {
      if (!subVariants.some((variant) => variant.name === name)) {
        setSubVariants([...subVariants, { name: name, value: value }]);
        setName("");
        setValue("");
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
    const updatedVariants = [...subVariants];
    updatedVariants.splice(index, 1);
    setSubVariants(updatedVariants);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Color Variants</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={()=> saveSubVariants(subVariants)}>
            Save Changes
        </button>
      </div>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Enter a sub variant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-1/3 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter a sub variant value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-1/3 p-2 border border-gray-300 rounded"
        />
        
        <button
          onClick={addVariant}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Variant
        </button>
      </div>

      <ul>
        {subVariants.map((variant, index) => (
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
