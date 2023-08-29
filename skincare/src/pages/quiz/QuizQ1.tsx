
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook"
import { chooseSkintype } from "@/redux/quizSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate } from "react-router-dom"

interface skintypeInput {
  skintype: String;
}


const QuizQ1 = () => {
    const dispatch = useAppDispatch;
    // const skintype= useAppSelector( state => state.quiz.skintype)
    const { register, handleSubmit } = useForm <skintypeInput>();

    const onSubmit: SubmitHandler<skintypeInput> = (data) => {
      dispatch(chooseSkintype(data.skintype));
      <Navigate to="/quiz-2" />
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="skinType">What is your skin type?</label>
            <select id="skinType" {...register("skintype")}>
              <option value="dry">Dry</option>
              <option value="normal">Normal</option>
              <option value="combo">Combination</option>
              <option value="oily">Oily</option>
            </select>
          </div>
          <button type="submit">Next</button>
      </form>



    </div>
  )
}

export default QuizQ1