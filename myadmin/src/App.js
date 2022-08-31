import { Sidebar } from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import { Home } from "./pages/home/Home";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { ProductList } from "./pages/productList/ProductList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
function App() {
  // const admin =""
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

  return (
      <Router>
     <Topbar/>
     <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
      { admin && (
        <>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<UserList/>}/>
        <Route exact path="/users/:userId" element={<User/>}/>
        <Route exact path="/newuser" element={<NewUser/>}/>
        <Route exact path="/products" element={<ProductList/>}/>
        <Route exact path="/product/:productId" element={<Product/>}/>
        <Route exact path="/newproduct" element={<NewProduct/>}/>
      </>
)}
        </Routes>
     </div>
      </Router>
  );
}

export default App;
