import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

class Book extends React.Component {
  state = {
    book: this.props.book
  }

  render() {
    const styleBookCover = {
      width: 128, 
      height: 193, 
      backgroundImage: `url(${this.state.book.imageLinks.smallThumbnail})`
    }

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'
            style={styleBookCover}>
          </div>
          <div className='book-shelf-changer'>
            <select>
              <option disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value=''>None</option>
            </select>
          </div>
          
        </div>
        <div className='book-title'>
          {this.state.book.title}
        </div>
        <div className='book-authors'>
          {this.state.book.authors.map(author => 
            <div key={author}>{author}</div>
          )}
        </div>
      </div>
    )
  }
}

export default Book
