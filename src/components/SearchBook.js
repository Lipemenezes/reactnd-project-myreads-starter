import React from 'react'
import * as BooksAPI from '../services/BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends React.Component {

  state = {
    books: [],
    isEmptyQuery: false
  }

  searchBooks(event) {
    if (event.target.value && event.key === 'Enter') {
      BooksAPI.search(event.target.value).then( books =>
        {
          if(books) {
            books.error ? 
            this.setState({book: false, isEmptyQuery: true}) : 
            this.setState({books: books, isEmptyQuery: false}) 
          }
        }
      )
    }

  }

  render() {
    // this.props.userBooks
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search"> 
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onKeyPress={this.searchBooks.bind(this)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.isEmptyQuery === false ? this.state.books.map(book => <Book book={book} key={book.id} />) : <div>Nenhum livro</div>}
              </ol>
            </div>
          </div> 
    )
  }
}

export default SearchBook
