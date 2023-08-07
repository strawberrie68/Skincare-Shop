import { useState } from "react";
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavButton from "./NavButton"



type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
  };

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "bg-gradient-to-t from-transparent via-neutral-500 to-neutral-800" : "bg-gray-600 drop-shadow ";


  return (
    <nav>
        <div
        className={` ${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6 `}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* LEFT SIDE */}
                <div className="basis-1/5 mr-4 xs:basis-1/3">
                  <img className="bject-scale-down" src={Logo} alt="logo"/>
                </div>
               {/* RIGHT SIDE */}
              {isAboveMediumScreens ? (
                
                <div className={`${flexBetween} gap-16 text-white uppercase tracking-widest font-light`}>
                <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link 
                    page="Our Routines"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Quiz"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                 <NavButton 
                    
                    isTopOfPage={isTopOfPage}
                 >
                    SHOP
                  </NavButton>


                </div>
                

              ): (
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
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Routines"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Quiz"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}

    </nav>
    
  )
}

export default Navbar