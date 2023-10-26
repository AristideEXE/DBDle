import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts/fonts.css";
import Accueil from "./pages/Accueil/Accueil";
import Survivant from "./pages/Survivant/Survivant";
import Layout from "./pages/Layout/Layout";
import { survivantPath, indexPath, tueurPath } from "./routes";
import Tueur from "./pages/Tueur/Tueur";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={indexPath} element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path={survivantPath} element={<Survivant />} />
          <Route path={tueurPath} element={<Tueur />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
