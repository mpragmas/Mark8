import SearchBox from "../../ui/SearchBox";
import StoreItem from "./StoreItem";

function Store() {
  return (
    <div>
      <SearchBox
        name="store"
        titleFirstWrd="Mark8 "
        titleSecondWrd="Stores"
        quantity="54 Stores"
        placeholder="Search Store"
      />
      <StoreItem />
    </div>
  );
}

export default Store;
