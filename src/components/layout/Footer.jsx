import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import Logo from "../../../public/icon.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#063a9b]  text-white">
      <div className=" mx-auto container px-4 lg:px-0 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-white/20 pb-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
              src={Logo}
              alt="logo icons"
            />
            <div className="leading-tight">
              <span className="block text-lg sm:text-xl lg:text-2xl font-black text-white uppercase">
                5 - Maktab
              </span>
              <span className="hidden sm:block text-xs sm:text-sm text-white font-medium">
                Rasmiy veb-sayt
              </span>
            </div>
          </Link>

          <div className="flex flex-col xl:flex-row xl:items-center gap-6 w-full lg:w-auto">
            <div className="flex items-center gap-5">
              <a className="icon">
                <FaInstagram />
              </a>
              <a className="icon">
                <FaTelegramPlane />
              </a>
              <a className="icon">
                <FaYoutube />
              </a>
              <a className="icon">
                <FaFacebookF />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-3">
              <input
                type="email"
                placeholder="E-pochtani kiriting"
                className="h-14 w-full sm:w-[320px] bg-transparent border border-white/25 px-5 outline-none placeholder:text-white/70"
              />
              <button className="h-14 px-8 bg-[#4b6cc8] hover:bg-[#5a78cf] transition font-semibold">
                Obuna bo‘lish
              </button>
            </div>
          </div>
        </div>

       
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2026 Barcha huquqlar himoyalangan</p>
          <p>nikename : codeby.umar</p>
        </div>
      </div>
      <style jsx>{`
        .icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          transition: 0.3s;
        }
        .icon:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </footer>
  );
}
