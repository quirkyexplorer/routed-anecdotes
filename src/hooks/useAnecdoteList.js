// useAnecdoteList.js
import { useState } from 'react';

export default function useAnecdoteList() {
  const [anecdotes, setAnecdotes] = useState([]);

  const addNew = (anecdote) => {
    setAnecdotes([...anecdotes, anecdote]);
  };

  return {
    anecdotes,
    addNew,
  };
}


