import React from "react";
import { Link } from 'react-router-dom';

import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "@/hooks/reduxHook";
import Badge from '@mui/material/Badge';

type Props = {
  children: React.ReactNode;
  isTopOfPage: boolean;

};

const navButton = ({ isTopOfPage }: Props) => {
  const cart = useAppSelector(state => state.cart.products).length
  const actionBtnBackground = isTopOfPage ?
    "bg-gradient-to-r from-gray-700 via-neutral-800 to-black text-primary-500 hover:from-primary-100 hover:to-primary-500 hover:text-gray-600"
    : " bg-gradient-to-r from-primary-100 to-primary-500 text-gray-600 hover:shadow-md hover:shadow-primary-10";


  const cartColorTop = cart > 0 && isTopOfPage ? "text-primary-500 hover:text-black" : "text-black"

  return (

    <div className={`rounded-2xl px-10 py-2 ${actionBtnBackground}`}>
      <Link to="/shop">
        {cart > 0 ?

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
            <ShoppingBagIcon className={`h-6 w-6 ${cartColorTop}`} />
          </Badge> :

          "SHOP"

        }


      </Link>
    </div>



  )
};

export default navButton;
