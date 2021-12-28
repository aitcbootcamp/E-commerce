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
<<<<<<< HEAD
        {/* <Slider />
        <HomePageProductList />
        <HomePageProductList /> */}
        <InnerPage />
=======
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/products/:category" element={<Category />} />
          {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
          {/* <Route path="/products" element={}> </Route> */}
        </Routes>
>>>>>>> 115fce3472740d8eb78fa24ebdf8a056b8dafbbd
        <Footer />
      </Router>

    </>
  );
}

export default App;
