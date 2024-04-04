import React, { useState } from 'react'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchTerm.length >= 3) {
      fetchBooks(searchTerm)
    }
  }

  const fetchBooks = async (term) => {
    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(term)}`)
    const data = await response.json()
    onSearch(data.docs)
  }

  return (
    <section className="searchBar">
        <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..."/>
        <button type="submit">Search</button>
        </form>
    </section>
  )
}

export default SearchBar