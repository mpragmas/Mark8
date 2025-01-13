import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import OpenYourStore from "./OpenYourStore";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <OpenYourStore />
      <Footer />
    </>
  );
}

export default AppLayout;
