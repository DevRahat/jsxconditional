import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors=['Sakib', 'Raj', 'Jasim', 'Ruble'];
  const singers=[
    {id:1, name: 'Mahfuzer Rahman', age: 68},
    {id:2, name: 'Shuvro Dev', age: 28},
    {id: 3, name: 'Pritam', age: 30}
  ];
  return (
    <>
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }
      {
        singers.map(singer=><Singer singer={singer}></Singer> )
      }

      <Todo task="Learn React" 
      isDone={true}></Todo>
      <Todo task="Learn CSS" 
      isDone={false}></Todo>
      <Todo task="Learn HTML" 
      isDone={true}></Todo>
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
