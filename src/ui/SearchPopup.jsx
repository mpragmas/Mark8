import PropTypes from "prop-types";

import { CiSearch } from "react-icons/ci";
import { useOutsideClick } from "../hooks/useOutsideClick";

function SearchPopup({ handleShowSearchPopup }) {
  const ref = useOutsideClick(handleShowSearchPopup);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="200"
      className="fixed left-0 top-0 z-30 h-screen w-full backdrop-brightness-50"
    >
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 opacity-100"
      >
        <div className="flex items-center gap-2 rounded-lg bg-white p-4 sm:p-6 md:p-8">
          <p className="hidden sm:block">Search</p>
          <div className="relative">
            <input
              placeholder="Search products, stores etc"
              className="bg-light px-4 py-1 placeholder-transparent focus:outline-none sm:w-[300px] sm:px-8 sm:py-2 sm:placeholder-gray-500 lg:w-[500px]"
            />
            <CiSearch className="absolute left-1 top-2 font-medium text-accent sm:left-2 sm:top-3" />
          </div>
          <button
            onClick={handleShowSearchPopup}
            className="flex items-center gap-2 rounded-md bg-accent px-2 py-1 md:px-6 md:py-2"
          >
            <span>Search</span>
            <CiSearch className="font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;
