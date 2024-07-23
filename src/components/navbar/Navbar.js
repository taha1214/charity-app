import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    return(
        <div className="navbar" >
            <h1>Charity<span className="dot">.</span></h1>
            <ul>
              <Link to="/"><li>Home</li></Link>
               <Link to="about"> <li>About</li></Link>
               <Link to="latestCause"> <li>Latest Cause</li></Link>
               <Link to="socialEvents"> <li>Social Events</li></Link>
                <li>BLogs</li>
                <li>Contact</li>
            </ul>
            <button className="don">Donate</button>
        </div>
    )
}
export default Navbar;