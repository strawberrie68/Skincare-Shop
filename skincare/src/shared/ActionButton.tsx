import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ isTopOfPage, children, setSelectedPage }: Props) => {
  const actionBtnBackground = isTopOfPage ? 
    "bg-gradient-to-r from-gray-700 via-neutral-800 to-black text-primary-500 hover:from-primary-100 hover:to-primary-500 hover:text-gray-600"
    : " bg-gradient-to-r from-primary-100 to-primary-500 text-gray-600 hover:shadow-md hover:shadow-primary-10";
  return (
    <AnchorLink
      className={`rounded-2xl px-10 py-2 bg-gradient-to-r from-gray-700 via-neutral-800 to-black text-primary-500 hover:from-primary-100 hover:to-primary-500 hover:text-gray-600`}
      onClick={() => setSelectedPage(SelectedPage.Quiz)}
      href={`#${SelectedPage.Quiz}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
