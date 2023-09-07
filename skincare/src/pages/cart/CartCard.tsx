import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "@/hooks/reduxHook";
import { removeFromCart } from "@/redux/cartSlice";


type Props = {
  img: string,
  name: string,
  price: number,
}

const cartCard = ({ img, name, price }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="h-[200px]  my-4 flex justify-between items-center basis-4/5 pb-4 border-b-2 border-b-gray-05"
    >
      <div>
        <img
          src={img}
          className="object-contain h-[200px] "
        />

      </div>
      <div className="grid grid-cols-4 w-3/4 ml-8">
        <p className="col-span-2">{name}</p>
        <p>x 1</p>
        <p className="px-8">$ {price}</p>

      </div>


      <XMarkIcon
        className="h-6 w-6 text-gray-10"
        onClick={() => dispatch(removeFromCart({ name }))}
      />


    </div>
  )
}

export default cartCard