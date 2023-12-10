import { Routes, Route, Link, useMatch } from 'react-router-dom'
import AnecdoteList from './AnecdoteList';
import CreateNew  from './CreateNew';
import  About  from './About';
import AnecdoteView from './AnecdoteView';
// eslint-disable-next-line react/prop-types
export default function Menu({anecdotes, addNew, notification}) {
  const padding = {
    paddingRight: 5
  }

  const match = useMatch('/anecdoteView/:id'); 
  // eslint-disable-next-line react/prop-types
  const anecdote = match ? anecdotes.find( anecdote => anecdote.id == Number(match.params.id)) : null;
 
  return (
    <div>
      <Link style={padding} to="/">Anecdotes</Link>
      <Link style={padding} to="/createNew">create new</Link>
      <Link style={padding} to="/about">about</Link>
      
      <Routes>
        <Route path="/anecdoteView/:id" element ={ <AnecdoteView anecdote={anecdote} />}/>
        <Route path="/" element ={ <AnecdoteList anecdotes={anecdotes}  notification={notification}/>}/>
        <Route path="/about" element ={ <About />}/>
        <Route path="/createNew" element ={ <CreateNew addNew={addNew} />}/>
      </Routes>
    </div>
  )
}