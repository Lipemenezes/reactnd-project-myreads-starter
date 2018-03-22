import React from 'react'
import * as BooksAPI from './services/BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBook from './components/SearchBook'
import { Route, Link } from 'react-router-dom'
// import * as StorageAPI from './services/StorageAPI'

class BooksApp extends React.Component {
  state = {
    shelfs: {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }
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

    if (book.shelf !== 'none')
      shelfs[book.shelf] = shelfs[book.shelf].filter(stateBook => stateBook.id !== book.id)

    if (newShelf !== 'none')
      shelfs[newShelf] = shelfs[newShelf].concat([book])

    book.shelf = newShelf
    this.setState({
      shelfs: shelfs
    })
    BooksAPI.update(book, newShelf)
  }

  render() {
    const shelfs = this.state.shelfs
    const allBooks = shelfs.currentlyReading.concat(shelfs.wantToRead, shelfs.read)
    return (
      <div className="app">
          <Route path='/search' render={() => (
            <SearchBook 
              userBooks={allBooks} 
              onShelfChange={this.changeBookShelf}
              />
          )} />

          <Route path='/' exact render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf 
                    title='Currently Reading' 
                    books={shelfs.currentlyReading} 
                    onShelfChange={this.changeBookShelf} 
                    />
                  <Bookshelf 
                    title='Want to Read' 
                    books={shelfs.wantToRead} 
                    onShelfChange={this.changeBookShelf} 
                    />
                  <Bookshelf 
                    title='Read' 
                    books={shelfs.read} 
                    onShelfChange={this.changeBookShelf} 
                    />
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'> 
                  Search Book
                </Link>
              </div>
            </div>
          )} />

      </div>
    )
  }
}

export default BooksApp
