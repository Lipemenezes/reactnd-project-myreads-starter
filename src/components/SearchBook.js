import React from 'react'
import * as BooksAPI from '../services/BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import Book from './Book'
import debounce from 'debounce'
import { HashLoader } from 'react-spinners'
import EmptyShelf from './EmptyShelf'

class SearchBook extends React.Component {
  constructor() {
    super()
    this.callSearchAPI = debounce(this.callSearchAPI, 500)
  }
  state = {
    books: [],
    isEmptyQuery: true,
    loading: false
  }
  searchBooks(event) {
    this.setState({
      loading: true
    })
    this.callSearchAPI(event.target.value)  
  }
  callSearchAPI(value) {
    !value ?
    this.setState({
      books: [], 
      isEmptyQuery: true,
      loading: false
    }) :
    BooksAPI.search(value).then(books => {
        books && books.error ? 
        this.setState({
          books: [], 
          isEmptyQuery: false,
          loading: false
        }) : 
        this.setState({
            books: books.map(book => {
              let bookMatch = this.props.userBooks.filter(userBook => userBook.id === book.id)
              book['shelf'] = bookMatch.length ? bookMatch[0]['shelf'] : `none`
              return book
            }), 
            isEmptyQuery: false,
            loading: false
        })            
      }
    )
  }
  render() {
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search"> 
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchBooks.bind(this)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.loading ?
                  <HashLoader
                    color={'#2e7d32'} 
                    loading={this.state.loading} 
                  /> :
                  !this.state.isEmptyQuery ? 
                  (this.state.books.length ? 
                    this.state.books.map(book => 
                      <Book 
                        book={book} 
                        key={book.id} 
                        onShelfChange={this.props.onShelfChange} 
                      />
                    ) :
                    <EmptyShelf message='We could not find any books!' />
                  ) : 
                  <div></div>
                }
              </ol>
            </div>
          </div> 
    )
  }
}

export default SearchBook
