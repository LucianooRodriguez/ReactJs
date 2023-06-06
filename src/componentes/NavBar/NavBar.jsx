 
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1>VIXION</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Remeras
                        </li>
                        <li className="nav-item">
                            Buzos
                        </li>
                        <li className="nav-item">
                            Calzados
                        </li>
                        <li className="nav-item">
                            Accesorios
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