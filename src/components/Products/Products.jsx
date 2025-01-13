import SearchBox from "../../ui/SearchBox";
import ProductHeader from "./ProductHeader";
import ProductItems from "./ProductItems";

function Products() {
  return (
    <div data-aos="fade-up">
      <SearchBox
        data-aos="fade-up"
        name="products"
        titleFirstWrd="Welcome to "
        titleSecondWrd="Mark8"
        quantity="12,932 Products"
        placeholder="What are you looking for?"
      />
      <div className="mx-4 mt-6 sm:mx-8 lg:mx-16">
        <ProductHeader />
        <ProductItems />
      </div>
    </div>
  );
}

export default Products;
