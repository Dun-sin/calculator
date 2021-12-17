import React from 'react'
import './DisplayResult.css'

const DisplayResult = (props) => {
  return (
    <div className="result">
      <div className="display">
        {props.result}</div>
    </div>
  )
}

export default DisplayResult;