import React from 'react'
import '../App.css'
import Book from './Book'
// import BooksAPI from '../services/BooksAPI'

class BookGrid extends React.Component {

	state = {
		books: this.props.books
	}

  render() {
  	const books = this.props.books

    return (
      <ol className="books-grid">
          {books.length ? (books.map(book => <Book book={book} key={book.id}/> )) : <div>Get some custom component for spinner..</div>}
      </ol>
    )
  }
}

export default BookGrid
