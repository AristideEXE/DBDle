import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil/Accueil";
import Classique from "./pages/Classique/Classique";
import Layout from "./pages/Layout/Layout";
import { classiquePath, indexPath } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={indexPath} element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path={classiquePath} element={<Classique />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
