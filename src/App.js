import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core'
import { FormControl, Input, InputLabel } from '@material-ui/core'

import Todo from './components/Todo'
import db from './firebase';

import firebase from 'firebase';

import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect( () => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id , todo:doc.data().todo})))
    })
  },[])

  const addTodo = (event) => {
    event.preventDefault();
    if(input){
      db.collection('todos').add({
        todo : input,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('')
   }
  }

  return (
    <div className="App">
      <h1>Todo App With Firebase</h1>
      <form onSubmit={addTodo}>
        <FormControl>
          <InputLabel>Create Todo</InputLabel>
          <Input id='my-input' value={input} onChange={ (event) => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color='primary' onClick={addTodo} >Add Todo</Button>
        </FormControl>
      </form>
      <ul>
        {todos.map(todo =>(<Todo text={todo} />))} 
      </ul>
    </div>
  );
}

export default App;
