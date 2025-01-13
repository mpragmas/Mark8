import { MdOutlineChevronRight } from "react-icons/md";

function StoreHeader({ img, name, numProd }) {
  return (
    <li className="flex items-center gap-2 md:gap-5">
      <img
        src={img}
        className="h-[50px] w-[50px] rounded-xl bg-accent bg-cover"
      />
      <div className="flex items-center md:space-x-14 lg:space-x-14 xl:space-x-28">
        <div>
          <h1 className="text-sm font-medium">{name}</h1>
          <p className="text-xs text-lightDark">{numProd}</p>
        </div>
        <p className="hidden lg:block">
          <MdOutlineChevronRight />
        </p>
      </div>
    </li>
  );
}

export default StoreHeader;
