import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(resp => setProductos(resp))
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2> Stock de productos de Vixion </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer