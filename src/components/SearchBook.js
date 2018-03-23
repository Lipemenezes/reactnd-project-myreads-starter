import React from 'react'
import * as BooksAPI from '../services/BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends React.Component {
  state = {
    books: [],
    isEmptyQuery: true
  }
  searchBooks(event) {
    !event.target.value ?
    this.setState({books: [], isEmptyQuery: true}) :
    BooksAPI.search(event.target.value).then(books => {
      books && books.error ? 
      this.setState({
        books: [], 
        isEmptyQuery: false
      }) : 
      this.setState({
        books: books.map(book => {
          let bookMatch = this.props.userBooks.filter(userBook => userBook.id === book.id)
          book['shelf'] = bookMatch.length ? bookMatch[0]['shelf'] : `none`
          return book
        }), 
        isEmptyQuery: false})            
      }
    )
  }
  render() {
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search"> 
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchBooks.bind(this)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.isEmptyQuery === false ? 
                  (this.state.books.length ? 
                    this.state.books.map(book => 
                      <Book 
                        book={book} 
                        key={book.id} 
                        onShelfChange={this.props.onShelfChange} 
                      />
                    ) :
                    <div>Nenhum resultado</div>
                  ) : 
                  <div>Sem pesquisa</div>
                }
              </ol>
            </div>
          </div> 
    )
  }
}

export default SearchBook
