
import { Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import AboutPage from "./components/Pages/aboutPage";
import PromotionsPage from "./components/Pages/Promotions";

function App() {

return (
    <Routes>
      <Route path="/"  />
      <Route path="/about"element={<AboutPage/> }/>
      <Route path="/promotions"element={<PromotionsPage/> }/>
    </Routes>
  );
}


export default App;

