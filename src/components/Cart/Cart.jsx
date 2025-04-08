import { useOutsideClick } from "../../hooks/useOutsideClick";

import CartDetails from "./CartDetails";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import TotalAmount from "./TotalAmount";
import CartHeader from "./CartHeader";

// Cart.PropTypes = {
//   handleshowSearchPopup: PropTypes.func.isRequired,
//   showSearchPopup: PropTypes.bool.isRequired,
// };

function Cart({ handleShowCartPopup }) {
  const ref = useOutsideClick(handleShowCartPopup);
  const cart = useSelector(getCart);

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="300"
      className="fixed left-0 top-0 z-30 h-screen w-full backdrop-brightness-50"
    >
      <div
        ref={ref}
        className="fixed right-0 z-40 h-screen w-full bg-white sm:w-[400px] lg:w-[500px] xl:w-[600px]"
      >
        <div className="flex h-full flex-col">
          <div>
            <CartHeader handleShowCartPopup={handleShowCartPopup} />
            {/* cart items */}
            <div className="mx-2 mt-3 flex-grow md:mx-4 md:mt-6">
              <ul className="space-y-2">
                {cart.length == 0 ? (
                  <p>No items in the cart</p>
                ) : (
                  cart.map((el) => <CartDetails key={el.itemId} item={el} />)
                )}
              </ul>
            </div>
          </div>
          {/* total price section */}
          <TotalAmount />
        </div>
      </div>
    </div>
  );
}

export default Cart;
