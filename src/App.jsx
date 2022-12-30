import { useState } from 'react'
import './App.css'
import PresentationCard from './components/PresentationCard'
import ChangeColor from "./components/ChangeColor"
import information from "./components/Information.json"




function App() {

  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]

  const fuentes = ["'Courier New', Courier, monospace",
"Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
"Verdana, Geneva, Tahoma, sans-serif",
"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
"'Times New Roman', Times, serif",
"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
"Arial, Helvetica, sans-serif"
] 

  const randomIndex = Math.floor(Math.random() * colors.length)

  const [index, setIndex] = useState(randomIndex)

  const name = information.map( user => user.name.title + " " + user.name.first + " " + user.name.last )

  const email = information.map( user => user.email )

  const number = information.map( user => user.phone )

  const ubication = information.map( user => user.location.country + " " + user.location.state + " " + user.location.city )

  let changeIndex = () => {
    const newRandom = Math.floor(Math.random() * colors.length)
    setIndex (newRandom)
  }

  

 
  return (
    <div className="App"
    style = { {backgroundColor : colors[index]} }> 


    <ChangeColor
    color = {colors [index]}
    email = {email [ index ]}
    number = {number [ index ]}
    ubication = {ubication [ index ]}
    name = {name[ index ]}
    fuente = {fuentes [index]}

    />

    <button className='boton-aleatorio' onClick = { changeIndex }> aleatorio </button>

    </div>
  )
}

export default App
