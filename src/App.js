import { HEADER } from "./layout/header";
import { Home } from "./pages/home";
import { WINNER_SCREEN } from "./pages/WinnerScreen";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Roles } from "./pages/Rules";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <section className="app-wrapper">

          <HEADER />
          <Routes>
            <Route path="/rock-paper-scissors/" element={<Roles />} />
            <Route path="/WINNER" element={<WINNER_SCREEN />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
          <Link to={"/rock-paper-scissors/"} className="roles-btn">RULES</Link>
        </section>
      </BrowserRouter>
    </section>
  );
}

export default App;
