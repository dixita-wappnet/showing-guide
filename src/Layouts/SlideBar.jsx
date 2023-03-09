import React from "react";
import { BsHouses } from "react-icons/bs";
import NavigationBottom from "../Utils/Const/NavigationBottom";
import NavigationTop from "../Utils/Const/NavigationTop";
import { FaHireAHelper } from "react-icons/fa";

function SlideBar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white overflow-y-auto">
      <div className="flex items-center gap-2 px-1 p-3">
        <BsHouses fontSize={30} />
        <span className="text-neutral-100 text-lg">ShowingGuide</span>
      </div>
      <div className="flex flex-col p-4 bg-sky-600 border-neutral-700 rounded-md">
        <button>Create New Tour <b> + </b></button>
      </div>
      <div className="flex-1 pt-0">
        <NavigationTop />
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        <span>Need Help?</span>
        <NavigationBottom />
        <center className="border-solid hover:border-2 border-indigo-600 items-center px-1 py-1">
          <button className="flex text-3xl">
            <span>
              <FaHireAHelper />
            </span>
          </button>
          <span>Head Office</span>
        </center>
      </div>
    </div>
  );
}

export default SlideBar;
