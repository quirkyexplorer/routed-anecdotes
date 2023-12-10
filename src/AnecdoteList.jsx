/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
export default function AnecdoteList ({ anecdotes, notification }) {
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <h3>{ notification? notification : null}</h3>
      <ul>
        {anecdotes.map(anecdote => 
        <li key={anecdote.id} >
          <Link to={`/anecdoteView/${anecdote.id}`}>{anecdote.content}</Link>
        </li>)}
      </ul>
    </div>
  );
 
}