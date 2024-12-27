import { Link } from "react-router-dom";

export default function Nav(){
return(
    <nav className="Navbar">
 <ul>
    <li className="span-li">
        <Link to='/' className="span-links1"    >Home</Link>
    </li>
    <li className="span-li" >
        <Link  to='/GroupedTeamMembers'   className="span-links2" >Team</Link>
    </li>
 </ul>
    </nav>
)

}