import { CiHeart, CiStar } from "react-icons/ci";
import Account from "../../assets/account.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineDotsVertical, HiOutlineMinus } from "react-icons/hi";
import { LiaBoxSolid } from "react-icons/lia";
import { GoArrowLeft, GoPlus } from "react-icons/go";
import { MdDeleteOutline, MdOutlineLocalPhone } from "react-icons/md";

function ProductDetailsCard() {
  return (
    <div>
      <div className="flex gap-3 text-xs font-bold">
        <GoArrowLeft />
        <p className="flex gap-2">
          Home <span>/</span>
        </p>
        <p className="flex gap-2">
          Products <span>/</span>
        </p>
        <p className="flex gap-2">
          Vectors <span>/</span>
        </p>
        <p className="flex gap-2 font-normal">
          Product 1 <span>/</span>
        </p>
      </div>
      <div className="mt-6 grid grid-cols-custom-40-60 gap-5">
        <div className="w-full cursor-pointer overflow-hidden rounded-xl border border-light">
          <img
            src={Account}
            alt=""
            className="h-[80%] w-full bg-accent text-[#FFFFFF]"
          />
          <div className="ml-5 flex h-[20%] items-center gap-1">
            <img
              src={Account}
              className="h-10 w-10 rounded-md border border-light hover:border-2 hover:border-accent"
            />
            <img
              src={Account}
              className="h-10 w-10 rounded-md border border-light hover:border-2 hover:border-accent"
            />

            <img
              src={Account}
              className="h-10 w-10 rounded-md border border-light hover:border-2 hover:border-accent"
            />
            <img
              src={Account}
              className="h-10 w-10 rounded-md border border-light hover:border-2 hover:border-accent"
            />
            <img
              src={Account}
              className="h-10 w-10 rounded-md border border-light hover:border-2 hover:border-accent"
            />
          </div>
        </div>
        <div className="h-ful flex w-full flex-col justify-between rounded-xl border-[0.5px] border-light">
          <div>
            <div className="border-b border-light px-10 py-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-5">
                  <p className="font-bold">Product Details</p>
                  <p className="rounded-md bg-light p-1 text-xs"> IN STOCK</p>
                </div>
                <div className="flex items-center gap-1 sm:gap-3">
                  <p className="flex items-center justify-center gap-2 rounded-md border-2 border-light px-3 py-1 sm:px-4">
                    <CiHeart className="h-8 w-5 text-accent" />
                    <span className="text-xs font-medium">Save</span>
                  </p>

                  <p>
                    <HiOutlineDotsVertical />
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-2 mt-2 px-10 py-3">
              <div className="space-y-5 text-left">
                <div>
                  <h1 className="text-sm font-bold">Product 1</h1>
                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-xs text-accent">9,000 Rwf</p>
                    <p className="text-xs text-lightDark line-through">
                      12,000 Rwf
                    </p>
                  </div>
                </div>

                <h1 className="text-sm font-bold">Description</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br /> In perspiciatis quam dicta numquam voluptates placeat
                  deserunt veniam
                </p>

                <h1 className="text-sm font-bold">Reviews</h1>
                <div className="flex items-center gap-1">
                  <CiStar className="text-accent" />
                  <p>
                    <span>4.9</span> <span> (14 reviews)</span>
                  </p>
                </div>
                <div className="flex gap-2 lg:gap-4">
                  <div className="flex gap-2">
                    <p className="flex h-[30px] w-[30px] items-center rounded-md border border-light px-2 sm:px-3 lg:h-[40px]">
                      <HiOutlineMinus className="inline-block h-[30px]" />
                    </p>
                    <p className="flex h-[30px] w-[60px] items-center justify-center rounded-md border border-light bg-light px-2 sm:px-3 lg:h-[40px] lg:w-[80px]">
                      900
                    </p>
                    <p className="flex h-[30px] w-[30px] items-center rounded-md border border-light px-2 sm:px-3 lg:h-[40px]">
                      <GoPlus className="h-[30px]" />
                    </p>
                  </div>
                  <p className="ml-3 flex h-[40px] items-center justify-center gap-1 rounded-md border border-light bg-accent px-2 py-1 sm:px-4 lg:gap-2">
                    <AiOutlineShoppingCart className="h-[30px] text-black" />
                    <span className="text-xs font-medium">Add To Cart</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-light px-10 py-3">
            <div className="flex items-center gap-2">
              <p className="font-bold">Store Info:</p>
              <img src={Account} className="h-7 w-7 rounded-[100%] bg-accent" />
              <p className="text-xs font-medium">Awesomity Shop 1</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-3">
              <p className="flex h-[40px] items-center justify-center gap-1 rounded-md border border-light px-2 py-1 sm:px-4 lg:gap-2">
                <MdOutlineLocalPhone className="h-[30px] text-accent" />
                <span className="text-xs font-medium">Contact Store</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
