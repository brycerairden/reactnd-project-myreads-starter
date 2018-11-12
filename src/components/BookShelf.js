import React from 'react'
import Book from './Book'

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <Book
            key={book.id}
            book={book}
            books={props.books}
            onChangeShelf={props.onChangeShelf}
          />
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf;