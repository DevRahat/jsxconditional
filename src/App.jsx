import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  return (
    <>
      <Todo task="Learn React" 
      isDone={true}></Todo>
      <Todo task="Learn CSS" 
      isDone={false}></Todo>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Developer></Developer>
      <Device name= "Laptop" price= "55"></Device>
      
      
      
      
    </>
  )
}
function Device(props){
  return (
    <h2>This is device: {props.name} price:{props.price}</h2>
  )
}

function Person(){
  const age=25;
  const money=20;
  const person={name: 'sakib', age: 19}
  return <h3>I am {person.name} with age: {age+money}</h3>
}
function Student({grade, score}){
  return (
  <div className='student'>
    <h3>This is A student</h3>
    <p>class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}
function Developer(){
  const developerStyle={
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Deve deveo</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
