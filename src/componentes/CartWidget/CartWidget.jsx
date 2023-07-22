import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cart-shopping-cart-icon-png-free-illustration-image_2284387.jpg";

    return (
        <div>
            <Link to="/cart">
                <img className='carro' src={imgCarrito} alt="Imagen del carro" />
                {
                    cantidadTotal > 0 && <strong className='cuentaCarrito'> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget