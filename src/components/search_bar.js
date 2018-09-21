import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input 
            value={this.state.term}
            onChange={ event => this.onInputChange(event.target.value.toLowerCase())}/>
        </div>
        <div>
          <h2>Enter a search term</h2>
        </div>
      </div>
    );
  } 

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term); 
  }

}

export default SearchBar;
