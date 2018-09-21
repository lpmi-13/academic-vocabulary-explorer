import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import SearchBar from './search_bar';
import WordList from './word_list';

const BASE_URL = 'https://micromaterials.org/avl-api/search?word=';

class SearchDerivations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      words: []
    };

  }

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
          if (!immediate) func.apply(context, args);
	};
	var callNow = immediate && !timeout;
	clearTimeout(timeout);
	timeout = setTimeout(later, wait);
	if (callNow) func.apply(context, args);
    };
  };

  wordSearch(term) {

    axios.get(BASE_URL + term)
      .then(response => {
        if (response.data) {
          this.setState({words: response.data});
        }
      });
  }

  render() {

    const initialSearch = this.debounce((term) => { this.wordSearch(term) }, 300);

    return (
      <div>
        <h2>Search for related words</h2>
        <div>
          <SearchBar onSearchTermChange={initialSearch} />
          <WordList words={this.state.words === null ? [] : this.state.words} />
        </div>
      </div>
    );
  }
}

export default SearchDerivations;
