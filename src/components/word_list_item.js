import React from 'react';

const WordListItem = ( word ) => {
// not needed because the above call looks for a 'word' inside the props
// const word = props.word;

  return (
     <li className="list-group-item">
       <div className="media-heading">
         <div className="specific-word">
           {word.word} 
         </div>
         <div>
           {word.word_class}
         </div>
       </div>
     </li>
  );
}

export default WordListItem;
