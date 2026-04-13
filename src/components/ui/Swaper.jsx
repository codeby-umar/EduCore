import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://scontent.ftas7-1.fna.fbcdn.net/v/t1.6435-9/155477977_267328924987199_2098320705901993313_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=hclRkn6QNgEQ7kNvwGP6PGY&_nc_oc=AdpXUk6vRskL0SLSdMb-ULQ1NiNPl-Z98Mqe6n0XqRV7vMZ83sluFeKqyW8DXdvIg5Q&_nc_zt=23&_nc_ht=scontent.ftas7-1.fna&_nc_gid=Rs1VtfGlcoEXzLC1KJEqsg&_nc_ss=7a389&oh=00_Af3JT_uOYNhDe2YS_7bFkoPiYXG-sItqV07JyjkXfkMGNQ&oe=6A04C7FF",
    title:
      "Fizika fani o'qituvchisi Xolmatova Muhlisaxonning 8-B sinfida  fizika fanidan o'tgan ochiq darsidan foto lavhalar",
    date: "10.04.2026",
  },
  {
    id: 2,
    image:
      "https://scontent.ftas6-1.fna.fbcdn.net/v/t39.30808-6/470667623_602747695462942_2321091963901786279_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=i9Im2M0OYd8Q7kNvwELy5V6&_nc_oc=AdpWAd3eMkbTwv66pk_Jj-51mOrnAN2xdH-AJ-PXlBh_04linYSNItFguFbT1CgYofI&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=7rH-VEV1QMBYKIeJ3UEcuw&_nc_ss=7a389&oh=00_Af3JH00uLKOEbvAV6GfF5VxxFjkO82PD3Bvi4iOJEjGUMw&oe=69E31C1A",
    title:
      "Xoʻjaobod tumani 5 - umumtaʼlim maktabida chorshanba chet tillari kuni munosabati bilan oʻtkazilgan tadbirdan fotolavhalar.",
    date: "11.04.2026",
  },
  {
    id: 3,
    image:
      "https://scontent.ftas7-1.fna.fbcdn.net/v/t39.30808-6/473187434_618068357264209_4855772931088914332_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=83Fi7qaZM10Q7kNvwF_xolS&_nc_oc=AdrNGGJUomlXqGBctJ20Ppt987O8pvwAyJdppsXiH0oQrNyK3zfg5Pl5VF8qu2ALcmw&_nc_zt=23&_nc_ht=scontent.ftas7-1.fna&_nc_gid=DLoHbhMQsxdvfJbkreJvnQ&_nc_ss=7a389&oh=00_Af0kzluS387Bptw94ObbGWdCUcXVihMTRzp1vJqQdNVmzQ&oe=69E31878",
    title: "Xotira va qadrlash kuni munosabati bilan faxriy ustoz Oxunjonova Maxfuzaopa xonadoniga  A. Umarova bilan B. Ma'murova tashrifidan lavhalar.",
    date: "12.04.2026",
  },
  {
    id: 4,
    image:
      "https://scontent.ftas7-1.fna.fbcdn.net/v/t39.30808-6/473331808_618699033867808_4856734584128899242_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=MqQ0g-1ofYgQ7kNvwHVDWVu&_nc_oc=AdpuztvJDeu0fgr-G_ypt1eEjbuzVjpyzDN2buspaVs7_EUAHbKjV4lVS8cvmrsLXO0&_nc_zt=23&_nc_ht=scontent.ftas7-1.fna&_nc_gid=fMoPq6uLsSeR3kJXEomr3w&_nc_ss=7a389&oh=00_Af2jWfslCx_CcuszMM21dRLpBnST-aB_C5mtYAl6q5pHSQ&oe=69E32F74",
    title: "Xo'jaobod tumani 5-umumiy o'rta ta'lim maktabida Xorijiy tillar fan oyligi munosabati bilan o'tkazilgan tadbirdan fotolavhalar.",
    date: "13.04.2026",
  },
  {
    id: 5,
    image:
      "https://scontent.ftas7-1.fna.fbcdn.net/v/t39.30808-6/473044745_618701097200935_8207847049995157791_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=f42lBHUSEPUQ7kNvwGiD07U&_nc_oc=AdpQS3yUu_Uf6uEKBgo8XoCIPY7QAIHDriqwg1KU2z4TNsyHOPR4qHOdghMaUfPIdPE&_nc_zt=23&_nc_ht=scontent.ftas7-1.fna&_nc_gid=5bUPzSzOQqnv7hlH4RKeUw&_nc_ss=7a389&oh=00_Af24PfrhEffYjoHLlq0SY_ovuTiomZq8YJ6NdRDqW69odg&oe=69E3132B",
    title: "5-umumiy o'rta ta'lim maktabida xorijiy tillar fan oyligi munosabati bilan o'tkaxilgan tadbirdan fotolavhalar.",
    date: "14.04.2026",
  },
];

export default function Swaper() {
  return (
    <div className="w-full container bg-white">
      <div className="mx-auto w-full px-4 py-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop
            speed={900}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-65 w-full sm:h-90 md:h-125 lg:h-130 xl:h-155">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#003A99]/95 via-[#003A99]/55 to-transparent sm:h-[55%] md:h-[48%]" />

                  <div className="absolute bottom-0 left-0 z-10 w-full px-4 pb-10 sm:px-6 sm:pb-12 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
                    <h2 className="container text-sm font-bold leading-[1.35] text-white sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-4xl">
                      {slide.title}
                    </h2>

                    <div className="mt-4 flex items-center gap-2 text-white/90 sm:mt-5 sm:gap-3">
                      <FiClock className="shrink-0 text-[18px] sm:text-[20px] md:text-[24px]" />
                      <span className="text-sm font-medium sm:text-base md:text-lg">
                        {slide.date}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition hover:bg-white/35 sm:left-5 sm:h-12 sm:w-12 md:left-8 md:h-14 md:w-14">
            <FiChevronLeft className="text-xl sm:text-2xl md:text-4xl" />
          </button>

          <button className="custom-next absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition hover:bg-white/35 sm:right-5 sm:h-12 sm:w-12 md:right-8 md:h-14 md:w-14">
            <FiChevronRight className="text-xl sm:text-2xl md:text-4xl" />
          </button>

          <div className="custom-pagination absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-5 sm:gap-3 md:bottom-6" />
        </div>
      </div>

      <style>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.45);
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background: white;
          transform: scale(1.15);
        }

        @media (min-width: 640px) {
          .custom-bullet {
            width: 12px;
            height: 12px;
          }
        }

        @media (min-width: 768px) {
          .custom-bullet {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </div>
  );
}