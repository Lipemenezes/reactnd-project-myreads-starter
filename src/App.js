import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchBook from './SearchBook'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

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
