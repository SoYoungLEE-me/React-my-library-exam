import React from "react";

const BookCard = ({ book }) => {
  const noImage =
    "https://www.shutterstock.com/image-vector/no-image-available-icon-vector-260nw-1323742826.jpg";

  const coverId = book.cover_id || book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : noImage;

  return (
    <div className="book-card text-center">
      <img src={coverUrl} alt={book.title} />
      <h6>{book.title}</h6>
      <p>
        {book.authors?.map((a) => a.name).join(", ") ||
          book.author_name?.join(", ") ||
          "저자 미상"}
      </p>
    </div>
  );
};

export default BookCard;
