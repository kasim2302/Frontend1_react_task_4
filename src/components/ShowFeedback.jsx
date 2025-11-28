import React, { useEffect, useState } from 'react'

const ShowFeedback = () => {

    const [card, setCard] = useState([])

    const displaydata = () => {
        const Datas = JSON.parse(localStorage.getItem("institutedata")) || [];
        setCard(Datas)
    }

    const deletedata = (index) => {
        const storedData = JSON.parse(localStorage.getItem("institutedata")) || [];
        storedData.splice(index, 1);
        localStorage.setItem("institutedata", JSON.stringify(storedData));
        setCard([...storedData]);
    };

    useEffect(() => {
        displaydata();
    }, [])

    return (
        <>
            <div >
              <div>
                <h1 className='text-3xl text-bold text-center pt-10'>Student Feedbacks</h1>
              </div>
              <div className='flex flex-wrap m-20 gap-20'>
                {card.map((e, i) => (
                    <div key={i} className="max-w-sm bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                        <h2 className="text-xl font-bold">{e.Institutename}</h2>

                        <div className="mt-3 space-y-1 text-gray-700">
                            <p><strong>Name:</strong> {e.name}</p>
                            <p><strong>Email:</strong> {e.email}</p>
                            <p><strong>Mobile:</strong> {e.mobile}</p>
                            <p><strong>Syllabus Updated:</strong> {e.syllabus}</p>
                            <p><strong>Practical Learning:</strong> {e.learning}</p>
                            <p><strong>Infrastructure:</strong> {e.infrastructure}</p>
                        </div>

                        <button 
                            className="mt-5 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                            onClick={() => deletedata(i)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default ShowFeedback;
