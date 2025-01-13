import StoreHeader from "../../ui/StoreHeader";
import Account from "../../assets/account.png";
import { CiHeart, CiStar } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { LiaBoxSolid } from "react-icons/lia";

const searchBoxText = [
  { id: 2, name: "Vectors" },
  { id: 3, name: "Icons" },
  { id: 4, name: "Background" },
];
const productDeatails = [
  {
    id: 1,
    name: "product 1",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 2,
    name: "product 2",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 3,
    name: "product 3",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
];

function StoreItem() {
  return (
    <div className="mx-4 mt-6 rounded-2xl border border-light px-4 py-2 sm:mx-8 lg:mx-16">
      <div className="flex justify-between">
        <StoreHeader name="awesomity" numProd="134 Products" img={Account} />
        <div className="flex items-center gap-1 sm:gap-3">
          <p className="flex items-center justify-center gap-2 rounded-xl bg-accent px-2 py-1 sm:px-4">
            <VscAccount className="h-8" />
            <span className="text-xs font-medium">View Profile</span>
          </p>
          <p className="rounded-md border-2 border-light p-1 sm:p-2">
            <AiOutlineShoppingCart />
          </p>
          <p className="rounded-md border-2 border-light p-1 sm:p-2">
            <CiHeart />
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-14 lg:grid-cols-custom-40-60">
        <div>
          <div className="space-y-4">
            <h1 className="text-sm font-bold">About</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              perspiciatis quam dicta numquam voluptates placeat deserunt veniam
            </p>
            <h1 className="text-sm font-bold">Categories</h1>
            <div className="mt-3 space-x-3 text-light">
              {searchBoxText.map((text) => (
                <p
                  key={text.id}
                  className="inline-block cursor-pointer rounded-xl border border-light px-3 py-1 text-xs text-lightDark"
                >
                  {text.name}
                </p>
              ))}
            </div>
            <h1 className="text-sm font-bold">Reviews</h1>
            <div className="flex items-center gap-1">
              <CiStar className="text-accent" />
              <p>
                <span>4.9</span> <span> (14 reviews)</span>
              </p>
            </div>
          </div>
          <p className="mt-14 flex w-[180px] items-center justify-center gap-1 rounded-md border border-light px-4 py-2">
            <LiaBoxSolid size={20} className="text-accent" />
            <span className="text-sm font-medium">Explore Products</span>
          </p>
        </div>
        {/* item */}
        <div className="grid grid-cols-custom-1fr-1fr gap-1 sm:gap-3 xl:grid-cols-custom-1fr-1fr-1fr">
          {productDeatails.map((item) => (
            <div
              key={item.id}
              className="w-full overflow-hidden rounded-lg border border-light"
            >
              <img
                src={item.img}
                alt=""
                className="h-[60%] w-full bg-accent sm:h-[80%]"
              />
              <div className="flex items-center justify-between gap-5 p-2">
                <div className="space-y-1">
                  <p className="text-xs">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-accent">{item.price}</p>
                    <p className="text-xs text-lightDark line-through">
                      {item.normalPrice}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="rounded-md border-2 border-light p-1 sm:p-2">
                    <CiHeart />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
