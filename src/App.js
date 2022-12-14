import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Area from "./pages/Area";
import Ingredients from "./pages/Ingredients";
import Random from "./pages/Random";
import Dish from "./pages/Dish";
import Categories from "./pages/Categories";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="area" element={<Area />} />
        <Route path="categories" element={<Categories />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="random" element={<Random />} />
        <Route path="dish/:id" element={<Dish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
