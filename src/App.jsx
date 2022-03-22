import Verificator from "./Verificator";
import CatchwordGeneratorContext from "./contexts/CatchwordGenerator";
import Theme from "./contexts/Theme";

export default function App() {
  return (
    <Theme>
      <div className="App">
        <CatchwordGeneratorContext>
          <Verificator />
        </CatchwordGeneratorContext>
      </div>
    </Theme>
  );
}
