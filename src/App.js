import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider/Slider";
import HomePageProductList from "./Components/Products/HomePageProductList";
import InnerPage from "./Components/Products/InnerPage";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Slider />
        <HomePageProductList />
        <HomePageProductList />

        {/* <InnerPage /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
