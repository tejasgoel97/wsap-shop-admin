import { Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

const ProductForm = (props) => {
  const { name, setName, GST, setGST } = props;
  const [description, setDescription] = useState("");

  const handleProductNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGSTChange = (event) => {
    setGST(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-2xl font-bold mb-6">Product Information</h2>
      <div className="mb-4">
        <Label htmlFor="name" className="block text-sm font-medium">
          Product Name
        </Label>
        <TextInput
          type="text"
          id="name"
          value={name}
          onChange={handleProductNameChange}
          placeholder="Enter product name"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="gst" className="block text-sm font-medium">
          GST
        </Label>
        <TextInput
          type="text"
          id="gst"
          value={GST}
          onChange={handleGSTChange}
          placeholder="Enter GST"
        />
      </div>
      
    </div>
  );
};

export default ProductForm;
