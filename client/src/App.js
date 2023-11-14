import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TrustRoute from "./components/Routes/TrustRoute";
import TrustDashboard from "./pages/Trust/TrustDashboard";
import TrustProfile from "./pages/Trust/TrustProfile";
import List from "./pages/Trust/List";
import CreateCategory from "./pages/Admin/CreateCategory";
import Users from "./pages/Admin/Users";
import CreateList from "./pages/user/CreateList";
import Trusts from "./pages/Admin/Trusts";
import UserList from "./pages/user/UserList";
import Profile from "./pages/user/Profile";
import Products from "./pages/user/Products";
import UpdateProduct from "./pages/user/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />

        {/* user panel routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/create-list" element={<CreateList />} />
          <Route path="user/product/:slug" element={<UpdateProduct />} />
          <Route path="user/user-list" element={<UserList />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/products" element={<Products />} />
        
        </Route>
        {/* admin panel routes  */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/Trusts" element={<Trusts />} />
        </Route>

        {/* Trusts panel routes */}
        <Route path="/dashboard" element={<TrustRoute />}>
          <Route path="trust" element={<TrustDashboard />} />
          <Route path="trust/trust-profile" element={<TrustProfile />} />
          <Route path="trust/list" element={<List />} />
        </Route>


        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
