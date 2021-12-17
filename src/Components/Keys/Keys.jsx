import React from 'react'
import '../Keys/Keys.css'

const Keys = (props) => {

  const eventListner = (event) => {
    // console.log(event.target.name)
    props.whenClicked(event.target.name)
  }

  return (
    <div className="keys">

      {/* First Row */}
      <div className="first">
        <button name="/" onClick={eventListner}>÷</button>
        <button name="*" onClick={eventListner}>X</button>
        <button name="C" onClick={eventListner}>C</button>
        <button name="AC" onClick={eventListner}>AC</button>
      </div>

      {/* Second Row */}
      <div className="second">
        <button name="7" onClick={eventListner}>7</button>
        <button name="8" onClick={eventListner}>8</button>
        <button name="9" onClick={eventListner}>9</button>
        <button name="+" onClick={eventListner}>+</button>
      </div>

      {/* Third Row */}
      <div className="third">
        <button name="4" onClick={eventListner}>4</button>
        <button name="5" onClick={eventListner}>5</button>
        <button name="6" onClick={eventListner}>6</button>
        <button name="-" onClick={eventListner}>-</button>
      </div>

      {/* Fourth Row */}
      <div className="four">
        <button name="1" onClick={eventListner}>1</button>
        <button name="2" onClick={eventListner}>2</button>
        <button name="3" onClick={eventListner}>3</button>
        <button name="**10" onClick={eventListner}>EP</button>
      </div>

      {/* Fifth Row */}
      <div className="fifth">
        <button name="0" onClick={eventListner}>0</button>
        <button name="**" onClick={eventListner}>^</button>
        <button name="." onClick={eventListner}>.</button>
        <button name="=" onClick={eventListner}>=</button>
      </div>
    </div>
  )
}

export default Keys
