import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { addToCart  } from "@/redux/cartSlice";
import { ProductType } from "@/shared/types";

type Props = {
    img: string,
    name: string,
    // concerns: [string],
    // skintype: [string],
    price: number,
    category: string
    product: ProductType
}

const ProductCard = ({ img, name, price, category, product }: Props) => {
    const dispatch = useAppDispatch();

 
    
    return (
        <div className="w-auto h-[410px] flex flex-col justify-center  max-w-screen-md">
            <img className="object-fit h-[280px]" src={img} />
            <div className="flex h-[100px] mt-2 justify-between">
                <div className="basis-4/5 ">
                    <p className="text-md">{name}</p>
                    <p className="text-sm">{category}</p>

                </div>

                <p className="text-lg  ">{price}</p>

            </div>

            <button
                className="bg-black w-[150px] rounded-lg text-white mt-4 px-4 py-1"
                onClick={()=>dispatch(addToCart(product))}
            >
                Add to cart
            </button>


        </div>
    )
}

export default ProductCard

