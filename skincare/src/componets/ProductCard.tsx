import { useAppDispatch } from "@/hooks/reduxHook";
import { addToCart  } from "@/redux/cartSlice";
import { ProductType } from "@/shared/types";

type Props = {
    img: string,
    name: string,
    price: number,
    category: string
    product: ProductType
}

const ProductCard = ({ img, name, price, category, product }: Props) => {
    const dispatch = useAppDispatch();

 
    
    return (
        <div className=" w-[220px] h-[410px] flex flex-col justify-center  max-w-screen-md ">
            <img className=" w-fill object-fit h-[280px] sm:w-auto sm:object-scale-down xs:object-contain" src={img} />
            <div className="flex h-[100px] mt-2 justify-between">
                <div className="basis-4/5 ">
                    <p className="text-md">{name}</p>
                    <p className="text-sm">{category}</p>

                </div>

                <p className="text-lg  ">{price}</p>

            </div>

            <button
                className="border-2 bg-white w-[150px] rounded-lg text-gray-500 mt-4 px-4 py-1 hover:bg-black hover:text-primary-500"
                onClick={()=>dispatch(addToCart(product))}
            >
                Add to cart
            </button>


        </div>
    )
}

export default ProductCard

