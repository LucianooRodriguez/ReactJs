import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, titulo, precio,tipo, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id, titulo, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
           <div > 
                <h2 className=' estiloTexto'> {titulo} </h2>
                <h3 className='estiloTexto'>Precio: ${precio} </h3>
                <h3 className='estiloTexto'>ID: {id} </h3>
                <h4 className='estiloTexto'>{tipo}</h4>
                <img className="imagenes" src={img} alt={titulo} />
            </div>

            {
                agregarCantidad > 0 ? (<Link to="/cart" className='botonFinComprar'> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
        </div>
    )
}

export default ItemDetail