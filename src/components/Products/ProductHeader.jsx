import { LiaBoxSolid } from "react-icons/lia";
import { RiFilterLine, RiSortAlphabetAsc } from "react-icons/ri";

function ProductHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <LiaBoxSolid className="text-xl text-accent" />
        <p>Recent Products (100)</p>
      </div>
      <div className="flex items-center gap-5">
        <p className="rounded-md border-2 border-light p-2 text-xl">
          <RiFilterLine className="font-bold text-black" />
        </p>
        <p className="rounded-md border-2 border-light p-2 text-xl">
          <RiSortAlphabetAsc className="text-black" />
        </p>
      </div>
    </div>
  );
}

export default ProductHeader;
