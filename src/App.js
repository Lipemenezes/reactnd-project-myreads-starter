import React from 'react'
// import * as BooksAPI from './services/BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBook from './components/SearchBook'
import { Route, Link } from 'react-router-dom'
import * as StorageAPI from './services/StorageAPI'

class BooksApp extends React.Component {
  state = {
    shelfs: {
        currentlyReading: [],
        wantToRead: [],
        read: []
    },
  }

  componentDidMount() {
    this.setState(StorageAPI.get())
    // BooksAPI.getAll().then(books => {
    //   this.setState({
    //     shelfs: {
    //       currentlyReading: books.filter(book => book.shelf === `currentlyReading`),
    //       wantToRead: books.filter(book => book.shelf === `wantToRead`),
    //       read: books.filter(book => book.shelf === `read`)
    //     }
    //   })
    // })
  }

  changeBookShelf = (book, newShelf) => {
    let shelfs = this.state.shelfs
    shelfs[book.shelf] = shelfs[book.shelf].filter(stateBook => stateBook.id !== book.id)
    if (newShelf !== 'none')
      shelfs[newShelf] = shelfs[newShelf].concat([book])
    book.shelf = newShelf
    this.setState({
      shelfs: shelfs
    })
    StorageAPI.set(this.state)
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
                  <Bookshelf 
                    title='Currently Reading' 
                    books={this.state.shelfs.currentlyReading} 
                    onShelfChange={this.changeBookShelf} 
                    />
                  <Bookshelf 
                    title='Want to Read' 
                    books={this.state.shelfs.wantToRead} 
                    onShelfChange={this.changeBookShelf} 
                    />
                  <Bookshelf 
                    title='Read' 
                    books={this.state.shelfs.read} 
                    onShelfChange={this.changeBookShelf} 
                    />
                </div>
              </div>
              <div className="open-search">
                <Link to='/search' render={() => (
                  <SearchBook userBooks={this.state.shelfs} />
                  )}> 
                </Link>
              </div>
            </div>
          )} />

      </div>
    )
  }
}

export default BooksApp
