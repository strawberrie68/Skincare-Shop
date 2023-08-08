import NavBar from "@/componets/NavBar"
import { useAppSelector } from "@/hooks/reduxHook";
import { ProductType } from "@/shared/types";
import CartCard from "./CartCard";

const Cart = () => {
  const cart = useAppSelector(state => state.cart.product)
  return (
    <div className="bg-white h-full">
      <NavBar />
      <div className=" gap-16 py-10 md:pb-0  w-full mt-12 mb-16 ">
        <div className="mx-auto w-5/6 max-w-screen-md mt-12 flex justify-between" >
        <div className="w-full">
          <h1 className="mt-16 text-3xl bold ">
            SHOPPING CART
          </h1>
          <p className="mb-6 mt-3 text-gray-100">Your Basket</p>
          
            <div className="flex flex-col ">

              {/* { cart.map((product: ProductType)=>(
                <CartCard
                    img={product.img}
                    name={product.name}
                    price={product.price}
                />
                )) 
              } */}


            </div>

        </div>

        <div className=" pl-12 w-2/5">
          <p className="mt-16 text-xl bold ">ORDER SUMMARY</p>

        </div>
   
          



        </div>
   

      </div>

    </div>

  )
}

export default Cart