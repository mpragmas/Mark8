import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function OpenYourStore() {
  return (
    <div className="mx-4 mt-10 rounded-lg bg-light sm:mx-8 lg:mx-16">
      <p className="pt-3 text-center sm:hidden">
        <span className="text-accent">Open</span> Your Store
      </p>

      <div className="flex items-center justify-between gap-2 p-4 md:p-8">
        <p className="hidden sm:block">
          <span className="text-accent">Open</span> Your Store
        </p>
        <div className="flex gap-2">
          <div className="relative">
            <input
              placeholder="Enter your email"
              className="rounded-md bg-[#f3f4f6] px-4 py-1 placeholder-transparent focus:outline-none sm:w-[300px] sm:px-8 sm:py-2 sm:placeholder-gray-500 lg:w-[500px]"
            />
            <HiOutlineMail className="absolute left-1 top-2 font-medium text-accent sm:left-2 sm:top-3" />
          </div>
          <button className="flex items-center justify-center gap-2 rounded-md bg-accent px-2 py-1 md:px-6 md:py-2">
            <span className="text-sm font-medium sm:font-bold">Submit</span>
            <FaArrowRightLong className="font-medium" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenYourStore;
