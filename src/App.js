import Product from "./components/Product";
import AddToCart from "./components/AddToCart";
import {Route,Routes} from 'react-router-dom';

const App =()=>{
  return (
    <>
    <Routes>
    <Route path='/' element={<Product/>}></Route>
    <Route path='/wishlist' element={<AddToCart />}></Route>
    </Routes>
    </>
  );
}

export default App;
