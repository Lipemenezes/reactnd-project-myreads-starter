import React from 'react'
import * as BooksAPI from './services/BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBook from './components/SearchBook'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    shelfs: {
        currentlyReading: [],
        wantToRead: [],
        read: []
    },
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        shelfs: {
          currentlyReading: books.filter(book => book.shelf === `currentlyReading`),
          wantToRead: books.filter(book => book.shelf === `wantToRead`),
          read: books.filter(book => book.shelf === `read`)
        }
      })
    })
  }

  changeBookShelf = (book, newShelf) => {
    let shelfs = this.state.shelfs
    shelfs[book.shelf] = shelfs[book.shelf].filter(stateBook => stateBook.id !== book.id)
    shelfs[newShelf] = shelfs[newShelf].concat([book])
    book.shelf = newShelf
    this.setState({
      shelfs: shelfs
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
                  <Bookshelf title='Currently Reading' books={this.state.shelfs.currentlyReading} />
                  <Bookshelf title='Want to Read' books={this.state.shelfs.wantToRead} />
                  <Bookshelf title='Read' books={this.state.shelfs.read} />
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
