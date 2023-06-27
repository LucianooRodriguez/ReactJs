const productos = [
    { titulo: "Remera Unisex", precio: 12000, id: "1", tipo:"Unisex", img: "../img/Remera1.jpg", idCat: "1" },
    { titulo: "Remera Mujer", precio: 10000, id: "2", tipo:"Mujer", img: "../img/Remera2.jpg", idCat: "1" },
    { titulo: "Remera Hombre", precio: 10000, id: "3", tipo:"Hombre", img: "../img/Remera3.jpg", idCat: "1" },
    { titulo: "Buzo Hombre", precio: 15000, id: "4", tipo:"Hombre", img: "../img/Buzo1.jpg", idCat: "2" },
    { titulo: "Buzo Unisex", precio: 18000, id: "5", tipo:"Unisex", img: "../img/Buzo2.jpg", idCat: "2" },
    { titulo: "Buzo Mujer", precio: 15000, id: "6", tipo:"Mujer", img: "../img/Buzo3.jpg", idCat: "2" },
    { titulo: "Calzado Hombre", precio: 32000, id: "7", tipo:"Hombre", img: "../img/Calzado1.jpg", idCat: "3" },
    { titulo: "Calzado Mujer", precio: 32000, id: "8", tipo:"Mujer", img: "../img/Calzado2.jpg", idCat: "3" },
    { titulo: "Calzado Unisex", precio: 36000, id: "9", tipo:"Unisex", img: "../img/Calzado3.jpg", idCat: "3" },
    { titulo: "Mochila 2023", precio: 25000, id: "10", tipo:"Mochilas y bolsos", img: "../img/Accesorio1.jpg", idCat: "4" },
    { titulo: "Balon Oficial FWC", precio: 30000, id: "11", tipo:"Balones oficiales", img: "../img/Accesorio2.jpg", idCat: "4" },
    { titulo: "Gorra Unisex", precio: 8000, id: "12", tipo:"Unisex", img: "../img/Accesorio3.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}