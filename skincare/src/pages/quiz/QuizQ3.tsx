

type UserData = {
  mainGoal: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
};


const QuizQ3 = ({ mainGoal, updateFields }: UserFormProps) => {



  return (
    <div className="mt-4">
      <p>What is your Main Skin Goal?</p>
      <p className="text-gray-10 text-sm">Pick only one</p>


      <div className="flex mt-6 ">
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden" type="radio"
              // {...register("mainGoal")} 
              value="acne"
              name={mainGoal}
              onChange={e => updateFields({ mainGoal: e.target.value})}
            />
            {/* <img className="w-10  bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Dry} /> */}
            <span className="text-xl text-gray-400 tracking-widest pt-2">ACNE</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Clear and Get rid of acne</span>
          </label>
        </div>
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden"
              type="radio"
              // {...register("mainGoal")} 
              name={mainGoal}
              value="wrinkles"
              onChange={e => updateFields({ mainGoal: e.target.value})}
            />
            {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Normal} /> */}
            <span className="text-xl text-gray-400 tracking-widest pt-2">WRINKLES</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Treat Fine Lines</span>
          </label>
        </div>
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden"
              type="radio"
              // {...register("mainGoal")} 
              value="combo"
              name={mainGoal}
              onChange={e => updateFields({ mainGoal: e.target.value})}
            />
            {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Combo} /> */}
            <span className="text-xl text-gray-400 tracking-widest pt-2">ROSACEA</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Help reduce reddnes in the skin</span>
          </label>
        </div>
        <div className="radio-btn p-2 ">
          <label className=" h-[200px] flex flex-col text-center py-8 px-2 border-2  border-gray-05 cursor-pointer bg-white opacity-75 rounded-xl hover:shadow-slate-300 hover:shadow-lg ">
            <input
              className="hidden"
              type="radio"
              // {...register("mainGoal")} 
              value="hyperpigmentation"
              name={mainGoal}
              onChange={e => updateFields({ mainGoal: e.target.value})}
            />
            {/* <img className="w-10 bg-primary-10 mb-4 m-auto border-2 p-2 rounded-3xl" src={Oily} /> */}
            <span className="text-xl text-gray-400 tracking-widest pt-2">DARK SPOTS</span>
            <span className="w-40 text-xs m-auto mt-2 text-gray-400">Help get rid of dark spots and even out skin</span>
          </label>
        </div>

      </div>
    </div>
  )
}

export default QuizQ3