import { useEffect, useRef, useState } from "react";
import {
  FaRegClock,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";

const achievementsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    title: "9-sinf o‘quvchisi viloyat fan olimpiadasida 1-o‘rinni qo‘lga kiritdi",
    date: "12.04.2026",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    title: "Maktab o‘quvchilari matematika tanlovida faxriy diplom bilan taqdirlandi",
    date: "10.04.2026",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    title:
      "Ingliz tili bo‘yicha xalqaro sertifikatni qo‘lga kiritgan o‘quvchilar taqdirlandi",
    date: "08.04.2026",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    title:
      "Sport musobaqalarida maktab jamoasi g‘oliblik sertifikatlarini qo‘lga kiritdi",
    date: "05.04.2026",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram />,
    title: "Instagram sahifamiz",
    link: "https://instagram.com",
    username: "@maktab_official",
  },
  {
    id: 2,
    icon: <FaTelegramPlane />,
    title: "Telegram kanalimiz",
    link: "https://t.me",
    username: "@maktab_kanali",
  },
  {
    id: 3,
    icon: <FaFacebookF />,
    title: "Facebook sahifamiz",
    link: "https://facebook.com",
    username: "Maktab rasmiy sahifasi",
  },
];

function useInView() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default function SchoolSections() {
  const [achievementsRef, achievementsVisible] = useInView();
  const [socialRef, socialVisible] = useInView();

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-5 lg:px-4">
        {/* O‘quvchilar yutuqlari */}
        <div
          ref={achievementsRef}
          className={`mb-12 sm:mb-14 lg:mb-16 transition-all duration-1000 ease-out ${
            achievementsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-start sm:items-center justify-between mb-5 sm:mb-6 gap-3 sm:gap-4">
            <div>
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#1f2937] leading-tight">
                O‘quvchilar yutuqlari
              </h2>
              <p className="text-[13px] sm:text-sm md:text-[15px] text-gray-500 mt-1 border-b pb-1 w-fit">
                Sertifikat va diplom sovrindorlari
              </p>
            </div>

            <button className="text-[#0B3C8A] text-sm sm:text-[15px] font-medium flex items-center gap-1 hover:gap-2 transition-all shrink-0">
              Barchasi →
            </button>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {achievementsData.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white transition-all duration-700 ease-out ${
                  achievementsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[190px] sm:h-[200px] lg:h-[180px] object-cover"
                />

                <div className="p-3 sm:p-4">
                  <h3 className="text-[14px] sm:text-[15px] lg:text-[15px] font-semibold text-[#1f2937] leading-5 sm:leading-6 min-h-[56px] sm:min-h-[72px]">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[#0B3C8A] text-[12px] sm:text-sm mt-2.5 sm:mt-3">
                    <FaRegClock className="text-[12px] sm:text-sm shrink-0" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div
          ref={socialRef}
          className={`transition-all duration-1000 ease-out ${
            socialVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-start sm:items-center justify-between mb-5 sm:mb-6 gap-3 sm:gap-4">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#1f2937] leading-tight">
              Ijtimoiy tarmoqlar
            </h2>

            <button className="text-[#0B3C8A] text-sm sm:text-[15px] font-medium flex items-center gap-1 hover:gap-2 transition-all shrink-0">
              Barchasi →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {socialLinks.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`bg-white border rounded-lg p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:shadow-md transition-all duration-700 group ${
                  socialVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B3C8A] text-white flex items-center justify-center text-lg sm:text-xl shrink-0 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#1f2937] leading-5 sm:leading-6">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-sm text-[#0B3C8A] mt-1 break-all">
                    {item.username}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}