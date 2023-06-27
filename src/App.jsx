import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/Routes";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
function App() {
  return (
      <BrowserRouter>
          <main>
              <RoutesComponent />
          </main>
      </BrowserRouter>
  );
}

export default App;
