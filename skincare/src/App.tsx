// import { useEffect, useState } from "react";
// import { SelectedPage } from "@/shared/types";
import Home from "@/pages/homepage"
import Quiz from "@/pages/quiz";
import Shop from "@/pages/shop"
import Cart from "@/pages/cart"


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {

  return (
   <div className='app bg-gray-20'> 


    <Router>
  

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          

        </Routes>
        
      </Router>

   </div>
  )
}

export default App
