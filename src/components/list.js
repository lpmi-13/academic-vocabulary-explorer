import React, { Component } from 'react';
import axios from 'axios';
import cx from 'classnames';
import key from 'weak-key';

import Header from './header';
import Loader from 'react-loaders';
import WordItem from './word_item';

const BASE_URL = 'https://micromaterials.org/derivation-api/list';

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wordList: []
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    axios.get(BASE_URL)
      .then(response => {
       console.log(response.data);
       if(response.data) {
         this.setState({wordList:response.data});
       }
     });
  }

  render() {

    let className = cx({
      hidden: this.state.wordList,
      active: !this.state.wordList
    });

    return (
      <div>
        <Header />
        <div className="long-list">
          <h2>Full list of words</h2>
          <Loader className={className} />
          <div className="row">
            {this.state.wordList && this.state.wordList.map((word) => (
              <div className="word-item col-12-xs">
                <WordItem 
                  word={word}
                  key={key(word)}
                />
              </div>
            ))}
          </div>          
        </div>
      </div>
    );
  }
}

export default List;
