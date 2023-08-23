import { SkinType, QuizType} from "@/shared/types"
import { useState } from "react"
import quizQuestion from "@/shared/quiz"


type Props = {


}
const quizQuextions = quizQuestion

const quiz = (props: Props) => {
    let [ skinquiz, setSkinquiz] = useState<SkinType>({
        skintype: "",
        isSensitive: true,
        concerns:[],
        tret: {
          want: false,
          tried: false,
          irritationLevel: 0,
          pregnant: false,
        },
        acneLevel: "none",
    })
    let [currentQuestion, setCurrentQuestion] = useState(0)


  return (
    <div>
        <div>
             {quizQuextions[currentQuestion].question}
        </div>
        
        
        


    </div>
  )
}

export default quiz