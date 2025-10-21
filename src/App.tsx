import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container mx-auto p-5">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center justify-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-20 p-5" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-20 p-5 react" alt="React logo" />
          </a>
        </div>

        <h1 className="text-center">Vite + React</h1>

        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <p className="text-gray-500 text-center">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </main>
  );
}

export default App;
