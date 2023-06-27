import './ItemDetail.css'

const ItemDetail = ({ id, titulo, precio, tipo, img }) => {
    return (
        <div className='contenedorItem'>
            <h2 className=' estiloTexto'> {titulo} </h2>
            <h3 className='estiloTexto'>Precio: ${precio} </h3>
            <h3 className='estiloTexto'>ID: {id} </h3>
            <h4 className='estiloTexto'>{tipo}</h4>
            <img className="imagenes" src={img} alt={titulo} />
            
                
        </div>
    )
}

export default ItemDetail