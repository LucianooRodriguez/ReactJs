import './CartWidget.css'
const CartWidget = () => {
    const carro = "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cart-shopping-cart-icon-png-free-illustration-image_2284387.jpg"
  return (
    <div>
        <img className="carro" src={carro} alt="Imagen del carro" />
        <strong className='cantidad'>5</strong>
    </div>
  )
}

export default CartWidget