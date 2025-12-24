import { useEffect, useRef } from "react";
import { FaLaptop } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

export default function Accordion({
  isExpandedID,
  setIsExpandedID,
  data,
  setOpenDropdownID,
  openDropdownID,
}) {
  const style = [
    "px-3 sm:px-4 text-sm py-2 hover:bg-green-500 bg-white hover:text-white text-black font-bold border-1 rounded-md border-gray-300 cursor-pointer",
    "px-3 sm:px-4 text-sm py-2 bg-sky-800 hover:bg-green-500 hover:text-white text-white font-bold border-1 rounded-md border-gray-300 cursor-pointer",
  ];
  const descriptionRef = useRef(null);
  const dropdownRef = useRef(null);
  const isOpenAccorditon = isExpandedID === data.id;
  const isOpenDropdown = openDropdownID === data.id;

  const toggleExpand = () => {
    if (isOpenAccorditon) {
      setIsExpandedID(null);
      setOpenDropdownID(null); // Reset dropdown when closing accordion
    } else {
      setIsExpandedID(data.id);
    }
  };

  const toggleDropdown = () => {
    setOpenDropdownID(isOpenDropdown ? null : data.id);
  };

  useEffect(() => {
    const element = descriptionRef.current;
    const element2 = dropdownRef.current;

    element.style.maxHeight = isOpenAccorditon
      ? `${element.scrollHeight}px`
      : "0px";

    element2.style.maxHeight = isOpenDropdown
      ? `${element2.scrollHeight}px`
      : "0px";
    element2.style.opacity = isOpenDropdown ? "1" : "0";
  }, [isOpenAccorditon, isOpenDropdown]);

  return (
    <div className="list-1 relative border-b-2 border-b-neutral-400 pb-3">
      <div className="list-wrapper mb-3 gap-1 flex justify-between items-center ">
        <div className="h-10.5 w-10 relative flex justify-center items-center before:absolute before:bg-green-500 before:rounded-[50%] before:h-full before:w-full">
          <span className=" relative text-center">
            <FaLaptop className="text-3xl text-white" />
          </span>
        </div>
        <div className="grow ms-1">
          <p className="text-xl font-bold capitalize">{data.title}</p>

          {data.problem.map((prob) => {
            return (
              <p
                key={data.id}
                className="text-[10px] font-semibold text-neutral-400"
              >
                {prob.problemName}
                {prob.solve ? (
                  <span className="text-blue-500">{prob.solve}</span>
                ) : null}
              </p>
            );
          })}
        </div>
        <div
          onClick={() => {
            toggleExpand();
          }}
          className={`flex flex-col justify-center text-neutral-400 cursor-pointer items-center hover:bg-blue-100 hover:rounded-4xl
            ${isOpenAccorditon ? "bg-blue-100 rounded-4xl" : null}
            `}
        >
          <FaAngleDown className="text-3xl" />
        </div>
      </div>
      <div
        ref={descriptionRef}
        className="list-description bg-blue-100 rounded-3xl overflow-hidden transition-all duration-500 ease-in-out "
      >
        <div className="p-3 relative flex flex-col justify-center items-center gap-y-2">
          <div
            ref={dropdownRef}
            className="absolute border transition-all duration-500 ease-in-out border-blue-300 rounded-2xl overflow-hidden bg-white text-black top-3 right-14 z-10"
          >
            <ul className="max-h-[300px] overflow-auto">
              {data.dropdown.map((item, i) => {
                return (
                  <li
                    key={i + 1}
                    className="flex cursor-pointer justify-center p-4 hover:bg-green-500 items-center border-b-1 border-sky-300"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className=" flex justify-between items-baseline">
            <h2
              className="text-lg font-semibold line-clamp-3"
              title=" Manage and monitor your connected devices easily. Stay in
                    sync across all platforms and ensure smooth communication
                    between your tools."
            >
              {data.descriptionTitle}
            </h2>
            <div
              onClick={toggleDropdown}
              className="relative h-full before:absolute before:w-full before:h-full before:bg-white text-amber-50 before:rounded-[50%] cursor-pointer"
            >
              <div className="w-10 h-10 relative text-black font-bold text-lg text-center">
                <span className="inline-block w-full h-full text-center">
                  ...
                </span>
              </div>
            </div>
          </div>

          <div className="list-ul self-start py-6">
            <ul className="ps-2 space-y-5">
              {data.listItem.map((item, i) => {
                return (
                  <li key={i} className="flex justify-start items-center gap-2">
                    <div className="relative before:absolute before:w-full before:h-full before:bg-sky-800 before:rounded-xl">
                      <div className="relative w-11 h-11 text-white flex justify-center text-3xl items-center">
                        <FaFolderOpen />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-md">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative p-3 w-[80%] before:absolute before:h-full before:-inset-1 before:block before:w-full before:bg-sky-800 before:-skew-y-2">
            <p className="relative font-semibold text-white text-sm/6 line-clamp-4 ">
              {data.info}
            </p>
          </div>
          <div className="self-center sm:self-end space-x-1 mt-5">
            {data.btn.map((btn, i) => {
              return (
                <button key={i} className={style[i]}>
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
