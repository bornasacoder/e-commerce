import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
function App() {

  const user = useSelector((state) => state.user.currentUser);
  

  return (
    <Router>
    <div className="App">
    <Routes>
     <Route exact path ='/' element={<Home/>} />
     <Route exact path ='/products/:category' element={<ProductList/>} />
     <Route exact path ='/product/:id' element={<Product/>} />
     <Route exact path ='/cart' element={<Cart/>} />
     <Route exact path ='/success' element={<Success/>} />

     <Route exact path ='/login'  element={user ? <Navigate to="/" /> : <Login/>} />
     <Route exact path ='/register' element={user ? <Navigate to="/" /> : <Register/>} />

     </Routes>
    </div>
    </Router>
  );
}

export default App;
