import NavBar from "@/componets/NavBar"
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHook";
import { reset } from "@/redux/cartSlice";
import { ProductType } from "@/shared/types";
import CartCard from "./CartCard";
import { Link } from 'react-router-dom';
import { customSerum } from "@/shared/types";


const Cart = () => {
  const cart = useAppSelector(state => state.cart.products)
  const dispatch = useAppDispatch();
  const hideButton = cart?.length == 0 ? "hidden" : ""
  const total = cart?.reduce((cartTotal: number, item: ProductType) =>
    cartTotal += item?.price, 0)
  return (
    <div className="bg-white h-full">
      <NavBar />
      <div className=" gap-16 py-10 md:pb-0  w-full mt-12 ">
        <div className="mx-24  mt-12 flex justify-between " >
          <div className="basis-3/4">
            <h1 className="mt-16 text-3xl bold ">
              SHOPPING CART
            </h1>
            <p className="mb-6 mt-3 text-gray-100">Your Basket</p>

            <button
              className={`${hideButton} mb-8 border-2 px-2 py-1 hover:bg-primary-10 hover:text-gray-500 hover:border-primary-10`}
              onClick={() => dispatch(reset())}
            >
              Empty cart
            </button>


            {/* IF CART EMPTY  or NOT EMPTY*/}
            <div className="flex flex-col ">
              {cart?.length == 0 ?
                <div className="m-auto text-center pt-24">
                  <p className="text-2xl text-gray-10">Your Cart is Empty</p>
                  <Link to="/shop">
                    <button className="border-2 px-4 py-2  mt-3 hover:bg-primary-10 hover:border-none">Add Products</button>
                  </Link>
                </div>
                :

                cart?.map((product: ProductType | customSerum, index) => (
                  <CartCard
                    img={product?.img}
                    name={product?.name}
                    price={product?.price}
                    key={index}
                  />
                ))
              }
            </div>
          </div>

          {/* ORDER SUMMARY */}


          <div className="flex flex-col  ml-12 basis-1/4">
            <div className="border-2 px-8 pt-2 py-6">
              <p className="mt-16 text-xl bold mb-6">ORDER SUMMARY</p>
              <div className="flex h-[250px] border-b-2 overflow-scroll mb-8 flex-col text-gray-100">
                {cart?.map((product: ProductType) => (
                  <div className="flex mb-2">
                    <p className="basis-1/4">1 x</p>
                    <p className="basis-1/2">{product?.name}</p>
                    <p className="basis-1/4 ml-2">$ {product?.price}</p>
                  </div>

                ))}



              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>$ {total}</p>
              </div>


            </div>
            {/* SHIPPING AND TAXES */}
            <div>
              <div className="flex flex-col px-4 py-2 mt-8">
                <div className="flex justify-between pb-2">
                  <p>Shipping</p>
                  <p>--</p>
                </div>
                <div className="flex justify-between pb-2">
                  <p>Taxes</p>
                  <p>--</p>
                </div>
                <div className="flex justify-between pb-2">
                  <p className="text-xl">Total</p>
                  <p className="text-2xl font-semibold">$ {total}</p>
                </div>

              </div>
              <button
                className="bg-black w-full text-white h-[44px] hover:bg-primary-500 hover:text-black"
              >
                Checkout
              </button>


            </div>






          </div>

        </div>
        {cart?.length != 0 ?
          <div className="h-full w-4/5 mx-auto pb-52 flex justify-center">
            <div className="basis-3/4">
              <Link to="/shop">
                <button className="border-2 bg-white w-[350px] rounded-lg text-gray-500 mt-2 px-4 py-2 hover:bg-black hover:text-primary-500">
                  Continue Shopping
                </button>

              </Link>

            </div>
          </div>

          : ""}

      </div>

    </div>

  )
}

export default Cart