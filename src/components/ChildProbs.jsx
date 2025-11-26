import React from 'react'

const ChildProbs = ({name,age,powers,biodatas,collegues}) => {
  return (
    <>
       <div className='w-full h-140 flex flex-col justify-center items-center gap-4' >
        
            <div className='bg-orange-400 w-130 h-40'>
            <p className='text-2xl font-bold'>Movie Character:</p>
            <p className='text-xl'>Name: {name}</p>
            <p className='text-xl'>Age: {age}</p>
            <p className='text-xl'>Powers: {powers}</p>
            
            </div>
            
           
            <div className='w-130 h-40'>
              <p className='text-2xl font-bold'>Colleagues Details:</p>
             <p className='text-xl'>Name: {collegues[0].name}</p>
             <p className='text-xl'>Age: {collegues[0].Age}</p>

              <p className='text-xl'>Name: {collegues[1].name}</p>
             <p className='text-xl'>Age: {collegues[1].Age}</p>
            </div>
             <div className='bg-green-800 w-130 h-40'>
            <p className='text-2xl font-bold '>Bio deatils:</p>
            <p className='text-xl'>Name: {biodatas.name}</p>
            <p className='text-xl'>Age: {biodatas.name}</p>
            <p className='text-xl'>Country: {biodatas.Country}</p>
             </div>
            



            



          </div>
   
    </>
  )
}

export default ChildProbs