import { SkinType, QuizType } from "@/shared/types";
import quizQuestion from "@/shared/quiz";
import NavBar from "@/componets/NavBar"


// type Props = {


// }
const quizQuextions = quizQuestion

const quiz = () => {

  // let [currentQuestion, setCurrentQuestion] = useState(0)


  return (
    <div className="bg-white h-full">
      <NavBar />
      <div className="bg-white h-full gap-16 py-10 md:pb-0  w-full mt-12">
        <div className="mx-auto w-5/6" >
          
          <p>Quiz</p>
        </div>

      </div>





    </div>
  )
}

export default quiz