import { addDoc, collection, getDocs, query, where, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../Context/cartContext"
import { db } from "../../config/firebase"
import { Timestamp } from "firebase/firestore"

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart, 
                totalPrice: totalPrice,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db); 

            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection (db,'productos');
            const productosAddedFromFirestore = await getDocs (query(productsRef, where('id', 'in', ids)));
            const { docs } = productosAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock; 
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection (db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay Productos que están fuera de Stock');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El Id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1 className='title is-2'>CheckOut</h1>
            
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;

