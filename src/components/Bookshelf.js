import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import BooksGrid from './BooksGrid'

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
          <BooksGrid books={books} />
        </div>
      </div>
    )
  }
}

export default Bookshelf
