// import { useState } from "react";
// import NavBar from "../ui/NavBar";
// import SearchPopup from "../ui/SearchPopup";
// import SearchBox from "../ui/SearchBox";
// import Products from "./Products";
// import OpenYourStore from "../ui/OpenYourStore";
// import Footer from "../ui/Footer";
// import StoreDetails from "./StoreDetails";
// import Cart from "./Cart";

// function AppLayout() {
//   const [showSearchPopup, setShowSearchPopup] = useState(false);
//   const [showCartPopup, setShowCartPopup] = useState(false);

//   function handleshowSearchPopup() {
//     setShowSearchPopup((show) => !show);
//   }

//   function handleShowCartPopup() {
//     setShowCartPopup((show) => !show);
//   }

//   return (
//     <div>
//       <NavBar
//         setShowSearchPopup={setShowSearchPopup}
//         setShowCartPopup={setShowCartPopup}
//       />
//       <SearchPopup
//         showSearchPopup={showSearchPopup}
//         handleshowSearchPopup={handleshowSearchPopup}
//       />
//       <Cart
//         showCartPopup={showCartPopup}
//         handleShowCartPopup={handleShowCartPopup}
//       />
//       <SearchBox />
//       <Products />
//       {/* <StoreDetails /> */}
//       <OpenYourStore />
//       <Footer />
//     </div>
//   );
// }

// export default AppLayout;
