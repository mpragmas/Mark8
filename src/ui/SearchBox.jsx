import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { useProducts } from "../components/Products/useProducts";

const searchBoxText = [
  { id: 1, name: "All" },
  { id: 2, name: "Vectors" },
  { id: 3, name: "Icons" },
  { id: 4, name: "Background" },
];

function SearchBox({
  name,
  titleFirstWrd,
  titleSecondWrd,
  quantity,
  placeholder,
}) {
  const { data } = useProducts();

  const products = data?.data.document;

  const categories = [...new Set(products?.map((product) => product.category))];

  console.log(categories);

  return (
    <div
      className={`mx-4 mt-20 rounded-2xl ${name === "products" ? "bg-dark" : "bg-[#F7F8FB]"} p-4 text-center sm:mx-8 sm:mt-24 sm:p-6 lg:mx-16`}
    >
      <div className="">
        <h1
          className={`text-xl font-bold ${name === "products" ? "text-white" : "text-dark"}`}
        >
          {name === "products" && (
            <>
              {titleFirstWrd}
              <span className="text-accent">{titleSecondWrd}</span>
            </>
          )}
          {name === "store" && (
            <>
              <span className="text-accent">{titleFirstWrd}</span>
              {titleSecondWrd}
            </>
          )}
        </h1>

        <p className={`${name === "products" ? "text-white" : "text-dark"}`}>
          {quantity}
        </p>
      </div>
      <div className="relative mx-auto mt-5 flex max-w-[12rem] sm:max-w-[20rem] lg:max-w-[29rem]">
        <input
          placeholder={placeholder}
          className={`rounded-md ${name === "products" ? "bg-[#2b3240] sm:placeholder-light" : "bg-light sm:placeholder-lightDark"} px-4 py-1 placeholder-transparent focus:outline-none sm:w-[300px] sm:px-8 sm:py-2 lg:w-[500px]`}
        />
        <IoSearch
          size={20}
          className="absolute left-2 top-1/2 -translate-y-1/2 transform text-[#a3d900]"
        />
        <LuSettings2
          size={20}
          className="absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 transform sm:right-6 lg:right-4"
          style={{ color: "white" }}
        />
      </div>
      <div className="mt-3 hidden space-x-3 text-lightDark md:block">
        <p className="inline-block cursor-pointer rounded-xl border border-[#495D69] px-3 py-1 text-xs hover:border-light active:border-light">
          All
        </p>
        {categories.length === 0
          ? ""
          : categories?.map((text) => (
              <p
                key={text}
                className="inline-block cursor-pointer rounded-xl border border-[#495D69] px-3 py-1 text-xs hover:border-light active:border-light"
              >
                {text}
              </p>
            ))}
      </div>
    </div>
  );
}

export default SearchBox;
