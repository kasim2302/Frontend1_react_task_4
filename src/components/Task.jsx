import { useState } from "react"

const Task = () => {
    const [color,setColor] = useState("black")
    const [text,setText] = useState("Hello")
    const [box,setBox] = useState("hide")
    const [number,setNumber] = useState(0)
    const [img,setImg] = useState("img1")

    const [a,setA] = useState(0)
    const [b,setB] = useState(1)
    const [result,setResult] = useState(0)

    const [shape,setShape] = useState("circle")
   

    const changecolor = () =>{
        setColor(prev => (prev === "black" ? "yellow" :"black"))
    }

    const changetext = () =>{
        setText(prev => (prev === "Hello" ? "Welcome":"Hello"))
    }
    const togglebox = () => {
       setBox(prev => (prev === "hide" ? "show" : "hide"))
    }
     const increasecount = () => {
       setNumber(prev => (prev === 0 ? 1 : 0))
    }
    const toggleimage = () =>{
       setImg(prev => (prev === "img1" ? "img2" : "img1"))
    }
    
    const nextfibonumber = () =>{
      const next = a + b
      setResult(next)

      setA(b)
      setB(next)
    }

    const resetfibo = () => {
      setA(0)
      setB(1)
      setResult(0)
    }

    const changeshape = () =>{
      setShape(
        prev => {
          if(prev === "circle")return "square" 
          if(prev === "square")return "rectangle" 
          if(prev === "rectangle")return "triangle"
          return "circle"

        }
      )
    }
  return (
    <>
    <div>
        <div className="maincircle">
            <div className="circle" style={{backgroundColor:color}}>
            </div>
            <button className="button" onClick={changecolor} >
                {color === "black" ? "ON" : "OFF"}
            </button>
        </div>
    </div>
      <div className="maintext">
           <div className="text">
            <h2>{text}</h2>
           </div>
           <button className="button" onClick={changetext}>
            Change Text            
           </button>
        </div>

        <div className="mainbox">
            { box === "show" && (<div className="squarebox">
            
            </div>)}
           
            <button className="button" onClick={togglebox} >
                {box === "hide" ? "Show":"Hide"}
            </button>
        </div>

        <div className="mainbox">
           <div>
              <h2 style={{textAlign:"center"}}>{number}</h2>
              <button className="button" onClick={increasecount}>Binary</button>
           </div>
        </div>

        <div className="mainbox">
           <div>
             <img src={img === "img1" ? "./thor.jpg":"./hulk.jpg"} alt="toggle" width={200} height={200} style={{borderRadius:"25px"}}  /> <br />
             <button className="button" onClick={toggleimage}>
                {img === "img1" ? "show Hulk":"show Thor"}
             </button>
           </div>
        </div>

        <div className="mainbox">
          <div>
            <h1>Fibonacci Number</h1>
          </div>
          <div>
            <h2>Fibonacci Number: {result}</h2>
            <button className="button" onClick={nextfibonumber} style={{margin:"20px"}}>Next</button>
            <button className="button" onClick={resetfibo}>Reset</button>
          </div>
        </div>

        <div className="mainbox"> 
          {shape === "circle" && <div className="circle">

          </div>}
          {shape === "square" && <div className="square">

          </div>}
          {shape === "rectangle" &&<div className="rectangle">

          </div>}
          {shape === "triangle" &&<div className="triangle">

          </div>}
          <button className="button" onClick={changeshape}>Change Shape</button>
        </div>
    
    </>
  )
}

export default Task