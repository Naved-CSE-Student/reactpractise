import React from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const users = [
    {
      "photo": "https://randomuser.me/api/portraits/men/11.jpg",
      "name": "Aarav Mehta",
      "profession": "Software Developer",
      "age": 28,
      "city": "Bangalore"
    },
    {
      "photo": "https://randomuser.me/api/portraits/women/22.jpg",
      "name": "Isha Sharma",
      "profession": "UI/UX Designer",
      "age": 25,
      "city": "Mumbai"
    },
    {
      "photo": "https://randomuser.me/api/portraits/men/33.jpg",
      "name": "Rohan Verma",
      "profession": "Data Scientist",
      "age": 30,
      "city": "Delhi"
    },
    {
      "photo": "https://randomuser.me/api/portraits/women/44.jpg",
      "name": "Neha Iyer",
      "profession": "Digital Marketer",
      "age": 27,
      "city": "Chennai"
    },
    {
      "photo": "https://randomuser.me/api/portraits/men/55.jpg",
      "name": "Kabir Joshi",
      "profession": "Civil Engineer",
      "age": 32,
      "city": "Hyderabad"
    }
  ]

  

  return (
    <div className="box">
      {users.map((elem, idx) => {
        return (
          <div className="outer">
            <Card key={idx} user={elem.name} city={elem.city} prof={elem.profession} age={elem.age}/>
          </div>
        )
      })}
    </div>

  )
}

export default App