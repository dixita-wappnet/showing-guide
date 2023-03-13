import React, { useState } from "react";
import { BsHouses, BsListNested } from "react-icons/bs";
import NavigationBottom from "../Utils/Const/NavigationBottom";
import NavigationTop from "../Utils/Const/NavigationTop";
import { FaHireAHelper } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Menu } from "@headlessui/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import {
  HiOutlineBell,
  HiOutlineLogout,
  HiOutlineSearch,
  HiOutlineCog,
} from "react-icons/hi";

function SlideBar() {
  const [showSiderbar, setShowSiderbar] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        className={`${
          showSiderbar ? "max-lg:block" : "max-lg:hidden"
        } bg-white w-[308px] p-2 flex flex-col fixed h-[100%] z-10 overflow-y-auto`}
      >
        <div className="flex flex-row justify-between">
          <div className="flex gap-2 py-4 ">
            <BsHouses fontSize={32} />
            <span className="text-2xl">
              <strong>ShowingGuide</strong>
            </span>
          </div>
          <div className="flex flex-row lg:hidden">
            <button
              onClick={() => {
                setShowSiderbar(!showSiderbar);
              }}
            >
              <AiOutlineCloseCircle fontSize={24} />
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-2 p-4 bg-blue-500 text-white rounded-md">
          <button>
            Create New Tour <b> + </b>
          </button>
        </div>
        <div className="flex-1 pt-0">
          <NavigationTop />
        </div>
        <div className="flex flex-col  pt-2 border-t border-neutral-700">
          <span>Need Help?</span>
          <NavigationBottom />
          <center className="border-solid hover:border-2 border-indigo-600 items-center px-1 py-1">
            <button className="flex">
              <span>
                <FaHireAHelper fontSize={32} />
              </span>
            </button>
            <span>Head Office</span>
          </center>
        </div>
      </div>

      {/* For smaller screens start */}

      <div className="lg:hidden max-lg:block px-2 mt-6 h-0 cursor-pointer flex flex-row">
        <div className="flex justify-between gap-[180px]">
          <BsListNested
            fontSize={30}
            onClick={() => {
              setShowSiderbar(!showSiderbar);
            }}
          />
          <div className="flex ml-10">
            <div>
              <Menu>
                <Menu.Button>
                  <div
                    className="h-10 w-10 rounded-full bg-sky-500 bg-cover"
                    style={{ backgroundImage: "url(./assets/face.png)" }}
                  ></div>
                </Menu.Button>
              </Menu>
            </div>
            <div className="z-10">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 mt-2 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d={menu?"M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"}
                  />
                </svg>
              </button>
              <div className={`${menu ? "block absolute" : "hidden"} text-3xl`} >
                <HiOutlineBell />
                <HiOutlineSearch />
                <HiOutlineCog />
                <HiOutlineLogout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideBar;
