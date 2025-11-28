import { Link } from "react-router-dom";

const Navbar = () => {
    const name = "AVENGERS"
    const links_name = {home:"Home",cast:"Cast",formdatas:"formdatas",forms:"forms",states:"States"}
  return (
    <>
    <div className="navbar">
        <div className='logo'>
            <img src="./logo1.png" alt="logo" />
        </div>
        <div className="childnav text-2xl font-bold">
            <h1>{name}</h1>
        </div>
        <div className="links">

            <Link className="linkslist text-base" to="/">{links_name.home}</Link>
            <Link className="linkslist text-base" to="/cast">{links_name.cast}</Link>
            <Link className="linkslist text-base" to="/formdatas">{links_name.formdatas}</Link>
            <Link className="linkslist text-base" to="/forms">{links_name.forms}</Link>
            <Link className="linkslist text-base" to="/states">{links_name.states}</Link>


         </div>
    </div>
    
    </>
)
}

export default Navbar