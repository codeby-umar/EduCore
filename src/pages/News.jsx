import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Clock, ChevronRight, Search } from "lucide-react";
import Banner from "../components/ui/Banners";

const EventCard = ({ image, views, date, title, description }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="flex flex-col group cursor-pointer"
  >
    <div className="overflow-hidden mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div className="flex items-center gap-6 text-blue-900/70 mb-3 text-sm font-medium">
      <div className="flex items-center gap-1.5">
        <Eye size={18} className="text-blue-800" />
        <span>{views}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock size={18} className="text-blue-800" />
        <span>{date}</span>
      </div>
    </div>

    <h3 className="text-[20px] font-bold text-gray-800 leading-tight mb-3 line-clamp-2 min-h-[3rem]">
      {title}
    </h3>

    <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">
      {description}
    </p>
  </motion.div>
);

const AllEventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const categories = [
    "Barchasi",
    "Senat faoliyati",
    "Xalqaro hamkorlik",
    "Qonunchilik",
  ];

  const allEvents = [
    {
      id: 1,
      image:
        "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/473094522_618701050534273_1491955365733037190_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=TMU1q9OC-aAQ7kNvwFc5EnU&_nc_oc=AdoM0Ps1URFhRxXEwm7jdW4VAbnlN5qvtNKfgi6AWQ4wggPIH2gZIra0ZWvqCDyLxO8&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=hpof14UR69Qe5iAA8gmUWA&_nc_ss=7a389&oh=00_Af2y_jIQOJs7Gu0L2WPGQKetGyWR1d-JOEH42BsspobXcA&oe=69E33B31",
      views: "728",
      date: "13.04.2026",
      category: "Xalqaro hamkorlik",
      title: "Senator xalqaro ilmiy-amaliy konferensiyada ishtirok etdi",
      description:
        "Joriy yilning 13-aprel kuni Oliy Majlis Senatining Fan, ta'lim va sog'liqni saqlash masalalari qo'mitasi a'zolari...",
    },
    {
      id: 2,
      image:
        "https://scontent.ftas6-1.fna.fbcdn.net/v/t39.30808-6/480444462_614926991182337_4456026943396211364_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=R6V0vRbWU08Q7kNvwFkZDCm&_nc_oc=AdpNMOYXhAIQqYOFLzv0_ipV3d1uQcW0TIq1WQGTxIY6Ez186VMBqJKDe33FDSwskKM&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=VVWcv8R4wpy51LUvYEnT8Q&_nc_ss=7a389&oh=00_Af0teaGrMVU6KEs6nD-UNAjhcdsRfyYkJOq1AXUaOlUCew&oe=69E32D48",
      views: "1362",
      date: "10.04.2026",
      category: "Senat faoliyati",
      title: "Senator Sankt-Peterburg shahrida bo'lib o'tgan yig'ilishda",
      description:
        "Joriy yilning 8-9 aprel kunlari Oliy Majlis Senatining Sud-huquq masalalari bo'yicha vakillari muhim kelishuvlarga erishdi...",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
      views: "980",
      date: "09.04.2026",
      category: "Senat faoliyati",
      title: "Hududlarda ijtimoiy islohotlar muhokama qilindi",
      description:
        "Senat a’zolari tomonidan hududlarda amalga oshirilayotgan ijtimoiy loyihalar yuzasidan muhokamalar olib borildi...",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
      views: "1540",
      date: "08.04.2026",
      category: "Qonunchilik",
      title: "Yangi qonun loyihasi ko‘rib chiqildi",
      description:
        "Oliy Majlis Senatida yangi qonun loyihasi muhokamadan o‘tkazilib, bir qator takliflar bildirildi...",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
      views: "870",
      date: "07.04.2026",
      category: "Hamkorlik",
      title: "Xalqaro hamkorlik kengaymoqda",
      description:
        "Xorijiy davlatlar bilan hamkorlik aloqalarini mustahkamlash bo‘yicha muhim kelishuvlarga erishildi...",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      views: "1120",
      date: "06.04.2026",
      category: "Senat faoliyati",
      title: "Senat qo‘mitasi yig‘ilishi bo‘lib o‘tdi",
      description:
        "Sud-huquq masalalari qo‘mitasi tomonidan muhim masalalar yuzasidan yig‘ilish o‘tkazildi...",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      views: "1430",
      date: "05.04.2026",
      category: "Iqtisodiyot",
      title: "Iqtisodiy rivojlanish bo‘yicha yangi tashabbuslar",
      description:
        "Mamlakat iqtisodiyotini rivojlantirish bo‘yicha yangi tashabbuslar ilgari surildi...",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      views: "760",
      date: "04.04.2026",
      category: "Ta'lim",
      title: "Ta'lim tizimida islohotlar davom etmoqda",
      description:
        "Ta’lim sohasida olib borilayotgan islohotlar va ularning natijalari muhokama qilindi...",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      views: "1290",
      date: "03.04.2026",
      category: "Sog'liqni saqlash",
      title: "Sog‘liqni saqlash tizimi takomillashtirilmoqda",
      description:
        "Aholiga tibbiy xizmat ko‘rsatish sifatini oshirish bo‘yicha takliflar bildirildi...",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      views: "640",
      date: "02.04.2026",
      category: "Ekologiya",
      title: "Ekologik muammolar muhokama qilindi",
      description:
        "Atrof-muhitni muhofaza qilish bo‘yicha muhim masalalar Senatda ko‘rib chiqildi...",
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      views: "990",
      date: "01.04.2026",
      category: "Raqamlashtirish",
      title: "Raqamli texnologiyalar joriy etilmoqda",
      description:
        "Davlat boshqaruvida raqamli texnologiyalarni keng joriy etish masalalari muhokama qilindi...",
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      views: "1200",
      date: "31.03.2026",
      category: "Yoshlar siyosati",
      title: "Yoshlar uchun yangi imkoniyatlar yaratilmoqda",
      description:
        "Yoshlarni qo‘llab-quvvatlash va ularning bandligini ta’minlash bo‘yicha yangi dasturlar ishlab chiqildi...",
    },
  ];

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "Barchasi" || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white py-12">
      <Banner children={"Yangliklar sahifasi"} />
      <section className="container py-10 mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-bold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-400 hover:text-gray-600"
                } pb-1`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Qidiruv..."
              className="w-full pl-7 pr-4 py-2 border-b border-gray-200 focus:border-blue-900 outline-none transition-all bg-transparent"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex justify-center items-center gap-4">
          <button className="text-gray-400 font-bold hover:text-blue-900 transition-colors">
            Oldingi
          </button>
          <div className="flex gap-2">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`w-8 h-8 font-bold ${p === 1 ? "text-blue-900" : "text-gray-400"}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="text-blue-900 font-bold flex items-center gap-1">
            Keyingi <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AllEventsPage;
