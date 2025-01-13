import ProductCard from "../../ui/ProductCard";
import Account from "../../assets/account.png";
import ProductDetailsCard from "./ProductDetailsCard";

function ProductDetails() {
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
  ];
  return (
    <div className="mx-4 mt-24 sm:mx-8 lg:mx-16">
      <div className="mt-6">
        <ProductDetailsCard />
      </div>
      <div className="mt-6">
        <h1 className="mb-6 font-bold">You might also like</h1>
        <div className="grid grid-cols-custom-1fr-1fr gap-3 xl:grid-cols-custom-1fr-1fr-1fr-1fr">
          {productDeatails.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
