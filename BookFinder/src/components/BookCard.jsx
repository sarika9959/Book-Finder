import React from "react";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/128x193?text=No+Cover";
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={coverUrl} alt={book.title} className="w-32 h-48 object-cover mb-2 rounded" />
      <h3 className="font-bold text-lg text-center">{book.title}</h3>
      <p className="text-gray-700 text-sm">{book.author_name?.join(", ") || "Unknown Author"}</p>
      <p className="text-gray-500 text-xs">First published: {book.first_publish_year || "N/A"}</p>
    </div>
  );
};

export default BookCard;
