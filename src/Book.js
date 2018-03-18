import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'
            style={{
              width: 128, 
              height: 193, 
              backgroundImage: `url(http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api)`
            }}>
          
          </div>
          <div className='book-shelf-changer'>
            <select>
              <option value=''>Move to...</option>
              <option value=''>Currently Reading</option>
              <option value=''>Want to Read</option>
              <option value=''>Read</option>
              <option value=''>None</option>
            </select>
          </div>
          
        </div>
        <div className='book-title'>
        
        </div>
        <div className='book-authors'>
        
        </div>
      </div>
    )
  }
}

export default Book
