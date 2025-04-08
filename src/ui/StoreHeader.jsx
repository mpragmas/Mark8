import { MdOutlineChevronRight } from "react-icons/md";
import { useShop } from "../components/Products/useShop";

function StoreHeader({ item }) {
  const { id, name } = item;
  const { data: shop } = useShop(id);

  //console.log(shop);

  return (
    <li className="flex items-center gap-2 md:gap-5">
      <img
        src="../../assets/account.png"
        className="h-[50px] w-[50px] rounded-xl bg-accent bg-cover"
      />
      <div className="flex items-center md:space-x-14 lg:space-x-14 xl:space-x-28">
        <div>
          <h1 className="text-sm font-medium">{name}</h1>
          <p className="text-xs text-lightDark">
            {shop?.data.products?.length} products
          </p>
        </div>
        <p className="hidden lg:block">
          <MdOutlineChevronRight />
        </p>
      </div>
    </li>
  );
}

export default StoreHeader;
