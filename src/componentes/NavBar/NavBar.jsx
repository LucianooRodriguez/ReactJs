import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const imagenVixion= "../img/IconoVixion.jpeg";
    return (
        <header>
           
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid"> 
                    <Link to={"/"}> <img className="imagenVixion" src={imagenVixion} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-evenly " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/categoria/1"} className="Link"> Remeras </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/categoria/2"} className="Link"> Buzos </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/categoria/3"} className="Link"> Calzados </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/categoria/4"} className="Link"> Accesorios </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>


        </header>
    )
}

export default NavBar