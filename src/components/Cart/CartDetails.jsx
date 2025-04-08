import Account from "../../assets/account.png";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  getCart,
  increaseQuantity,
} from "./cartSlice";

const CartDetails = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  console.log(item);

  return (
    <li
      key={item.itemId}
      className="flex w-full items-center gap-4 rounded-xl border border-light p-2 sm:justify-between lg:p-4"
    >
      <div className="flex items-center gap-2 lg:gap-3">
        <p>{cart.indexOf(item) + 1}</p>
        <img src={Account} className="h-[40px] rounded bg-light lg:h-[60px]" />
        <div>
          <p className="font-medium text-black">{item.name}</p>
          <p className="text-lightDark">{item.totalPrice}</p>
        </div>
      </div>

      <div className="ml-auto flex gap-2 lg:gap-4">
        <div className="flex gap-2">
          <p
            className="flex h-[30px] w-[30px] cursor-pointer items-center rounded-md border border-light px-2 sm:w-[35px] sm:px-3 lg:h-[40px] lg:w-[40px]"
            onClick={() => dispatch(decreaseQuantity(item.itemId))}
          >
            <HiOutlineMinus className="block h-[30px]" />
          </p>
          <p className="flex h-[30px] w-[60px] items-center justify-center rounded-md border border-light bg-light px-2 sm:px-3 lg:h-[40px] lg:w-[80px]">
            {item.quantity}
          </p>
          <p
            className="flex h-[30px] w-[30px] cursor-pointer items-center rounded-md border border-light px-2 sm:w-[38px] sm:px-3 lg:h-[40px] lg:w-[40px]"
            onClick={() => dispatch(increaseQuantity(item.itemId))}
          >
            <GoPlus className="h-[30px]" />
          </p>
        </div>
        <p
          className="flex h-[30px] w-[30px] cursor-pointer items-center rounded-md border border-light px-2 sm:w-[35px] sm:px-3 lg:h-[40px] lg:w-[40px]"
          onClick={() => dispatch(deleteItem(item.itemId))}
        >
          <MdDeleteOutline className="h-[30px] text-red-600" />
        </p>
      </div>
    </li>
  );
};

export default CartDetails;
