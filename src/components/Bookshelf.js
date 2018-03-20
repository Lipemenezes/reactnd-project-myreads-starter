import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import Book from './Book'

class Bookshelf extends React.Component {
  state = {
    title: this.props.title,
  }

  render() {
    const books = this.props.books

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.state.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {books.length ? (books.map(book => <Book book={book} key={book.id}/> )) : <div>Get some custom component for spinner..</div>}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
