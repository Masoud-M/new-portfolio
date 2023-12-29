import { DarkModeProvider } from "./context/DarkModeContext";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <DarkModeProvider>
        <Home />
        <Projects />
        <Contacts />
      </DarkModeProvider>
    </div>
  );
}

export default App;
