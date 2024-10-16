import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user';
import Counter from './counter';
import { Posts } from './posts';

function App() {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  

  return (
    <>

    <h1>Hello React</h1>
    <Counter></Counter>
     <User user={user}></User>
     <Posts></Posts>


      
    </>
  )
}

export default App
