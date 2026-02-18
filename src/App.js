import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";  
import SubscribeSection from "./components/layout/SubscribeSection";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />

      </Routes>
      <SubscribeSection />

      <Footer /> 
    </BrowserRouter>
  );
}
