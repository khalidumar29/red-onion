import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import DinnerSection from "./Components/FoodSection/DinnerSection/DinnerSection";
import BreakfastSection from "./Components/FoodSection/BreakfastSection/BreakfastSection";
import LunchSection from "./Components/FoodSection/LunchSection/LunchSection";
import Footer from "./Shared/Footer/Footer";
function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<BreakfastSection />}></Route>
          <Route path='/lunch' element={<LunchSection />}></Route>
          <Route path='/dinner' element={<DinnerSection />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
