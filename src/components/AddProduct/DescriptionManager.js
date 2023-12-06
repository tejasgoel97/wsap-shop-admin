import React, { useState } from 'react';

const DescriptionManager = (props) => {
  const {descriptions, setDescriptions} = props
  const [newDescription, setNewDescription] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddDescription = () => {
    if (newDescription.trim() !== '') {
      setDescriptions([...descriptions, newDescription]);
      setNewDescription('');
    }
  };

  const handleEditDescription = (index) => {
    setNewDescription(descriptions[index]);
    setEditIndex(index);
  };

  const handleUpdateDescription = () => {
    if (newDescription.trim() !== '' && editIndex !== -1) {
      const updatedDescriptions = [...descriptions];
      updatedDescriptions[editIndex] = newDescription;
      setDescriptions(updatedDescriptions);
      setNewDescription('');
      setEditIndex(-1);
    }
  };

  const handleDeleteDescription = (index) => {
    const updatedDescriptions = descriptions.filter((_, i) => i !== index);
    setDescriptions(updatedDescriptions);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Description Manager</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter new description"
          className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {editIndex !== -1 && (
          <button
            onClick={handleUpdateDescription}
            className="px-4 py-2 mt-2 mr-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Update
          </button>
        )}
        <button
          onClick={editIndex === -1 ? handleAddDescription : () => setEditIndex(-1)}
          className={`px-4 py-2 mt-2 rounded-lg ${
            editIndex === -1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          {editIndex === -1 ? 'Add' : 'Cancel'}
        </button>
      </div>
      <div>
        {descriptions.map((description, index) => (
          <div key={index} className="flex items-center justify-between mb-2 bg-gray-200 rounded-lg p-4">
            {editIndex === index ? (
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Edit description"
                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-700">{description}</p>
            )}
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditDescription(index)}
                className="px-2 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteDescription(index)}
                className="px-2 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionManager;
