import React, { useEffect, useState } from "react";
import Itemlist from "./Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";


const ItemListContainer = ({ greeting }) =>{
    const [products,setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const {categoryId} =useParams()

    useEffect(()=>{
        setLoading(true)
        const collectionRef = categoryId
        ? query(collection(db,'Products'), where('category', '==', categoryId))
        :collection(db,'Products')

        getDocs(collectionRef)
        .then(response =>{
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return{id: doc.id, ...data}
                
            })
            setProducts(productsAdapted)
            
        })
            .catch(error => {
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [categoryId])
        
       
    return (
        <div className="title">
            <h1>{greeting}</h1>
            <Itemlist products={products}/>
        </div>
    )
}

export default ItemListContainer