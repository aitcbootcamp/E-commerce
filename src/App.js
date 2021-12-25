import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider/Slider";
import HomePageProductList from "./Components/Products/HomePageProductList";
import InnerPage from "./Components/Products/InnerPage";
import SideBarProduct from "./Components/sideBar/sideBarProduct"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="AppSliderAndSideBar">

          <SideBarProduct />

          <Slider />
        </div>
        <HomePageProductList />
        <HomePageProductList />

        {/* <InnerPage /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
