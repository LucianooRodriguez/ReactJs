import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, titulo, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img  src={img} alt={titulo} />
            <h3>{titulo} </h3>
            <p>Precio: ${precio} </p>
            
            <Link to={`/item/${id}`} className='Link'> Ver producto</Link>
        </div>
    )
}

export default Item