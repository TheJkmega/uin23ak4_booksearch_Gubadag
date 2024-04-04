import React from 'react'
import BookCard from './BookCard'

function SearchResults({ results }) {
  return (
    <section className="search-results">
      {results.map((result, index) => (
        <BookCard key={index} book={result} />
      ))}
    </section>
  )
}

export default SearchResults