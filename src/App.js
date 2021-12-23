import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import InnerPage from "./Components/InnerPage";
import Checkout from "./Components/Cart/Checkout";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* <InnerPage /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
