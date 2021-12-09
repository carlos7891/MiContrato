import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Preguntas from "./pages/Preguntas";
import Layout from "./layouts/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
