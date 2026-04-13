import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import Banners from "../components/ui/Banners";

const GalleryCarousel = () => {
  const sliderImages = [
    {
      uuid: "1",
      url: "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/480627549_614926987849004_2092682579397340410_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=6wizL33Uy1MQ7kNvwE3jLsA&_nc_oc=AdrXFgWbUIUOMjA7VuEpLXWevJDkG_EkNw7S0E8TFuKs9MU5RzrdVgwBSD0RSoSoqQI&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=8NUubnt_J-Konl_K2_zRHg&_nc_ss=7a389&oh=00_Af11HARGkI3-YYt4uvSrqJ2UKbViokQgKZq1rX1bsE32dw&oe=69E33096",
      alt: "Tabiat manzarasi",
    },
    {
      uuid: "2",
      url: "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/481079428_613664121308624_919350878470941149_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=dJJh2Mo7JkAQ7kNvwHCoc8I&_nc_oc=AdpfidSfXfFGI7ydjwVbE1c62990FJCltKxH4rLtEiJWEmcJA_iYjRNeWHg7xGddtOA&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=8CurFiyVb0kPkRYkAF7t7g&_nc_ss=7a389&oh=00_Af2h0Qp57k2eDGkUrtfi6bfNerO6N2JFN4V79io0965abg&oe=69E34698",
      alt: "Arxitektura",
    },
    {
      uuid: "3",
      url: "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/473078733_618704383867273_4790225251569726490_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=3ume0RmW8LwQ7kNvwEvUX0V&_nc_oc=Adp9ZN42ORawxJvxl2VmOBa1CtZKluxXSlZGkewr-ULcgGNsGljJFZrNJ-WNZ4sJeCM&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=E8pftgsBPmKN79e_UT6bPg&_nc_ss=7a389&oh=00_Af2lkYPzjZUp0aFtBQ0Gi6tebRulaA91sh_Ykk6bRPrIwQ&oe=69E32508",
      alt: "Texnologiya",
    },
    {
      uuid: "4",
      url: "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/473090878_618702123867499_4916462116770479308_n.jpg?stp=dst-jpg_p590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=RavF8pP5UmEQ7kNvwFIMTv9&_nc_oc=AdqekHj-r_ESC16rZ_UwH0ckD-iMaYyNh7lUsUexqDduzC3rK_BSDKjhdA6EDnQczYo&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=mDSumiEXl5QgK03MUqlg4A&_nc_ss=7a389&oh=00_Af2I4e5HP58VZOL8lFLzfgcwi67hTyWZ7_vA6I3QBm0mZg&oe=69E32382",
      alt: "Dizayn",
    },
    {
      uuid: "5",
      url: "https://scontent.ftas6-1.fna.fbcdn.net/v/t39.30808-6/473043666_618702007200844_2304651765359270482_n.jpg?stp=dst-jpg_p590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=NXO60vIe9H8Q7kNvwGiMaVL&_nc_oc=Adq7aNJ5Gv6J7t8W8MAcZCyHecx0Dm-3QP0OVxtw5bdYM8puQDPXqy3GItS_Q_W4k_w&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=mDSumiEXl5QgK03MUqlg4A&_nc_ss=7a389&oh=00_Af3aUJJZmNBrY4qBNmsaMPzPGLTLu_DbhdZNN8QrLHKu7Q&oe=69E31C16",
      alt: "San'at",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  return (
    <div>
      <Banners children={'Gallery sahifasi'} />
      <div className="container  px-4 py-8">
        <div
          className="relative group w-full aspect-4/5 sm:aspect-video md:aspect-21/9] rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full h-full">
            {sliderImages.map((img, index) => (
              <div
                key={img.uuid}
                className={`absolute inset-0 transition-all ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  index === currentIndex
                    ? "opacity-100 scale-100 z-10 visible"
                    : "opacity-0 scale-110 z-0 invisible"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>

          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="p-4 rounded-full bg-white/10 hover:bg-red-600 border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 pointer-events-auto opacity-0 group-hover:opacity-100 hidden md:block shadow-lg"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={goToNext}
              className="p-4 rounded-full bg-white/10 hover:bg-red-600 border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 pointer-events-auto opacity-0 group-hover:opacity-100 hidden md:block shadow-lg"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full px-4 flex justify-center">
            <div className="flex items-center gap-3 p-2.5 bg-black/30 backdrop-blur-2xl rounded-2xl border border-white/10 max-w-[95%] overflow-x-auto no-scrollbar">
              {sliderImages.map((img, index) => (
                <button
                  key={`thumb-${img.uuid}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative shrink-0 transition-all duration-500 rounded-xl overflow-hidden ${
                    currentIndex === index
                      ? "w-16 h-12 md:w-24 md:h-16 ring-2 ring-white scale-105 shadow-2xl"
                      : "w-12 h-10 md:w-20 md:h-14 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.url}
                    alt="mini-thumb"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-3 md:hidden">
          <div className="flex gap-2">
            {sliderImages.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-10 bg-red-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-gray-500 tracking-widest">
            {currentIndex + 1} / {sliderImages.length}
          </span>
        </div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                className="h-64 w-full object-cover"
                src="https://scontent.ftas6-1.fna.fbcdn.net/v/t39.30808-6/480569551_614926971182339_4683767454657930970_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=GOD6EMOfkp4Q7kNvwESrKvS&_nc_oc=AdrifGPf4VQqQ1cyElsc7IAqnvfsFiP5FTEUHI3Gn8w65xNreyASu0HfQeASe8-QXQk&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=7_smWj0_CLbdU6rlkL9bgQ&_nc_ss=7a389&oh=00_Af1K5YrmrAL2C7BPBfMNpCRqsrbIP6yJNtCzo7U1HrN7rQ&oe=69E34912"
                alt="Rasm 1"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                className="h-64 w-full object-cover"
                src="https://scontent.ftas6-1.fna.fbcdn.net/v/t39.30808-6/480569551_614926971182339_4683767454657930970_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=GOD6EMOfkp4Q7kNvwESrKvS&_nc_oc=AdrifGPf4VQqQ1cyElsc7IAqnvfsFiP5FTEUHI3Gn8w65xNreyASu0HfQeASe8-QXQk&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=7_smWj0_CLbdU6rlkL9bgQ&_nc_ss=7a389&oh=00_Af1K5YrmrAL2C7BPBfMNpCRqsrbIP6yJNtCzo7U1HrN7rQ&oe=69E34912"
                alt="Rasm 2"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                className="h-64 w-full object-cover"
                src="https://scontent.ftas6-1.fna.fbcdn.net/v/t39.30808-6/480569551_614926971182339_4683767454657930970_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=GOD6EMOfkp4Q7kNvwESrKvS&_nc_oc=AdrifGPf4VQqQ1cyElsc7IAqnvfsFiP5FTEUHI3Gn8w65xNreyASu0HfQeASe8-QXQk&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=7_smWj0_CLbdU6rlkL9bgQ&_nc_ss=7a389&oh=00_Af1K5YrmrAL2C7BPBfMNpCRqsrbIP6yJNtCzo7U1HrN7rQ&oe=69E34912"
                alt="Rasm 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
