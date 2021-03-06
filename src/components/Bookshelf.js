import React from 'react'
import '../App.css'
import Book from './Book'
import EmptyShelf from './EmptyShelf'

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
              {
                books.length ? 
                books.map(book => <Book book={book} key={book.id} onShelfChange={this.props.onShelfChange} /> ) : 
                <div>
                  <EmptyShelf message='No books here!' />
                </div>
              }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
