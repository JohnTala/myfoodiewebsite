import { BrowserRouter,Route,Routes } from "react-router-dom";

import Contents from "./components/Contents";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import FootCopy from "./components/FootCopy";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
          <NavBar />
          <hr></hr>
        </header>
        <Routes>
          <Route path="/" element={<Contents />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <FootCopy />
        </BrowserRouter>
    </div>
  );
}

export default App;

