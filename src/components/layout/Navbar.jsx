import Logo from "../../../public/icon.svg";
import { useState, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { BiLogIn } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import { NavLink, Link } from 'react-router-dom';
import { X, ChevronRight, Globe, Phone } from 'lucide-react';


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
            className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-all duration-500 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          />

          {/* Menu Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-[85%] sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out border-r border-slate-100 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full bg-white">
              
              {/* Yuqori qism - Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#fcfcfc]">
                <div className="flex flex-col">
                  <h2 className="text-sm font-black text-blue-900 uppercase tracking-widest">5 - maktab</h2>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Rasmiy website</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-slate-50 text-slate-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menyu elementlari */}
              <div className="flex-grow py-6 px-4 overflow-y-auto">
                <nav className="flex flex-col gap-1">
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
                      className={({ isActive }) => `
                        group flex items-center justify-between px-5 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all duration-300
                        ${isActive 
                          ? "bg-blue-50 text-blue-900 border-l-4 border-blue-900" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-blue-900"
                        }
                      `}
                    >
                      {item.label}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </NavLink>
                  ))}
                </nav>

                {/* Yordamchi ma'lumotlar (Senat saytlari kabi) */}
                <div className="mt-10 pt-10 border-t border-slate-100 px-5">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-500">
                      <Phone size={16} className="text-blue-800" />
                      <span className="text-xs font-bold">+998 (--) --- -- --</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-500">
                      <Globe size={16} className="text-blue-800" />
                      <span className="text-xs font-bold text-blue-800 underline underline-offset-4 cursor-pointer">O'zbekcha (UZ)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pastki qism - Tizimga kirish */}
              <div className="p-6 bg-[#fcfcfc] border-t border-slate-100">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-blue-900 text-white py-4 rounded-sm text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-lg shadow-blue-900/20 active:scale-95"
                >
                  Tizimga kirish
                  <BiLogIn size={18} />
                </Link>
                <p className="text-center text-[9px] text-slate-400 font-bold uppercase mt-6 tracking-[0.1em]">
                  5-maktab portal © 2026
                </p>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
