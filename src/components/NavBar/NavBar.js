import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
       
        <nav className="navbar hero is-danger has-text-centered hero-body">
        <div className="navbar-menu">
                <div className="navbar-brand">
                <Link to='/' className="title navbar-item">YANAGIYA</Link>
                </div>
            <div className="navbar-start ml-1 ">
                <NavLink to={`/category/top`} className="navbar-item">top</NavLink>
                <NavLink to={`/category/Hamburguesa`}className="navbar-item">Hamburguesa</NavLink>
                <NavLink to={`/category/RibEye`} className="navbar-item">RibEye</NavLink>
            </div>
                    <div ><CartWidget/></div>
                    </div>
            </nav>
            
            
       
    )
}
export default NavBar