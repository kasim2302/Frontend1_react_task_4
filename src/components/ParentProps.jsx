import React from 'react'
import ChildProbs from './ChildProbs'

const ParentProps = () => {

    const Character_name = "Iron man"
    const Age = 60
    const powers = ["SuperHuman,","Strength,","Durability,","Flight"]
    const BioDatas = {name:"Robert Downey Jr",Age:60,Country:"America"}
    const Collegues = [{name:"Captain America",Age:44},{name:"Hulk",Age:54}]
  return (
    <>
      <div>
        <ChildProbs 
          name={Character_name}
          age = {Age}
          powers = {powers}
          biodatas = {BioDatas}
          collegues = {Collegues}
        />
      </div>
    </>
  )
}

export default ParentProps