import React, { useState } from 'react'

const InstituteForm = () => {

  const [data,setData] = useState({Institutename:"",name:"",email:"",mobile:"",syllabus:"",learning:"",infrastructure:""})
  const [error,setError] = useState("")
  
  const collectdata = (e) => {
      setData({...data,[e.target.name] : e.target.value})
  }

  const submitdata = (e) =>{
    e.preventDefault()
    
    if (!/^[A-Za-z]{3,}$/.test(data.Institutename)) {
      return setError("Institutename must be at least 3 letters and contain no numbers.")
    }
    if (!/^[A-Za-z]{3,}$/.test(data.name)) {
      return setError("Name must be at least 3 letters and contain no numbers.")
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      return setError("Enter a valid email address.")
    }

    if (!/^[0-9]{10}$/.test(data.mobile)) {
      return setError("Phone number must be exactly 10 digits.");
    }


    const Old_data = JSON.parse(localStorage.getItem("institutedata")) || [];

    Old_data.push(data)

    localStorage.setItem("institutedata", JSON.stringify(Old_data));


    setError("")
    alert("Feedback Submitted Successfully")

    setData({Institutename:"",name:"",email:"",mobile:"",syllabus:"",learning:"",infrastructure:""})
   }

  return (
    <>
      <div className=' text-white p-10 h-auto flex justify-center items-center'>
        <div className='bg-white text-black p-20 rounded'>
            <form className=" p-2 rounded shadow-lg">
              <div>
                <h2 className='text-2xl text-bold text-center p-10'>Institute Feedback Form</h2>
              </div>
            <div>
            <label className='pl-6'>Institute Name:</label><br />
            <input type="text" name="Institutename" value={data.Institutename} onChange={collectdata}  placeholder='Enter The Institute name'  className='shadow-sm mx-6 w-100 text-black p-1 rounded '   />
            </div>

             <div className='mt-5'>
            <label className='pl-6'> Name:</label><br />
            <input type="text" name="name"  value={data.name} onChange={collectdata}  placeholder='Enter your name'  className='shadow-sm mx-6 w-100 text-black p-1 rounded '   />
            </div>

             <div className='mt-5'>
            <label className='pl-6'> Email:</label><br />
            <input type="email" name="email"  value={data.email} onChange={collectdata}  placeholder='example@gmail.com'  className='shadow-sm mx-6 w-100 text-black p-1 rounded '   />
            </div>

            <div className='mt-5'>
            <label className='pl-6'> Mobile:</label><br />
            <input type="tel" name="mobile" value={data.mobile} onChange={collectdata}  placeholder='Enter your phone number'  className='shadow-sm mx-6 w-100 text-black p-1 rounded '   />
            </div>

            <div className='mt-3'>
            <label className='pl-6 '>Syllabus Updated:</label><br />
            <select onChange={collectdata}  value={data.syllabus} name='syllabus' className='ml-6 mt-2 shadow-sm text-black p-1 rounded'>
              <option value="">--Select--</option>
              <option value="yes">Yes</option>
              <option value="No">No</option>

            </select>
            </div>

            <div className='mt-3'>
            <label className='pl-6 '>Learning Practical:</label><br />
            <select onChange={collectdata}  value={data.learning} name='learning' className='ml-6 mt-2 shadow-sm text-black p-1 rounded'>
              <option value="">--Select--</option>
              <option value="yes">Yes</option>
              <option value="No">No</option>

            </select>
            </div>

            <div className='mt-3'>
            <label className='pl-6 '>Institute Infrastructure:</label><br />
            <select onChange={collectdata}  value={data.infrastructure} name='infrastructure' className='ml-6 mt-2 shadow-sm text-black p-1 rounded'>
              <option value="">--Select--</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="poor">Poor</option>

            </select>

            </div>
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <button type='submit' onClick={submitdata} className='w-100 bg-green-800 p-1 ml-6 mt-5 mb-5 text-white cursor-pointer'>Submit</button>
            
           
            </form>
       
        </div>
      
      </div>
    </>
  )
}

export default InstituteForm