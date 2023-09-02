import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetaild from "./ItemDetaild/ItemDetaild"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../config/firebase"



const ItemDetaildContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'Products', itemId)

        getDoc(docRef)
        .then((response) =>{
            const data = response.data()
            const productsAdapted = {id: response.id, ...data}
            setProduct(productsAdapted)
           
            
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(() =>{
            setLoading(false)
        })
       

      
    }, [itemId])
    return(
        <div>
            <ItemDetaild {...product}/>
        </div>
    )
}

export default ItemDetaildContainer
