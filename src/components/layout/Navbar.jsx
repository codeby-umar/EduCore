import Logo from "../../../public/icon.svg";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { BiLogIn } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";


function Navbar() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const weekdays = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
      ];

      const months = [
        "yanvar",
        "fevral",
        "mart",
        "aprel",
        "may",
        "iyun",
        "iyul",
        "avgust",
        "sentyabr",
        "oktyabr",
        "noyabr",
        "dekabr",
      ];

      const dayName = weekdays[now.getDay()];
      const day = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      const clock = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const date = `${dayName}, ${day}-${month}, ${year}`;
      setTime(`${clock} | ${date} (GMT+5)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative font-semibold transition duration-300 ${
      isActive
        ? "text-[#0B3C8A] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#0B3C8A]"
        : "text-gray-700 hover:text-[#0B3C8A]"
    }`;

  return (
    <header className="w-full">
      <div className="w-full bg-[#0B3C8A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="font-medium hidden md:block text-sm sm:text-base text-center md:text-left">
            {time}
          </span>

          <div className="hidden md:block">
            <div className="flex flex-wrap  items-center justify-center md:justify-end gap-3 sm:gap-5">
              <span className="text-sm  sm:text-base font-semibold hidden sm:block">
                Ijtimoiy tarmoqlar:
              </span>

              <a
                href="#"
                className="hover:text-white/80 transition bg-white/10 p-2 rounded-full"
              >
                <FaFacebookF className="text-white" size={15} />
              </a>
              <a
                href="#"
                className="hover:text-white/80 transition bg-white/10 p-2 rounded-full"
              >
                <SiTelegram className="text-white" size={15} />
              </a>
              <a
                href="#"
                className="hover:text-white/80 transition bg-white/10 p-2 rounded-full"
              >
                <AiFillInstagram className="text-white" size={17} />
              </a>
              <a
                href="#"
                className="hover:text-white/80 transition bg-white/10 p-2 rounded-full"
              >
                <FaYoutube className="text-white" size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            <div className="flex items-center gap-3 min-w-0">
              <Link to="/" className="flex items-center gap-3">
                <img
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                  src={Logo}
                  alt="logo icons"
                />
                <div className="leading-tight">
                  <span className="block text-lg sm:text-xl lg:text-2xl font-black text-gray-800 uppercase">
                    5 - Maktab
                  </span>
                  <span className="hidden sm:block text-xs sm:text-sm text-gray-500 font-medium">
                    Rasmiy veb-sayt
                  </span>
                </div>
              </Link>
            </div>

            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Bosh Sahifa
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  Biz haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className={navLinkClass}>
                  Yangiliklar
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={navLinkClass}>
                  Galereya
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Bog&apos;lanish
                </NavLink>
              </li>
            </ul>

            <div className="hidden lg:block">
              <Link
                to="/login"
                className="flex items-center text-[#0B3C8A] font-semibold border border-[#0B3C8A]/20 px-4 py-2.5 rounded-md gap-2 hover:bg-[#0B3C8A] hover:text-white transition duration-300"
              >
                Tizimga kirish
                <BiLogIn size={24} />
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-cente  text-[#0B3C8A]"
            >
              { <CgMenuRightAlt size={30} />}
            </button>
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          />

          <div
            className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#0B3C8A]">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { to: "/", label: "Bosh sahifa" },
                  { to: "/about", label: "Biz haqimizda" },
                  { to: "/news", label: "Yangiliklar" },
                  { to: "/gallery", label: "Galereya" },
                  { to: "/contact", label: "Bog‘lanish" },
                ].map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={'px-4 py-3 rounded-lg font-medium transition-all duration-200'}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full mt-6 bg-[#0B3C8A] text-white py-3 rounded-lg font-semibold hover:bg-[#092f6c] transition"
                >
                  Tizimga kirish
                  <BiLogIn size={20} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
