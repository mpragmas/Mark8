import ProductCard from "../../ui/ProductCard";
import SearchSavedBox from "../../ui/SearchSavedBox";
import Account from "../../assets/account.png";

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
function SavedProducts() {
  return (
    <div className="">
      <SearchSavedBox />
      <div className="mx-4 mt-8 sm:mx-8 lg:mx-16">
        <div className="grid grid-cols-custom-1fr-1fr gap-3 xl:grid-cols-custom-1fr-1fr-1fr-1fr">
          {productDeatails.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedProducts;
