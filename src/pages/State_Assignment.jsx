import { use, useState } from "react"


const State_Assignment = () => {
    // String Rendering
    const [name,setName] = useState("greeting")
    const [program,setProgram] = useState("Click here! for programming")
    const [goal,setGoal] = useState("set your goal")
    const [Message,setMessage] = useState("Hi")
    const [content,setContent] = useState("content here")
    const [location,setLocation] = useState("Choose Location")
 
    // Number Rendering 

    const [number,setNumber] = useState(0)
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(0)
    const [id,setId] = useState(0)
 
    // Null Rendering 

    const [nulls,setNull] = useState(null)

    // Boolean Rendering 

    const [on,setOn] = useState(true)
    const [off,setOff] = useState(false)





    // function for string
    const changename = () =>{
        setName("Welcome to React")
    }
    const changeprogram = () =>{
        setProgram("Javascript")
    }
    const changegoal = () =>{
        setGoal("Devleoper")
    }
    const changemessage = () =>{
        setMessage("How are you?")
    }
    const changecontent = () =>{
        setContent("write your content here!")
    }
    const changelocation = () =>{
        setLocation("choose your location here!")
    }
    
    // function for number
    const IncrementNum = () =>{
        setNumber(number + 1)
    }
    const IncrementCount = () =>{
        setCount(count + 1)
    }
     const Incrementage = () =>{
        setAge(age + 1)
    }
     const Incrementid = () =>{
        setId(id + 1)
    }

    // function for null
    
    const shownull = () =>{
        setNull("This is Null value!")
    }

    // function for boolean

    const changeboolean = () =>{
        setOn("Light on succesfully!")
    }
    const changebooleans = () =>{
        setOff("Light Off succesfully!")
    }


  return (
   <>
   <div className="mainstate"> 
    <div>
        <h1>UseState for String Rendering</h1>
    </div>
   <div>
       <h2>{name}</h2>
        
       <button className="button" onClick={changename}>Change</button>
   </div>
   <div>
       <h2>{program}</h2>
        
       <button className="button" onClick={changeprogram}>Change</button>
   </div>
    <div>
       <h2>{goal}</h2>
        
       <button className="button" onClick={changegoal}>Change</button>
   </div>
    <div>
       <h2>{Message}</h2>
        
       <button className="button" onClick={changemessage}>Change</button>
   </div>
    <div>
       <h2>{content}</h2>
        
       <button className="button" onClick={changecontent}>Change</button>
   </div>
    <div>
       <h2>{location}</h2>
        
       <button className="button" onClick={changelocation}>Change</button>
   </div>
   </div>

   <div className="mainstate">
    <div>
        <h1>UseState for String Rendering</h1>
    </div>

    <div>
       <h2 style={{textAlign:'center',padding:'10px'}}>{number}</h2>
       <button className="button" onClick={IncrementNum}>Click to Increment</button>
    </div>

    <div>
       <h2 style={{textAlign:'center',padding:'10px'}}>{count}</h2>
       <button className="button" onClick={IncrementCount}>Click to Count</button>
    </div>

    <div>
       <h2 style={{textAlign:'center',padding:'10px'}}>{age}</h2>
       <button className="button" onClick={Incrementage}>Click to Increase</button>
    </div>
    <div>
       <h2 style={{textAlign:'center',padding:'10px'}}>{id}</h2>
       <button className="button" onClick={Incrementid}>Click to add</button>
    </div>


    </div>

    <div className="mainstate">
    <div>
        <h1>UseState for null value</h1>
    </div>

    <div>
        <h2 style={{textAlign:'center',padding:'10px'}}>{nulls}</h2>
        <button className="button" onClick={shownull}>click here</button>
    </div>
    </div>

    <div className="mainstate">
    <div>
        <h1>UseState for Boolean value</h1>
    </div>

    <div>
        <h2 style={{textAlign:'center',padding:'10px'}}>{on}</h2>
        <button className="button" onClick={changeboolean}>click to On</button>
    </div>

     <div>
        <h2 style={{textAlign:'center',padding:'10px'}}>{off}</h2>
        <button className="button" onClick={changebooleans}>click to Off</button>
    </div>
    </div>
    <StateArray/>
    <StateObject/>
    <State_Array_Of_Object/>
   </>
  )
}

export default State_Assignment

export const StateArray = () => {
      
    const [fruits,setFruits] = useState(['Apple','Orange','Kiwi'])
    const [veg,setVeg] = useState(['Onion','Tomato','Carrot'])
    const [language,setLanguage] = useState(['C','C++','C#'])
    const [sports,setSports] = useState(['badminton','Volleyball','Kho Kho'])





    const changefruits = () => {
        setFruits(['Banana','Watermelon',"Guava"])
    }

    const changeveg = () => {
        setVeg(['Potato','Drumstick',"Beens"])
    }

     const changelanguage = () => {
        setLanguage(['Python','Java',"JavaScript"])
    }
    const changesports = () => {
        setSports(['Cricket','Football',"Kabadi"])
    }
    return(
    <>
      <div className="mainstate">
        <div>
            <h1>Usestate for array rendering</h1>
        </div>
        <div>
            <h2>Fruits:</h2>
        <h2>{fruits[0]}</h2>
        <h2>{fruits[1]}</h2>
        <h2>{fruits[2]}</h2>
        <button className="button" onClick={changefruits}>Change Fruits</button>
        </div>
       
        <div>
            <h2>Vegetables:</h2>
        <h2>{veg[0]}</h2>
        <h2>{veg[1]}</h2>
        <h2>{veg[2]}</h2>
        <button className="button" onClick={changeveg}>Change Vegetables</button>
        </div>

        <div>
            <h2>Programming Languages:</h2>
        <h2>{language[0]}</h2>
        <h2>{language[1]}</h2>
        <h2>{language[2]}</h2>
        <button className="button" onClick={changelanguage}>Change Language</button>
        </div>
        <div>
            <h2>Sports:</h2>
        <h2>{sports[0]}</h2>
        <h2>{sports[1]}</h2>
        <h2>{sports[2]}</h2>
        <button className="button" onClick={changesports}>Change Sports</button>
        </div>
      </div>
    </>
      )
}

export const StateObject = () => {

    const [img , setImg] = useState({img:false})
    const [img1 , setImg1] = useState({img1:true})
    const [img2 , setImg2] = useState({img2:true})


    const showimg = () => {
        setImg({img:'./hulk.jpg'})
       
    }

    const showimg1 = () =>{
        setImg1({img1:'./thor.jpg'})
    }

     const showimg2 = () =>{
        setImg2({img2:'./captain.jpg'})
    }
   return(
    <>
     <div className="mainstate">
        <div>
            <h1>Usestate for object rendering</h1>
        </div>
        <div>
            <img src={img.img} alt="img" width={200}/> <br />
            <button className="button" onClick={showimg}>Show Image</button>
        </div>

        <div>
            <img src={img1.img1} alt="img" width={200}/> <br />
            <button className="button" onClick={showimg1}>Show Image</button>
        </div>

         <div>
            <img src={img2.img2} alt="img" width={200}/> <br />
            <button className="button" onClick={showimg2}>Show Image</button>
        </div>

     </div>
    </>
   )
}

export const State_Array_Of_Object = ()=>{

const [card , setCard] = useState([{movie_name:"",Year:" ",movie_img:'./avengers1.jpg'},
                            {movie_name:"",Year:"",movie_img:'./avengers2.jpg'},
                            {movie_name:"",Year:"",movie_img:'./avengers3.jpg'},
                            {movie_name:"",Year:"",movie_img:'./avengers4.jpg'}])

const changecard = () => {
    setCard([{movie_name:"The Avengers",Year:2012,movie_img:'./avengers1.jpg'},
         {movie_name:"Avengers Age Of Ultron",Year:2015,movie_img:'./avengers2.jpg'}, 
         {movie_name:"Avengers Infinity War",Year:2018,movie_img:'./avengers3.jpg'},
          {movie_name:"Avengers End Game",Year:2019,movie_img:'./avengers4.jpg'}])
}
    return(
        <>
        <div><h1 style={{textAlign:"center",marginTop:"20px"}}>useState for Array of Objects</h1></div>
         <div className="objmain">
           

            {card.map((e,i)=>(
               <div className="objcard" key={i}>
                <div className="objimg">
                   <img src={e.movie_img} alt="objImage" width={150} height={100}/>
                </div>
                <div className="objcontent">
                   <h3>Movie Name: {e.movie_name}</h3>
                   <h3>Year: {e.Year}</h3>
                </div>
                <div>
                    <button className="buttons" onClick={changecard}>Get Movie Info</button>

                </div>
            </div>


            ))}
               
         </div>
        </>
    )
}