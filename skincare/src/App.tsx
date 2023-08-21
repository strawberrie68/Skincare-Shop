import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/pages/homepage"
import Quiz from "@/pages/quiz";
// import Shop from "@/pages/shop"
// import Cart from "@/pages/cart"
import Footer from "./scenes/footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className='app bg-gray-20'> 


    <Router>
    <Navbar
       isTopOfPage={isTopOfPage}
       selectedPage={selectedPage}
       setSelectedPage={setSelectedPage}
    />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          
          {/* PAGES TO ADD/ OR IN PROGRESS */}
          {/* <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> */}
          

        </Routes>
        
      </Router>

   </div>
  )
}

export default App
