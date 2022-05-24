import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="lg:text-white lg:hover:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Faculties <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a href="https://aksu.edu.ng/newsite/faculty-of-agriculture/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Agriculture
        </span></a>

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <a href="https://aksu.edu.ng/newsite/faculty-of-engineering/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Engineering
        </span></a>

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <a href="https://aksu.edu.ng/newsite/faculty-of-arts/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Arts
        </span></a>

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <a href="https://aksu.edu.ng/newsite/faculty-of-physical-sciences-2/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Physical Sciences
        </span></a>

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <a href="https://aksu.edu.ng/newsite/faculty-of-education/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Education
        </span></a>
      
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <a href="https://aksu.edu.ng/newsite/faculty-of-biological-sciences/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Biological Sciences
        </span></a>

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <a href="https://aksu.edu.ng/newsite/faculty-of-management-sciences/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Management Science
        </span></a>

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <a href="https://aksu.edu.ng/newsite/faculty-of-social-sciences/"><span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Faculty Of Social Science
        </span></a>
      </div>
    </>
  );
};

export default PagesDropdown;
