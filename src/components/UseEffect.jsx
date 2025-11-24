import { useEffect, useState } from "react"

const UseEffect = () => {
    const [data,setData] = useState([])
     console.log("outter function is running!")
    const fetchdata = async() =>{
        try{
            const res = await fetch("https://dummy-json.mock.beeceptor.com/companies")
            const result = await res.json()
            console.log(result)
            setData(result)
        }
        catch(error){
           console.log(error)
        }
    }

    useEffect(()=>{
        fetchdata()
        console.log("useeffect is running")
    },[])
    

  return (
    <>
     <div>
        <h1>
            {JSON.stringify(data)}
        </h1>
        <button className="button" onClick={fetchdata}>Click</button>
     </div>
    </>
   
  )}


export default UseEffect