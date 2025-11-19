


const Cards = () => {
    const Avenger = [{name:"Thor",img:"./thor.jpg", place:"Asgardian", power:"Thunder"},
                     {name:"Hulk",img:"./hulk.jpg", place:"Earth", power:"SuperHuman"},
                     {name:"Iron man",img:"./ironman.jpg", place:"Earth", power:"Technology"},
                     {name:"Captain America",img:"./captain.jpg", place:"Earth", power:"SuperHuman"},

    ]
  return (
    <>
       <div className="maincard">
          
          {Avenger.map((e,i)=>(
            <div className="childcard" key={i}>
            <div className="cardimg">
               <img src={e.img} alt="cardimg" />
            </div>
            <div className="cardinfo">
                  <h3>Name: {e.name}</h3>
                  <h3>Place: {e.place}</h3>
                   <h3>Power: {e.power}</h3>
            </div>

            </div>
          ))}
         
       </div>
    </>
  )
}

export default Cards