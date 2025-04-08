import ProductCard from "../../ui/ProductCard";
import SearchSavedBox from "../../ui/SearchSavedBox";
import Account from "../../assets/account.png";
import { useSelector } from "react-redux";
import { getSaved } from "./savedSlice";

function SavedProducts() {
  const saved = useSelector(getSaved);

  console.log(saved);

  return (
    <div className="">
      <SearchSavedBox saved={saved} />
      <div className="mx-4 mt-8 sm:mx-8 lg:mx-16">
        <div className="grid grid-cols-custom-1fr-1fr gap-3 xl:grid-cols-custom-1fr-1fr-1fr-1fr">
          {saved.length === 0 ? (
            <p>No saved products😥</p>
          ) : (
            saved.map((item) => <ProductCard key={item.itemId} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedProducts;
