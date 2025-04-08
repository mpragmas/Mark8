import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { addItem, deleteItem, getCart } from "../components/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSaved,
  getSaved,
  saveItem,
} from "../components/Products/savedSlice";
//import Account from "../../assets/account.png";

function SavedProductCard({ item }) {
  const dispatch = useDispatch();

  const { id, name, price, discountPrice } = item;

  const isInCart = useSelector(getCart)?.some((item) => item.itemId === id);
  const isInSaved = useSelector(getSaved)?.some((item) => item.itemId === id);

  function handleAddToCart() {
    const newItem = {
      itemId: id,
      name,
      price,
      discountPrice,
      quantity: 1,
      totalPrice: (discountPrice || price) * 1,
    };
    isInCart ? dispatch(deleteItem(id)) : dispatch(addItem(newItem));
  }
  function handleAddToSaved() {
    const newSaved = {
      itemId: id,
      name,
      price,
      discountPrice,
    };
    isInSaved ? dispatch(deleteSaved(id)) : dispatch(saveItem(newSaved));
  }

  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-lg border border-light">
      <img
        src="../../assets/yoo.png"
        alt=""
        className="w-full bg-[#FFFFFF] text-[#FFFFFF]"
      />
      <div className="flex items-center justify-between gap-5 p-2">
        <div className="space-y-2">
          <p className="text-xs">{name}</p>
          <div className="-center flex gap-2">
            <p className="text-xs text-accent">{discountPrice || price}</p>
            <p className="text-xs text-lightDark line-through">{price}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-3">
          <p
            className={`rounded-md border-2 ${isInCart ? "border-accent" : "border-light"} p-1 sm:p-2`}
            onClick={handleAddToCart}
          >
            <AiOutlineShoppingCart className={isInCart ? "text-accent" : ""} />
          </p>
          <p
            className={`rounded-md border-2 ${isInSaved ? "border-accent" : "border-light"} cursor-pointer p-1 sm:p-2`}
            onClick={handleAddToSaved}
          >
            <CiHeart className={isInSaved ? "text-accent" : ""} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SavedProductCard;
