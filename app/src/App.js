import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil/Accueil";
import Classique from "./pages/Classique/Classique";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Accueil />} />
          <Route path="classique" element={<Classique />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
