import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import Book from './Book'

class BookGrid extends React.Component {

  render() {
    return (
      <ol className="books-grid">
        <li>
          <Book />
        </li>
      </ol>
    )
  }
}

export default BookGrid
