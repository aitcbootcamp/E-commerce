import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider/Slider";
import HomePageProductList from "./Components/Products/HomePageProductList";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Slider />
        <HomePageProductList />
        <Footer />
      </div>
    </>
  );
}

export default App;
