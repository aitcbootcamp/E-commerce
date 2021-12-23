import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// ჩემთვის მერე უნდა წაიშალოს
import InnerPage from "./Components/InnerPage";



function App() {
  return (
    <>
      <div className="App">
        <Header />
        <InnerPage />
        <Footer />
      </div>
     
    </>
  );
}

export default App;
