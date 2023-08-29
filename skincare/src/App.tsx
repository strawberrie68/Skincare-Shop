// import { useEffect, useState } from "react";
// import { SelectedPage } from "@/shared/types";
import Home from "@/pages/homepage";
import Quiz from "@/pages/quiz";
import Shop from "@/pages/shop";
import Cart from "@/pages/cart";
import "@/App.css"

import Quiz1 from "@/pages/quiz/QuizQ1";
import Quiz2 from "@/pages/quiz/QuizQ2";
import Quiz3 from "@/pages/quiz/QuizQ3";
import Quiz4 from "@/pages/quiz/QuizQ4";
import Quiz5 from "@/pages/quiz/QuizQ5";
import Quiz6 from "@/pages/quiz/QuizQ6";



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
          {/* QUIZ QUESTIONS */}
            <Route path="/quiz-1" element={<Quiz1 />} />
            <Route path="/quiz-2" element={<Quiz2 />} />
            <Route path="/quiz-3" element={<Quiz3 />} />
            <Route path="/quiz-4" element={<Quiz4 />} />
            <Route path="/quiz-5" element={<Quiz5 />} />
            <Route path="/quiz-6" element={<Quiz6 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>

      </Router>

    </div>
  )
}

export default App
