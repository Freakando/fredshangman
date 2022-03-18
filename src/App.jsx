import Verificator from "./Verificator";
import TestComponent from "./TestComponent";
import ThemeToggle from "../src/ThemeToggle";
// import CatchwordGenerator from "./CatchwordGenerator";
import TestTestProvider from "./contexts/CatchwordGenerator";

import ThemeContextProvider from "./contexts/ThemeContext";

export default function App() {
  // const [value, setValue] = useState("null");
  return (
    <ThemeContextProvider>
      <div className="App">
        <TestTestProvider>
          <Verificator />
        </TestTestProvider>
        <TestComponent></TestComponent>
        <ThemeToggle></ThemeToggle>
      </div>
    </ThemeContextProvider>
  );
}
