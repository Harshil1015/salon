import "./App.css";
import Aboutus from "./about us";
import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./services";
import Gallery from "./gallary";
import Book from "./Book";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallary" element={<Gallery />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
