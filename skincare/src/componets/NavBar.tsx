import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useAppSelector } from "@/hooks/reduxHook";
import Badge from '@mui/material/Badge';




const NavBar = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart.product).length

  return (
    <nav>
      <div
        className={` ${flexBetween} bg-gray-100 drop-shadow fixed top-0 z-40 w-full py-6 `}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
          <Link to="/">
            <div className="basis-1/5 mr-4 xs:basis-1/3">
              <img className="bject-scale-down" src={Logo} alt="logo" />
            </div>
          </Link>

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (

            <div className={`${flexBetween} gap-16 text-white uppercase tracking-widest font-light`}>
              <Link to="/">
                <p>HOME</p>
              </Link>
              <Link to="/quiz">
                <p>QUIZ</p>
              </Link>
              <Link to="/cart">
                <span className={`flex `}>

                  <Badge
                    className='text-sm'
                    badgeContent={cart}
                    sx={{
                      "& .MuiBadge-badge": {
                        color: "black",
                        backgroundColor: "white"
                      }
                    }}
                  >
                    <ShoppingBagIcon className="h-6 w-6 text-primary-500" />
                  </Badge>
                </span>
              </Link>

            </div>


          ) : (
            <button
              className="rounded-full bg-gradient-to-r from-gray-700 via-neutral-800 to-black p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-primary-500" />
            </button>)
          }

        </div>


      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-500 drop-shadow-xl text-gray-600 ">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <p>QUIZ</p>
            <p>CART</p>
            <p>CONTACT</p>
          </div>
        </div>
      )}

    </nav>
  )
}

export default NavBar