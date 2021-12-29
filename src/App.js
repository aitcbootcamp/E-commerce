import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Homepage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Category from "./CategoryPage"
import ProductDitails from "./Components/Products/homePageProduct/ProductDetails"
import InnerPage from "./Components/Products/InnerPage";
function App() {
  return (
    <>


      <Router>
        <Header />
        {/* <InnerPage></InnerPage> */}
        {/* <Slider />
        <HomePageProductList />
        <HomePageProductList /> */}
        {/* <InnerPage /> */}
        {/* <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/products/:id" element={<ProductDetails />} />

        </Routes> */}
        <Footer />
      </Router>

    </>
  );
}

export default App;
