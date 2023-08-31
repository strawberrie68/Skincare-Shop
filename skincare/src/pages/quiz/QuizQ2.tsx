import Water from "@/assets/quizIcons/water.svg"
import Fire from "@/assets/quizIcons/fire.svg"

type UserData = {
  isSensitive: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
};


const QuizQ2 = ({ isSensitive, updateFields }: UserFormProps) => {



  return (
    <div className="mt-6 flex  flex-col w-4/5 justify-center m-auto">
      <p>Is your skin sensitive?</p>
      <p></p>


      <div className="flex flex-col mt-6">
        <div className="radio-btn p-2 ">
          <label className=" h-[210px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden" type="radio"
              // {...register("isSensitive")} 
              value="false"
              name={isSensitive}
              onChange={e => updateFields({ isSensitive: e.target.value})}
            />
            <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Water} />
            <span className="text-xl text-gray-400 tracking-widest pt-2">FALSE</span>
            <span className="w-56 text-xs m-auto mt-2 text-gray-400">Skin is rarely irritated unless I over exfoliate. </span>
          </label>
        </div>
        <div className="radio-btn p-2 ">
          <label className=" h-[250px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden"
              type="radio"
              // {...register("isSensitive")} 
              name={isSensitive}
              value="true"
              onChange={e => updateFields({ isSensitive: e.target.value})}
            />
            <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Fire} />
            <span className="text-xl text-gray-400 tracking-widest pt-2">TRUE</span>
            <span className="w-56 text-xs m-auto mt-2 text-gray-400">
              <ul>
                <li>My skin is usually red and easily irritated</li>
                <li>I have rosacea</li>
                <li>I have both dry skin and acne</li>
                <li>I am currently using retinol</li>
              </ul>
            </span>
          </label>
        </div>


      </div>
    </div>
  )
}

export default QuizQ2