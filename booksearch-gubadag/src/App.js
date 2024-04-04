import React, { useState, useEffect } from 'react'
import './App.css'
import SearchResults from './components/SearchResults'
import SearchBar from './components/SearchBar'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchFrontPage = async () => {
      try {
        const response = await fetch('https://openlibrary.org/search.json?q=james+bond')
        const data = await response.json()
        setBooks(data.docs)
      } catch (error) {
        console.error('Det oppsto ett problem:', error)
      }
    }

    fetchFrontPage()
  }, [])

  return (
    <main className="app">
      <header className="app-header">
        <h1>Booksearch</h1>
      </header>
      <section className="search-bar-container">
        <SearchBar onSearch={setBooks} />
      </section>
      <SearchResults results={books} />
    </main>
  )
}

export default App