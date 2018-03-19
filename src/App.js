import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBook from './components/SearchBook'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    const appTitle = 'MyReads';

    return (
      <div className="app">
      
          <Route path='/search' render={() => (
            <SearchBook />
          )} />

          <Route path='/' exact render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>{appTitle}</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf title='Currently Reading'/>
                  <Bookshelf title='Want to Read' />
                  <Bookshelf title='Read'/>
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
