import { useAppDispatch } from "@/hooks/reduxHook";
import { addToCart } from "@/redux/cartSlice";
import { ProductType } from "@/shared/types";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    img: string,
    name: string,
    price: number,
    category: string
    product: ProductType
    key: number
}

const ProductCard = ({ img, name, price, category, product, key }: Props) => {
    const dispatch = useAppDispatch();

    const onSubmit = async (product: ProductType) => {
        try {
            dispatch(addToCart(product))

            toast(' 🔥 Item was added to cart ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });


        } catch (err) {
            console.log(err)

            toast.error('Item was not added', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }


    }



    return (
        <div key={key} className="xxs:w-100 sm:w-[200px] w-[220px] h-[410px] flex flex-col justify-center  max-w-screen-md m-auto mb-6">
            <img className=" w-fill object-fit h-[280px] sm:w-auto sm:object-scale-down xs:object-contain" src={img} />
            <div className="flex h-[100px] mt-2 justify-between">
                <div className="basis-4/5 ">
                    <p className="text-md">{name}</p>
                    <p className="text-sm text-gray-400">{category}</p>

                </div>

                <p className="text-lg  ">{price}</p>

            </div>

            <button
                className="border-2 bg-white w-[150px] rounded-lg text-gray-500 mt-2 px-4 py-1 hover:bg-black hover:text-primary-500"
                onClick={() => onSubmit(product)}
            >
                Add to cart
            </button>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />


        </div>
    )
}

export default ProductCard

