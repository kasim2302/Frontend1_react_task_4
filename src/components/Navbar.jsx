

const Navbar = () => {
    const name = "AVENGERS"
  return (
    <>
    <div className="navbar">
        <div className='logo'>
            <img src="./logo1.png" alt="logo" />
        </div>
        <div className="childnav">
            <h1>{name}</h1>
        </div>
    </div>
    
    </>
)
}

export default Navbar