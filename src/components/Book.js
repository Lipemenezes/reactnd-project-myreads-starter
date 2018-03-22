import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

class Book extends React.Component {

  render() {
    const onShelfChange = this.props.onShelfChange
    const book = this.props.book
    const styleBookCover = {
      width: 128, 
      height: 193, 
      backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`
    }
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'
            style={styleBookCover}>
          </div>
          <div className='book-shelf-changer'>
            <select 
              onChange={event => onShelfChange(book, event.target.value)}
              defaultValue={book.shelf}
              >
              <option disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
          
        </div>
        <div className='book-title'>
          {book.title}
        </div>
        <div className='book-authors'>
          {book.authors ? book.authors.map(author => <div key={author}>{author}</div>) : <div></div>}
        </div>
      </div>
    )
  }
}

export default Book
