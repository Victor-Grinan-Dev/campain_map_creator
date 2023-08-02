//styles:
import "./styles/appMain.css";
import "./styles/button.css";
import "./styles/token.css";
import "./styles/drawMap.css";
import "./styles/tile.css";

//components:
import Layout from "./pages/Layout";
import DrawMap from "./components/drawMap/DrawMap";

//react:
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<DrawMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
