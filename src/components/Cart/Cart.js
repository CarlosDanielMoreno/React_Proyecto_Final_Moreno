
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart =() =>{
    const {cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)
    
    if(totalQuantity === 0){
        return(
            <div>
                <h1>No Hay item en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3 className="title is-3" > total: ${totalPrice}</h3>
            <button  onClick={() => clearCart()} className='button is-rounded'>Limpiar carrito</button>
            <Link to='/checkout' className="button is-rounded">checkout</Link>
        </div>
    )
}

export default Cart