import { SkinType } from "@/shared/types"
import { useState } from "react"


type Props = {


}

const Quiz = (props: Props) => {
    let [ skinQuiz, setSkinQuiz] = useState<SkinType>({
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

  return (
    <div>
        
        
        


    </div>
  )
}

export default Quiz