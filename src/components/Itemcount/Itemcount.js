import { useState } from "react";

const Itemcount = ({stock, initial, onAdd})=>{
    const [Quatity, setQuatity] = useState(initial)
    const increment =()=>{
if(Quatity < stock){
    setQuatity(Quatity+1)
}
    }
    const decrement =()=>{
        if (Quatity > 1){
            setQuatity(Quatity - 1)
        }
    }
    return(
        <div className="buttons is-centered">
        <button className="button" onClick={decrement}>-</button>
        <h4>{Quatity}</h4>
        <button className="button" onClick={increment}>+</button>
        <button className="button" onClick={()=> onAdd(Quatity)} disabled={!stock}>agregar carrito</button>
      </div>

    )
}

export default Itemcount