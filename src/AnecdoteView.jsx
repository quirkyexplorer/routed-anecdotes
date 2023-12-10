/* eslint-disable react/prop-types */

export default function AnecdoteView({ anecdote }) {
 // console.log(anecdote);
  return (
    <div>
      <h2> {anecdote.content}</h2>
      <div>Author {anecdote.author}</div>
      <div>Link: {anecdote.info}</div>
      <div>Votes: <strong>{anecdote.votes}</strong></div>
    </div>
  )
}
