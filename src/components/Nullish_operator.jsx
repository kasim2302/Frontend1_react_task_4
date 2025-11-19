

const Nullish_operator = () => {
    const avengers = null
    const heading = "Boolean Rendering using Nullish coalescing"
  return (
    <>
    <div className="image"><h1>{heading}</h1></div>
     {avengers ?? 
       <div className="image">
        <img src="./avengers.jpg" alt="avenger" />
       </div> 
     }
    
    </>
  )
}

export default Nullish_operator