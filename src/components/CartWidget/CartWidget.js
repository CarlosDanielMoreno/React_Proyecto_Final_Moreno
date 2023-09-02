import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../Context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const{totalQuatity} = useContext(CartContext)
    
       
    return(

        <Link to='/cart' style={{display: totalQuatity > 0 ? 'block' : 'none'}}>
             <div className='is-size-3'>
             <img src={cart} alt="cart-widget"/>

             {totalQuatity}</div>
             
        </Link>
        
    )
}
export default CartWidget