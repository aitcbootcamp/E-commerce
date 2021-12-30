import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Homepage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Category from "./CategoryPage";
import InnerPage from "./Components/Products/InnerPage";
import { CartProvider } from "./store/cartContext";
function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          {/* <InnerPage /> */}
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/products/:category" element={<Category />} />
            {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
            {/* <Route path="/products" element={}> </Route> */}
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
