import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Homepage from "./HomePage";
import ErrorPage from "./ErrorPage";
function App() {
  return (
    <>
<<<<<<< HEAD

      <div className="App">
        <Header />
        <div className="AppSliderAndSideBar">
          <SideBarProduct />
          <Slider />
        </div>
        <HomePageProductList />
        <Footer />
      </div>


=======
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/products" element={}> </Route> */}
        </Routes>
        <Footer />
      </Router>
>>>>>>> 115fce3472740d8eb78fa24ebdf8a056b8dafbbd
    </>
  );
}

export default App;
