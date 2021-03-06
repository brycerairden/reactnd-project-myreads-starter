import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class BookCase extends Component {
  state = {}

  render () {
    const { onChangeShelf, books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            key="currentlyReading"
            shelfName="Currently Reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
            onChangeShelf={onChangeShelf}
          />
          <BookShelf
            key="wantToRead"
            shelfName="Want To Read"
            books={books.filter(book => book.shelf === 'wantToRead')}
            onChangeShelf={onChangeShelf}
          />
          <BookShelf
            key="read"
            shelfName="Read"
            books={books.filter(book => book.shelf === 'read')}
            onChangeShelf={onChangeShelf}
          />
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookCase;
