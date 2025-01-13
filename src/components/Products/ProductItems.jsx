import { RiStoreLine } from "react-icons/ri";
import Account from "../../assets/account.png";

import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import StoreHeader from "../../ui/StoreHeader";

import ProductCard from "../../ui/ProductCard";

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
  {
    id: 4,
    name: "product 4",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 5,
    name: "product 5",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 6,
    name: "product 6",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 7,
    name: "product 7",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 8,
    name: "product 8",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 9,
    name: "product 9",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 10,
    name: "product 10",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 11,
    name: "product 10",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
  {
    id: 12,
    name: "product 10",
    price: "9,000 Rwf",
    normalPrice: "12,000 Rwf",
    img: Account,
  },
];

const topStore = [
  {
    id: 1,
    name: "Awesome Shop 1",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 2,
    name: "Awesome Shop 2",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 3,
    name: "Awesome Shop 3",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 4,
    name: "Awesome Shop 4",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 5,
    name: "Awesome Shop 5",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 6,
    name: "Awesome Shop 6",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 7,
    name: "Awesome Shop 7",
    img: Account,
  },
  {
    id: 8,
    name: "Awesome Shop 8",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 9,
    name: "Awesome Shop 9",
    numProd: "134 Products",
    img: Account,
  },
  {
    id: 10,
    name: "Awesome Shop 10",
    numProd: "134 Products",
    img: Account,
  },
];

function ProductItems() {
  return (
    <div className="mt-5 grid grid-cols-custom-1fr gap-3 sm:grid-cols-custom-75-25">
      <div>
        <div className="grid grid-cols-custom-1fr-1fr gap-3 xl:grid-cols-custom-1fr-1fr-1fr">
          {productDeatails.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <p className="mx-auto mt-4 flex w-[150px] items-center justify-center gap-1 rounded-md border border-light px-4 py-2">
          <IoIosArrowDown size={20} className="text-accent" />
          <span className="text-sm font-medium">Load more</span>
        </p>
      </div>

      <div className="hidden rounded-lg border border-light sm:block sm:w-[200px] md:w-[250px] lg:w-full">
        <div className="mb-2 flex justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <RiStoreLine className="text-accent" />
            <p>Top 10 Stores</p>
          </div>
          <BiLinkExternal />
        </div>
        <div className="mt-6 flex h-[80px] items-center bg-light">
          <div className="relative">
            <input
              placeholder="Search a store"
              className="mx-2 rounded-md bg-white px-2 py-1 placeholder-transparent focus:outline-none sm:w-[170px] sm:px-6 sm:py-2 sm:placeholder-light md:w-[220px] lg:mx-5 lg:w-[300px]"
            />
            <IoSearch
              size={16}
              className="absolute top-1/2 -translate-y-1/2 transform text-dark sm:left-3 lg:left-6"
            />
            <LuSettings2
              size={16}
              className="absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 transform sm:right-3 lg:right-8"
              style={{ color: "black" }}
            />
          </div>
        </div>
        <div className="mt-5 w-full pl-2 sm:pl-3 lg:pl-6">
          <ul className="space-y-5">
            {topStore.map((item) => (
              <StoreHeader
                key={item.id}
                name={item.name}
                numProd={item.numProd}
                img={item.img}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
