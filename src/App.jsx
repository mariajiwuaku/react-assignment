import { useState } from 'react'
import './App.css'
import ReactClass from './components/ReactClass'

function App() {
  let tutor = "Blessing";
  
  let age = 28;
  let career = "software engineer"

  return (
    <>
    <ReactClass/>
    <p>Good evening Coach {tutor} ! Hope you are doing great today ? I am really so excited to do this task And i m equally happy to find react easier to understand.<br/> My name is Maria-goretti Onyekachi Jiwuaku. I am {age} years old.I currently live in Abuja.
    I am a mum of a cute son.I started learning programming last year September out of post partum forgetfulness , i just wanted to learn something so i dont completely have memory lost lol, i did'nt even know what programming was all about. I have come to really developed great interest in the course.
    I also wanted a skill to enable work remotely and still be a mum. I really hope someday i will be a great {career}</p>
    <h3>Challenges in javascript</h3>
    <p>I have plenty Challenges in javascript, infact i have seen shege pro max in javascript, i had even wanted to quit. I really do not under arrays, map method, the last group project we did, i had diffculties in rendering as well. i really wish i can get a secret to understand javascript better, because i really want to earn a living here.</p>
      
    </>
  )
}

export default App
