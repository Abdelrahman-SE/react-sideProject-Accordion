import Accordion from "./Accordion.jsx";
import { data_ } from "../data.js";
import { useState } from "react";

function App() {
  const [isExpandedID, setIsExpandedID] = useState(null);
  const [openDropdownID, setOpenDropdownID] = useState(null);

  return (
    <div className="m-auto min-h-screen max-w-3xl ">
      <div className="accordion flex justify-center items-center">
        <div className="accordion-list space-y-4 w-full m-auto max-w-[500px] h-auto shadow-lg shadow-blue-100 border border-blue-200 bg-white drop-shadow-black-lg md:mx-10 mx-0 mt-10 p-3 rounded-xl">
          {data_.map((item) => {
            return (
              <Accordion
                key={item.id}
                openDropdownID={openDropdownID}
                setOpenDropdownID={setOpenDropdownID}
                isExpandedID={isExpandedID}
                setIsExpandedID={setIsExpandedID}
                data={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
