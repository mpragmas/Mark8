import ProductCard from "../../ui/ProductCard";
import Account from "../../assets/account.png";
import StoreHeader from "../../ui/StoreHeader";
import { RiStoreLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import { useProducts } from "./useProducts";
import { useShops } from "./useShops";
import { useShop } from "./useShop";

function ProductItems() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function loadProducts() {
  //     const data = await fetchProducts();
  //     setProducts(data.data.document);
  //     setLoading(false);
  //   }
  //   loadProducts();
  // }, []);

  // console.log(products);

  const { isLoading: isLoadingProducts, data: product } = useProducts();
  const { isLoading: isLoadingShops, data: allShops } = useShops();

  const products = product?.data.document;
  const shops = allShops?.data.document;

  //console.log(shops);

  if (isLoadingProducts) return <p>Loading...</p>;
  if (isLoadingShops) return <p>Loading...</p>;

  if (products?.length === 0)
    return <p className="text-center">No products found 😭</p>;

  return (
    <div className="mt-5 grid grid-cols-custom-1fr gap-3 sm:grid-cols-custom-75-25">
      <div>
        <div className="grid grid-cols-custom-1fr-1fr gap-3 xl:grid-cols-custom-1fr-1fr-1fr">
          {products?.map((item) => (
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
            {shops.map((item) => (
              <StoreHeader key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
