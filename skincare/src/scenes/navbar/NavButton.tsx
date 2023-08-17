import React from "react";
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  isTopOfPage: boolean;

};

const navButton = ({ isTopOfPage, children }: Props) => {
  const actionBtnBackground = isTopOfPage ? 
    "bg-gradient-to-r from-gray-700 via-neutral-800 to-black text-primary-500 hover:from-primary-100 hover:to-primary-500 hover:text-gray-600"
    : " bg-gradient-to-r from-primary-100 to-primary-500 text-gray-600 hover:shadow-md hover:shadow-primary-10";
  return (
  
    <div className={`rounded-2xl px-10 py-2 ${actionBtnBackground}`}>
      <Link to="/shop">
        {children}
      </Link>
    </div>
     
     
    
  )
};

export default navButton;
