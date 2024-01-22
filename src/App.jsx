import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Erreur404 from "./pages/Erreur404";
import Results from "./pages/Results";

const App = () => {
  return (
    <BrowserRouter basename="/kasa-react/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Results/:id" element={<Results />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
