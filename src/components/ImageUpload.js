import React, { useState } from "react";

const ImageUpload = (props) => {
  const { imgUrl, onClick } = props;
  //   const [featureImage, setFeatureImage] = useState(null);

  return (
    <div className="p-4"               onClick={onClick}
    >
      <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden border border-gray-400 rounded-lg z-0">
        {imgUrl ? (
          <>
            <img
              src={imgUrl}
              alt="Feature"
              className="object-cover w-full h-full"
            />
            <button
              className="absolute top-0 right-0 bg-gray-400 text-white  rounded-tr-md rounded-bl-md p-1 hover:text-gray-400 hover:bg-gray-100"
            >
              Change
            </button>
          </>
        ) : (
          <div
            className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600"
           
          >
            <label
              htmlFor="featureImageInput"
              className="cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:text-white p-4 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 100 6 3 3 0 000-6zM3 5a1 1 0 100 2 1 1 0 000-2zM5 2a5 5 0 015 5 1 1 0 112 0 7 7 0 10-2.31 5.31L5 7.41l-1.71 1.7a1 1 0 11-1.42-1.42l3-3a1 1 0 011.42 0l3 3a1 1 0 11-1.42 1.42L5 7.41l-1.71 1.7A7 7 0 105 2z"
                  clipRule="evenodd"
                />
              </svg>
              Upload Image
              <button id="featureImageInput" className="sr-only" />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
