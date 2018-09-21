import React from 'react';

import key from 'weak-key';
import WordListItem from './word_list_item';

const WordList = (props) => {

  const tag_to_class_map = {
    'a' : 'Article',
    'c' : 'Coordinator',
    'd' : 'Determiner',
    'i' : 'Preposition',
    'j' : 'Adjective',
    'n' : 'Noun',
    'v' : 'Verb',
    'r' : 'Adverb',
  }

    const wordItems = (props.words.length > 0) ? props.words.map((word) => {
      return <WordListItem
               key={word.word + '_' + word.pos}
               word={word.word}
               word_class={tag_to_class_map[word.pos]} />
    }) : <WordListItem word={'nothing found'} />;

    return (
      <ul className="list-group">
        {wordItems.length > 0 ? wordItems : ''} 
      </ul>
    );

}

export default WordList;
