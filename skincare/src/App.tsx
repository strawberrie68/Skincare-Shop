
import Home from "@/pages/homepage";
import Shop from "@/pages/shop";
import Cart from "@/pages/cart";
import "@/App.css"



import Start from "@/pages/quiz2/step1"
import Step2 from "@/pages/quiz2/Step2"
import Step3 from "@/pages/quiz2/Step3"
import Step4 from "@/pages/quiz2/Step4"
import Step5 from "@/pages/quiz2/Step5"
import Step6 from "@/pages/quiz2/Step6"
import Step7 from "@/pages/quiz2/Step7"
import Step7Half from "./pages/quiz2/Step7Half";
import Step8 from "@/pages/quiz2/Step8"
import Results from "./pages/quiz2/Result";





import {
  Routes,
  Route,
} from "react-router-dom"



function App() {

  return (
    <div className='app bg-gray-20'>


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/quiz" element={<Start />} />
        <Route path="/step-2" element={<Step2 />} />
        <Route path="/step-3" element={<Step3 />} />
        <Route path="/step-4" element={<Step4 />} />
        <Route path="/step-5" element={<Step5 />} />
        <Route path="/step-6" element={<Step6 />} />
        <Route path="/steps-7" element={<Step7Half />} />
        <Route path="/step-7" element={<Step7 />} />
        <Route path="/step-8" element={<Step8 />} />
        <Route path="/results" element={<Results />} />


        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>



    </div>
  )
}

export default App
