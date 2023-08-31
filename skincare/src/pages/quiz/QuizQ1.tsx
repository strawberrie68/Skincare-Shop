
import Dry from "@/assets/quizIcons/Catus.svg"
import Normal from "@/assets/quizIcons/Cloud.svg"
import Combo from "@/assets/quizIcons/CloudSun.svg"
import Oily from "@/assets/quizIcons/Umbrella.svg"
// import { useForm } from "react-hook-form"

type UserData = {
  skintype: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
};


const QuizQ1 = ({ skintype, updateFields }: UserFormProps) => {



  return (
    <div className="mt-4">
      <p>What is your skintype?</p>


      <div className="flex mt-6 ">
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden" type="radio"
              // {...register("skintype")} 
              value="dry"
              name={skintype}
              onChange={e => updateFields({ skintype: e.target.value})}
            />
            <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} />
            <span className="text-xl text-gray-400 tracking-widest pt-2">DRY</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin that is scaly and flaky. Feels tight after washing</span>
          </label>
        </div>
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden"
              type="radio"
              // {...register("skintype")} 
              name={skintype}
              value="normal"
              onChange={e => updateFields({ skintype: e.target.value})}
            />
            <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} />
            <span className="text-xl text-gray-400 tracking-widest pt-2">NORMAL</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Doesn't feel dry or oily after washing</span>
          </label>
        </div>
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden"
              type="radio"
              // {...register("skintype")} 
              value="combo"
              name={skintype}
              onChange={e => updateFields({ skintype: e.target.value})}
            />
            <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Combo} />
            <span className="text-xl text-gray-400 tracking-widest pt-2">COMBO</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin that feel oily in the t-zone and normal/dry on the cheeks</span>
          </label>
        </div>
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden"
              type="radio"
              // {...register("skintype")} 
              value="oily"
              name={skintype}
              onChange={e => updateFields({ skintype: e.target.value})}
            />
            <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} />
            <span className="text-xl text-gray-400 tracking-widest pt-2">OILY</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Skin is oily immedaitely after washing</span>
          </label>
        </div>

      </div>
    </div>
  )
}

export default QuizQ1