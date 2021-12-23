import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider/Slider";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Cart />
        {/* <Slider /> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
