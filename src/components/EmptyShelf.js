import React from 'react'
import GoIconPack, { GoBook } from 'react-icons/lib/go'

class EmptyShelf extends React.Component {
  render() {
    return (
      <div style={{color: '#999', textAlign: 'center'}}>
        <GoBook style={{fontSize: 100}}/>
        <br/>
        {this.props.message} 
      </div>
    )
  }
}

export default EmptyShelf
