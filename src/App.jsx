import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Store from "./components/Store/Store";
import AppLayout from "./ui/AppLayout";
import SavedProducts from "./components/Products/SavedProducts";
import ProductDetails from "./components/Products/ProductDetails";
import Login from "./components/auth/Login";
import NotFound from "./ui/NotFound";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 200,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return <AppLayout />;

//   return <BrowserRouter>

//   </BrowserRouter>
// }
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="home" element={<Products />} />
          <Route path="Store" element={<Store />} />
          <Route path="products/saved" element={<SavedProducts />} />
          <Route path="products/details" element={<ProductDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
