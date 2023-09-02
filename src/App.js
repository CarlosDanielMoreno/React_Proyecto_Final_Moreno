import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetaildContainer from './components/ItemDetaildContainer/ItemDetaildContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bulma/css/bulma.css";
import { CartProvider } from './components/Context/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (

    <div className='has-text-centered'>
        <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetaildContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          
          </Routes>
          </CartProvider>
          </BrowserRouter>

       
      
    </div>
  );
}

export default App;
