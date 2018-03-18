import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksGrid from './BooksGrid'

class Bookshelf extends React.Component {
  state = {
    title: this.props.title
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.state.title}</h2>
        <div className="bookshelf-books">
          <BooksGrid />
        </div>
      </div>
    )
  }
}

export default Bookshelf
