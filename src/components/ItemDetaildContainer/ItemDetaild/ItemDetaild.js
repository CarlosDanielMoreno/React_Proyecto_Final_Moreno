import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Itemcount from "../../Itemcount/Itemcount";
import { CartContext } from "../../Context/cartContext";

const ItemDetaild = ({id, name, img, description, price, stock}) =>{
    const [quantityAdded,setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

   
   
    return(
        <div className="card">
        <><article className="has-text-centered ">
            <header>
                <h2 className="title is-1">{name}</h2>
            </header>
        </article><picture>
                <img src={img} alt={name} />
            </picture><section>
                <div className="content is-large">
                <p >{description}</p>
                <p >${price}</p>
                </div>
            </section><footer>
                {
                    quantityAdded > 0 ?(
                        <><Link to='/' className="button is-danger is-inverted">Seguir Comprando </Link><Link to='/cart' className="button is-danger is-inverted">Terminar Compra</Link></>
                        
                    ) : (
                    <Itemcount initial={1} stock={stock} onAdd={(handleOnAdd)} />
                    )
                }
                
            </footer></></div>
    
    )
}

export default ItemDetaild