import { BrowserRouter } from "react-router-dom";

import RoutesComponent from "./routes/Routes";
import WrapperComponent from "./components/WrapperComponent";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer"

function App() {
  return (
      <BrowserRouter>
        <HeaderComponent />
          <main>
            <WrapperComponent>
              <RoutesComponent />
            </WrapperComponent>
          </main>
        <FooterComponent />
      </BrowserRouter>
  );
}

export default App;
