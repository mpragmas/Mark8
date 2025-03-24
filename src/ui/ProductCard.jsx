import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

function ProductCard({ item }) {
  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-lg border border-light">
      <img
        src={item.img}
        alt=""
        className="w-full bg-[#FFFFFF] text-[#FFFFFF]"
      />
      <div className="flex items-center justify-between gap-5 p-2">
        <div className="space-y-2">
          <p className="text-xs">{item.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-accent">
              {item.discountPrice ? item.discountPrice : item.price}
            </p>
            <p className="text-xs text-lightDark line-through">{item.price}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-3">
          <p className="rounded-md border-2 border-light p-1 sm:p-2">
            <AiOutlineShoppingCart />
          </p>
          <p className="rounded-md border-2 border-light p-1 sm:p-2">
            <CiHeart
              onClick={() => {
                console.log(" im clicked");
                console.log(getProducts());
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
