import { HiOutlineLogout } from "react-icons/hi";
import Account from "../assets/account.png";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHeadsetFill } from "react-icons/pi";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { NavLink } from "react-router-dom";

const profileNav = [
  {
    id: 1,
    icon: <VscAccount />,
    name: "My Account",
  },
  {
    id: 2,
    icon: <AiOutlineShoppingCart />,
    name: "My Orders",
  },
  {
    id: 3,
    icon: <PiHeadsetFill />,
    name: "help",
  },
  {
    id: 4,
    icon: <RiErrorWarningLine />,
    name: "About",
  },
  {
    id: 5,
    icon: <IoSettingsOutline />,
    name: "Settings",
  },
];

function AccountNav({ handleShowProfileNav }) {
  const ref = useOutsideClick(handleShowProfileNav);
  return (
    <div
      ref={ref}
      data-aos="fade-left"
      className="account absolute right-0 top-14 z-30 w-[260px] rounded-lg bg-white shadow-lg md:right-1 lg:-right-6"
    >
      <div className="flex items-center gap-3 px-3 lg:px-5 lg:py-6">
        <img src={Account} className="h-[50px] w-[50px] bg-[#C1CF167A]" />
        <div>
          <h1 className="text-sm">Yves Honnore B.</h1>
          <p className="text-sm text-lightDark">yveshonnore@examaple.rw</p>
        </div>
      </div>
      <div className="ml-3 mt-3 w-[90%] border border-b border-light lg:ml-5 lg:mt-1"></div>

      <div className="space-y-4 px-5 py-6">
        {profileNav.map((el) => (
          <NavLink key={el.id} className="flex items-center gap-2">
            {el.icon}
            <span>{el.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="mb-6 ml-5 w-[90%] border border-b border-light"></div>

      <a className="mb-4 flex items-center gap-2 px-5">
        <HiOutlineLogout />
        <span>Logout</span>
      </a>
    </div>
  );
}

export default AccountNav;
