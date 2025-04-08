import { PiCurrencyDollarBold } from "react-icons/pi";
import { getCart } from "./cartSlice";
import { useSelector } from "react-redux";

const TotalAmount = () => {
  const cart = useSelector(getCart);

  const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <div className="mt-auto flex items-center justify-between border-t border-light p-6">
      <div>
        <p className="text-xs">Total</p>
        <p className="font-bold">{totalAmount} Rwf</p>
      </div>
      <button className="flex items-center justify-center gap-2 rounded-md bg-accent px-2 py-1 sm:px-3">
        <PiCurrencyDollarBold className="h-8" />
        <span className="text-xs font-medium">CheckOut</span>
      </button>
    </div>
  );
};

export default TotalAmount;
