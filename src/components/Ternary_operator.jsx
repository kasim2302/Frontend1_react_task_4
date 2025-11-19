

const Ternary_operator = () => {
   const Img_count = 1 
   const msg = " Image not found"
   const heading = "Boolean Rendering using Ternary Operator"
   const warning = `Wait ! The Image ${Img_count} is still loading`
   const showImg = true
   const showImgs = true
  return (
    <>
    <div className="image"><h1>{heading}</h1></div>
       {showImg ? <div className="image">
        <img src="./avengers.jpg" alt="avengers" />
        <img src="./banner.jpg" alt="banner" />
       </div>
       
       
       : <div className="image"><h2>{msg}</h2></div> }

       {showImgs && 
         <div className="image"> 
            <h1>{warning}</h1>
        </div>}
    </>
  )
}

export default Ternary_operator