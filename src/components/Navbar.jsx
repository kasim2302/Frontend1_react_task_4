import { Link } from "react-router-dom";

const Navbar = () => {
    const name = "AVENGERS"
    const links_name = {home:"Home",cast:"Cast",render:"Render",practice:"Practice"}
  return (
    <>
    <div className="navbar">
        <div className='logo'>
            <img src="./logo1.png" alt="logo" />
        </div>
        <div className="childnav">
            <h1>{name}</h1>
        </div>
        <div className="links">

            <Link className="linkslist" to="/">{links_name.home}</Link>
            <Link className="linkslist" to="/cast">{links_name.cast}</Link>
            <Link className="linkslist" to="/render">{links_name.render}</Link>
            <Link className="linkslist" to="/practice">{links_name.practice}</Link>

         </div>
    </div>
    
    </>
)
}

export default Navbar