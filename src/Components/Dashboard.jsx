import React from "react";
import AddNote from "./components/AddNote";
import ClientDetails from "./components/ClientDetails";
import Drafts from "./components/Drafts";
import MeetingDetails from "./components/MeetingDetails";
import MlsLists from "./components/MlsLists";
import MlsNumbers from "./components/MlsNumbers";
import SelectAgent from "./components/SelectAgent";

export default function Dashboard() {
  return (
    <>
      <div className=" flex flex-row gap-2 px-2 py-3 overflow-y-auto ">
        <div>
          <SelectAgent />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <ClientDetails />
          </div>
          <div>
            <MeetingDetails />
          </div>
          <div className="flex flex-row gap-2">
            <MlsNumbers />
            <AddNote />
          </div>
          <div className="flex gap-4 px-4 py-14 justify-center items-center">
            <div className="bg-red-500 text-white px-20 py-4 rounded-lg">
              <button>Cancel</button>
            </div>
            <div className="bg-blue-700 text-white px-20 py-4 rounded-lg">
              <button>Next</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <Drafts />
          </div>
          <div>
            <MlsLists />
          </div>
        </div>
      </div>
    </>
  );
}
