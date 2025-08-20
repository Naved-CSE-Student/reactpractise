import React from 'react'

const Card = (props) => { 
  return (
    <div>
      <div className="first">
          <img className="image" src=""></img>
      </div>
      <div className="second">
        <h3 className="text">{props.user}</h3>
        <h3 className="text">{props.prof}</h3>
        <h3 className="text">{props.age}, {props.city}</h3>
      </div>
      <div className="third">
        <button className="buttonName">
          Add Friend
        </button>
      </div>
    </div>
  )
}

export default Card
