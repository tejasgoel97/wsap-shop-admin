import React, { useEffect, useState } from "react";
import { AddIconButton, DeleteIconButton } from "../Button/IconButton";
import { Table, TextInput } from "flowbite-react";

const ColorVariantList = (props) => {
  const { saveVariants, variants, setVariants } = props;

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
    <div className="justify-center flex">
      <div className="p-4 container xl:w-4/6 space-y-3">
        <div className="flex justify-between ">
          <h2 className="text-xl font-bold mb-4">Color Variants</h2>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => saveVariants(variants)}
          >
            Save Changes
          </button>
        </div>
        <div className="mb-4 flex space-x-2 items-center">
          <TextInput
            type="text"
            placeholder="Enter a variant name"
            value={variantName}
            onChange={(e) => setVariantName(e.target.value)}
          />
          <TextInput
            type="text"
            placeholder="Enter a variant value"
            value={variantValue}
            onChange={(e) => setVariantValue(e.target.value)}
          />
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <AddIconButton onClick={() => addVariant()}>
            Add Variant
          </AddIconButton>
        </div>
        <div className="mb-4">
          <p>Selected Color: {selectedColor}</p>
        </div>
        <Table hoverable>
        <Table.Head>
          <Table.HeadCell>S No</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Hex Value</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">

          {variants.map((variant, index) => (
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell> <div
                className="w-9 h-9"
                style={{ background: variant.value }}
              ></div></Table.Cell>
              <Table.Cell> <p>Name: {variant.name}</p>
                <p>Value: {variant.value}</p></Table.Cell>

              <Table.Cell>
              <DeleteIconButton onClick={() => removeVariant(index)}/>
              </Table.Cell>
            </Table.Row>
          ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ColorVariantList;
