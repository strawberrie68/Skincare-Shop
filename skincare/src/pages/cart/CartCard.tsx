import { XMarkIcon } from "@heroicons/react/24/solid";
// import { useAppDispatch } from "@/hooks/reduxHook";
// import { removeFromCart } from "@/redux/cartSlice";

const cartCard = ({ img, name, price,index }: Props) => {
  // const dispatch = useAppDispatch();
  return (
    <div 
      className="h-[200px]  my-4 flex justify-between items-center basis-4/5 pb-4 border-b-2 border-b-gray-05"
      key={index}
    >
    <div>
      <img
        src={img}
        className="object-contain h-[200px]"
      />

    </div>

    <p>{name}</p>
    <div><p>x 1</p></div>
    <p className="px-8">$ {price}</p>

    <XMarkIcon 
      className="h-6 w-6 text-gray-10"
      // onClick={()=>dispatch(removeFromCart({}))}
     />
  

  </div>
  )
}

export default cartCard