import React from 'react'
import * as BooksAPI from './services/BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBook from './components/SearchBook'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    wantToRead: [],
    currentlyReading: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const currentlyReading = books.filter(book => book.shelf === `currentlyReading`)
      const wantToRead = books.filter(book => book.shelf === `wantToRead`)
      const read = books.filter(book => book.shelf === `read`)
      this.setState({
        books: books,
        currentlyReading: currentlyReading,
        wantToRead: wantToRead,
        read: read
      })
    })
  }

  render() {
    return (
      <div className="app">
          <Route path='/search' render={() => (
            <SearchBook />
          )} />

          <Route path='/' exact render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf title='Currently Reading' books={this.state.currentlyReading} />
                  <Bookshelf title='Want to Read' books={this.state.wantToRead} />
                  <Bookshelf title='Read' books={this.state.read} />
                </div>
              </div>
              <div className="open-search">
                <Link to='/search' > 
                  Add a book
                </Link>
              </div>
            </div>
          )} />

      </div>
    )
  }
}

export default BooksApp
