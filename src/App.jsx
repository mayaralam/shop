import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop.jsx";
import HomePage from "./pages/home.jsx";
import Registration from "./pages/registration.jsx";
import LoginPage from "./pages/login.jsx";
import CartPage from "./pages/cart.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";
import { Toaster } from "react-hot-toast";
export default function App() {
  const token = localStorage.getItem("userToken") || null;
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/registration" element={<Registration />}></Route>
          {/* <Route
            path="/login"
            element={token ? <Navigate to={""} /> : <LoginPage />}
          ></Route> */}
          <Route path="/" element={<Navigate to="/login" />} />
          {/* <Route path="/home" element= {<HomePage />}></Route> */}
          <Route
            path="/home"
            element={token ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
