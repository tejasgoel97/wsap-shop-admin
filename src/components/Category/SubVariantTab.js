import { Table, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { AddIconButton, DeleteIconButton } from "../Button/IconButton";

const ColorVariantList = (props) => {
  const { saveSubVariants, subVariants, setSubVariants } = props;

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
    <div className="p-4 container mx-auto">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Color Variants</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => saveSubVariants(subVariants)}
        >
          Save Changes
        </button>
      </div>
      <div className="mb-4 flex space-x-2">
        <TextInput
          type="text"
          placeholder="Enter a sub variant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Enter a sub variant value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        
        <AddIconButton onClick={addVariant} label="Add Sub Variant"/>
      </div>

 <Table striped>
      <Table.Head>
              <Table.HeadCell>S No</Table.HeadCell>
              <Table.HeadCell>Value</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Delete</span>
              </Table.HeadCell>
            </Table.Head>
        {subVariants.map((variant, index) => (
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
                </Table.Cell>
                <Table.Cell>
                  <p>Name: {variant.name}</p>
                  <p>Value: {variant.value}</p>
                </Table.Cell>
                <Table.Cell align="right">
                  <DeleteIconButton onClick={() => removeVariant(index)} label={"Delete"}/>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          // <li
          //   key={index}
          //   className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
          // >
          //   <span>{index + 1}</span>
          //   <div
          //     className="w-9 h-9"
          //     style={{ background: variant.value }}
          //   ></div>
          //   <div>
          //     <p>Name: {variant.name}</p>
          //     <p>Value: {variant.value}</p>
          //   </div>
          //   <button
          //     onClick={() => removeVariant(index)}
          //     className="bg-red-500 text-white px-2 py-1 rounded hover-bg-red-600"
          //   >
          //     Remove
          //   </button>
          // </li>
        ))}
      </Table>
    </div>
  );
};

export default ColorVariantList;
