import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {

  return (
    <AnchorLink
      className={`rounded-2xl px-10 py-2 bg-gradient-to-r from-gray-700 via-neutral-800 to-black text-primary-500 hover:from-primary-100 hover:to-primary-500 hover:text-gray-600 w-auto`}
      onClick={() => setSelectedPage(SelectedPage.Quiz)}
      href={`#${SelectedPage.Quiz}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
