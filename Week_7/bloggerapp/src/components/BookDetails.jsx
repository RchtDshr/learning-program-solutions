import React from 'react';

function BookDetails({ books }) {
  const hasBooks = books.length > 0;

  const bookList = (
    <ul>
      {books.map(book =>
        book.price >= 500 ? (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ) : null
      )}
    </ul>
  );

  return (
    <div className="section">
      <h1>Book Details</h1>
      {hasBooks ? bookList : <p>No books available</p>}
    </div>
  );
}

export default BookDetails;
