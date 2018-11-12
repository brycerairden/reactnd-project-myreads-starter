import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookCase from './components/BookCase'
import Search from './components/Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.putUpBooks();
  }

  putUpBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.putUpBooks();
    });
  }


  render() {
    const {books} = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path='/'
            render = {() =>
              <BookCase
                books={books}
                onChangeShelf={this.changeShelf}
              />
            }
          />
          <Route exact path='/search'
            render = {() =>
              <Search
                books={books}
                onChangeShelf={this.changeShelf}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp