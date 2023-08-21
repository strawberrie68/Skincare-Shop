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
  
    <div className="bg-white h-full gap-16 py-10 md:pb-0  w-full mt-12">
        <div className="mx-auto w-5/6" >
            <div>
             {quizQuextions[currentQuestion].question}
            </div>
             
        </div>
        
        
        


    </div>
  )
}

export default quiz