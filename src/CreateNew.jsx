/* eslint-disable react/prop-types */
//import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useField } from './hooks'

export default function CreateNew ({ addNew }) {
  // useFiel is a custom hook, it abstracts away what useState did
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  const navigate = useNavigate()

  const anecdoteObject = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew(anecdoteObject)
    navigate("/");
  }

  const handleClick = () => {
    content.handleReset();
    author.handleReset();
    info.handleReset();
  }

  return (
    <div>
      <h2>create a new anecdote</h2>

      <form onSubmit={handleSubmit}>
        <div>
          content
          <input 
            type={content.type}
            value={content.value}
            onChange={content.onChange} 
          />
        </div>
        <div>
          author
          <input 
            {...author}
          />
        </div>
        <div>
          url for more info
          <input 
            {...info}
          />
        </div>
        <button type='submit'>create</button>
        <button type='reset' onClick={handleClick}>reset</button>
      </form>
      
    </div>
  )

}