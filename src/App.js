import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Homepage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Category from "./CategoryPage"
function App() {
  return (
    <>


      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
<<<<<<< HEAD
=======
          <Route path="/products/:category" element={<Category />} />
          {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
          {/* <Route path="/products" element={}> </Route> */}
>>>>>>> 3a0534139955051c71f45d0a852083116e318310
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
