import { SlSocialLinkedin } from "react-icons/sl";
import Logo from "../assets/logo.png";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className="mt-10 bg-light px-4 py-2 sm:px-8 lg:px-16 lg:py-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="h-[40px]" />
          <h1 className="font-bold text-dark">Mark8</h1>
        </div>
        <div>&copy;2024. Mark8 By Awesomity Ltd</div>
        <div className="flex items-center gap-2 sm:justify-center">
          <a href="#">
            <FaXTwitter className="h-4" />
          </a>
          <a href="#">
            <FaInstagram className="h-4" />
          </a>
          <a href="#">
            <FiYoutube className="h-5" />
          </a>
          <a href="#">
            <SlSocialLinkedin className="h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
