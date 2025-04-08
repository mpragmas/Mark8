import { use } from "react";
import { CiHeart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

const CartHeader = ({ handleShowCartPopup }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-between p-3 lg:p-6">
        <div className="flex items-center justify-center gap-1 lg:gap-3">
          <IoClose onClick={handleShowCartPopup} className="cursor-pointer" />
          <p>Cart</p>
        </div>
        <div className="flex items-center gap-1 sm:gap-3">
          <p className="flex h-[40px] items-center justify-center gap-1 rounded-md border border-light px-2 py-1 sm:px-4 lg:gap-2">
            <CiHeart className="h-[30px] text-accent" />
            <span className="text-xs font-medium">Save Cart For Later</span>
          </p>

          <p
            className="flex h-[40px] cursor-pointer items-center rounded-md border border-light px-2 sm:px-3"
            onClick={() => dispatch(clearCart())}
          >
            <MdDeleteOutline className="h-[30px] text-red-600" />
          </p>
        </div>
      </div>
      <div className="bg-light">
        <p className="flex items-center gap-3 px-6 py-4 text-[#495D69] md:gap-5">
          <PiWarningCircleBold />
          <span>By proceeding You won't be charged yet</span>
        </p>
      </div>
    </>
  );
};

export default CartHeader;
