import React from 'react'

function BookCard({ book }) {
  const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`

  return (
    <article className="book-card">
      <section className="book-cover">
        <img src={coverUrl} alt="Book Cover" />
      </section>
      <section className="book-details">
        <h3>{book.title}</h3>
        <p>First Published: {book.first_publish_year}</p>
        <p>Author: {book.author_name && book.author_name.join(', ')}</p>
        <p>Average Rating: {book.average_rating || 'N/A'}</p>
        <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">Find on Amazon</a>
      </section>
    </article>
  )
}

export default BookCard