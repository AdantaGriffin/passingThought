import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';
import '../App.css';
export function AddThoughtForm(props) {

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };
    if(text.length){
      props.addThought(thought);
    }
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
