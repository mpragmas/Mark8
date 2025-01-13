import Account from "../../assets/account.png";
import { CiHeart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { PiCurrencyDollarBold, PiWarningCircleBold } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { useOutsideClick } from "../../hooks/useOutsideClick";

// Cart.PropTypes = {
//   handleshowSearchPopup: PropTypes.func.isRequired,
//   showSearchPopup: PropTypes.bool.isRequired,
// };

const cartDetails = [
  {
    id: 1,
    name: "product 1",
    price: "9,000 Rwf",
    quantity: 2,
  },
  {
    id: 2,
    name: "product 3",
    price: "9,000 Rwf",
    quantity: 2,
  },
];

function Cart({ handleShowCartPopup }) {
  const ref = useOutsideClick(handleShowCartPopup);

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
            <div className="flex items-center justify-between p-3 lg:p-6">
              <div className="flex items-center justify-center gap-1 lg:gap-3">
                <IoClose
                  onClick={handleShowCartPopup}
                  className="cursor-pointer"
                />
                <p>Cart</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-3">
                <p className="flex h-[40px] items-center justify-center gap-1 rounded-md border border-light px-2 py-1 sm:px-4 lg:gap-2">
                  <CiHeart className="h-[30px] text-accent" />
                  <span className="text-xs font-medium">
                    Save Cart For Later
                  </span>
                </p>

                <p className="flex h-[40px] items-center rounded-md border border-light px-2 sm:px-3">
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
            {/* cart items */}
            <div className="mx-2 mt-3 flex-grow md:mx-4 md:mt-6">
              <ul className="space-y-2">
                {cartDetails.map((el) => (
                  <li
                    key={el.id}
                    className="flex w-full items-center gap-4 rounded-xl border border-light p-2 sm:justify-between lg:p-4"
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <p>1</p>
                      <img
                        src={Account}
                        className="h-[40px] rounded bg-light lg:h-[60px]"
                      />
                      <div>
                        <p className="font-medium text-black">{el.name}</p>
                        <p className="text-lightDark">{el.price}</p>
                      </div>
                    </div>

                    <div className="ml-auto flex gap-2 lg:gap-4">
                      <div className="flex gap-2">
                        <p className="flex h-[30px] w-[30px] items-center rounded-md border border-light px-2 sm:w-[35px] sm:px-3 lg:h-[40px] lg:w-[40px]">
                          <HiOutlineMinus className="block h-[30px]" />
                        </p>
                        <p className="flex h-[30px] w-[60px] items-center justify-center rounded-md border border-light bg-light px-2 sm:px-3 lg:h-[40px] lg:w-[80px]">
                          {el.quantity}
                        </p>
                        <p className="flex h-[30px] w-[30px] items-center rounded-md border border-light px-2 sm:w-[38px] sm:px-3 lg:h-[40px] lg:w-[40px]">
                          <GoPlus className="h-[30px]" />
                        </p>
                      </div>
                      <p className="flex h-[30px] w-[30px] items-center rounded-md border border-light px-2 sm:w-[35px] sm:px-3 lg:h-[40px] lg:w-[40px]">
                        <MdDeleteOutline className="h-[30px] text-red-600" />
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* total price section */}
          <div className="mt-auto flex items-center justify-between border-t border-light p-6">
            <div>
              <p className="text-xs">Total</p>
              <p className="font-bold">36,000 Rwf</p>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-md bg-accent px-2 py-1 sm:px-3">
              <PiCurrencyDollarBold className="h-8" />
              <span className="text-xs font-medium">CheckOut</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
