import React from 'react';
import { motion } from 'framer-motion';
import Banner from "../components/ui/Banners";
import { Users, Award, BookOpen, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Banner children={'Biz haqimizda'} />

      {/* 1. Rasmiy Kirish Section */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-10 tracking-tight text-slate-900"
            >
              Andijon viloyati Xo'jaobod tumani <br />
              <span className="text-blue-800">5-umumiy o'rta ta'lim maktabi</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-blue-800/10 pl-6"
            >
              Muassasamiz ko'p yillik boy tarix va akademik an'analarga tayangan holda, 
              o'quvchilarga xalqaro standartlar darajasida ta'lim berishni maqsad qilgan. 
              Biz intellektual salohiyat va ma'naviy yuksaklik uyg'unligiga ishonamiz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Statistik Ma'lumotlar (Grid jiddiy ko'rinishda) */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { label: "O'quvchilar soni", value: "824", icon: Users },
              { label: "Malakali pedagoglar", value: "62", icon: GraduationCap },
              { label: "Zamonaviy sinfxonalar", value: "34", icon: BookOpen },
              { label: "Yutuqlar va medallar", value: "150+", icon: Award }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="p-8 md:p-12 border-r border-slate-100 last:border-r-0 flex flex-col items-start hover:bg-slate-50/50 transition-colors"
              >
                <stat.icon size={20} className="text-blue-800 mb-6 opacity-80" />
                <span className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategik Yo'nalishlar va Foto */}
      <section className="py-24 md:py-32 bg-[#fcfcfc]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Asosiy strategik yo'nalishlarimiz</h2>
                <div className="h-1 w-20 bg-blue-800"></div>
              </div>

              <div className="space-y-10">
                {[
                  { title: "Sifatli ta'lim nazorati", desc: "Har bir dars mashg'ulotining metodik to'g'ri tashkil etilishi va o'zlashtirish ko'rsatkichlarining doimiy tahlili." },
                  { title: "Xalqaro tillar integratsiyasi", desc: "Ingliz va rus tillarini chuqurlashtirilgan holda o'qitish orqali bitiruvchilarning dunyoqarashini kengaytirish." },
                  { title: "Raqamli maktab loyihasi", desc: "O'quv jarayoniga eng so'nggi IT texnologiyalar va elektron ta'lim resurslarini tatbiq etish." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-2xl font-bold text-blue-800/20 leading-none">0{i+1}</span>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative p-4 bg-white shadow-sm border border-slate-100">
                <img 
                  src="https://scontent.ftas6-1.fna.fbcdn.net/v/t1.6435-9/154722962_266995771687181_6005732890186241178_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=25d718&_nc_ohc=TvZ-mZrkQxgQ7kNvwFfVYhI&_nc_oc=AdpmYD-zVi7_c3DfmoeacC81OGvcmbF1zRsVExpQqR4UXxcIMw3UfnJeUwFCGNlbWdU&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=Z1ZSJ7AzFpP9RasNX1nJAA&_nc_ss=7a389&oh=00_Af26rcn6JvP1n3YDoUKIaNOCxb1n9a8ZendBVgXjrOOWlg&oe=6A05506B" 
                  alt="Maktab binosi"
                  className="w-full object-cover shadow-inner grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;