import React from "react";
import MenuItem from "./DesktopComponents/MenuItem";
import {
  ShoppingCartIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const DesktopMenu = () => {
  return (
    <nav className="hidden sm:space-x-8 items-center sm:ml-6 sm:flex">
      <MenuItem url={"/categories"} label={"Categories"} icon={TagIcon} />
      <MenuItem url={"/login"} label={"Login"} icon={UserIcon} />
      <MenuItem url={"/cart"} label={"Cart"} icon={ShoppingCartIcon} />
    </nav>
  );
};

export default DesktopMenu;
