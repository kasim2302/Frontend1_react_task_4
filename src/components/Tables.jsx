

const Tables = () => {
    const numbers = 2
    const tables = "Tables using number rendering"
  return (
    <>
     <div className="table"> 
        <h2>{tables}</h2>
        <ul >
            <li>{numbers} x 1 = {1 * numbers}</li>
            <li>{numbers} x 2 = {2 * numbers}</li>
            <li>{numbers} x 3 = {3 * numbers}</li>
            <li>{numbers} x 4 = {4 * numbers}</li>
            <li>{numbers} x 5 = {5 * numbers}</li>
            <li>{numbers} x 6 = {6 * numbers}</li>
            <li>{numbers} x 7 = {7 * numbers}</li>
            <li>{numbers} x 8 = {8 * numbers}</li>
            <li>{numbers} x 9 = {9 * numbers}</li>
            <li>{numbers} x 10 = {10 * numbers}</li>
        </ul>
     </div>
    
    </>
  )
}

export default Tables