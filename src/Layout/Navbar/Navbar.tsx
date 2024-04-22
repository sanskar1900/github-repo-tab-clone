import React from "react";
import { navbarItems } from "../../constants/data";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul className="navbarList">
        <FaGithub size={30} />
        {navbarItems?.map((data: any) => {
          return (
            <li key={data?.id}>
              {" "}
              <div className="makeFlex">
                <div>{data?.name}</div>{" "}
                {data?.isExpandable && (
                  <div>
                    {" "}
                    <IoIosArrowDown className="down" />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
