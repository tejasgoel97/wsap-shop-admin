import React, { useState } from 'react';

const ReviewForm = (props) => {
  const {reviews, setReviews} = props
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    if (rating > 0 && reviewText.trim() !== '') {
      if (editIndex === -1) {
        // Add new review
        const newReview = {
          rating,
          reviewText,
        };
        setReviews([...reviews, newReview]);
      } else {
        // Update existing review
        const updatedReviews = [...reviews];
        updatedReviews[editIndex] = { rating, reviewText };
        setReviews(updatedReviews);
        setEditIndex(-1); // Reset edit mode
      }
      setRating(0);
      setReviewText('');
    }
  };

  const handleEditReview = (index) => {
    const reviewToEdit = reviews[index];
    setRating(reviewToEdit.rating);
    setReviewText(reviewToEdit.reviewText);
    setEditIndex(index);
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Add Your Review</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Rating</label>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <label
              key={num}
              className={`cursor-pointer text-2xl ${
                num <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              <input
                type="radio"
                name="rating"
                value={num}
                checked={rating === num}
                onChange={handleRatingChange}
                className="sr-only"
              />
              ★
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Review</label>
        <textarea
          rows="3"
          value={reviewText}
          onChange={handleReviewTextChange}
          placeholder="Write your review here..."
          className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleSubmitReview}
        className={`px-4 py-2 rounded-lg ${
          editIndex === -1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {editIndex === -1 ? 'Submit Review' : 'Update Review'}
      </button>

      {reviews.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 text-2xl">{Array(review.rating).fill('★').join('')}</span>
                  <span className="text-gray-600 ml-2">{`(${review.rating} out of 5)`}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditReview(index)}
                    className="px-2 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteReview(index)}
                    className="px-2 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {editIndex === index ? (
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Rating</label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <label
                          key={num}
                          className={`cursor-pointer text-2xl ${
                            num <= rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="editRating"
                            value={num}
                            checked={rating === num}
                            onChange={handleRatingChange}
                            className="sr-only"
                          />
                          ★
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea
                    rows="3"
                    value={reviewText}
                    onChange={handleReviewTextChange}
                    placeholder="Write your review here..."
                    className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              ) : (
                <p className="text-gray-700">{review.reviewText}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
