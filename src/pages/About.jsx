import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import Banners from '../components/ui/Banners';

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-4 md:p-6 text-center">
    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl md:text-3xl font-black text-gray-900">{value}</h3>
    <p className="text-[11px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      <Banners children={'Biz haqimizda'} />
      {/* Hero Section - Matn markazda, professional spacing */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 border-b border-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block py-1 px-4 bg-blue-50 text-blue-900 text-[11px] font-black uppercase tracking-[3px] rounded-full mb-6"
            >
              Maktabimiz tarixi va maqsadi
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]"
            >
              Sifatli ta'lim — <span className="text-blue-900">porloq kelajak</span> poydevori
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Andijon viloyati Xo'jaobod tumani 5-umumiy o'rta ta'lim maktabi o'quvchilarga zamonaviy bilim va yuksak odob-axloq berishni o'z oldiga oliy maqsad qilib qo'ygan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats - Grid tartibi responsive qilingan */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-gray-100">
            <StatCard icon={Users} value="800+" label="O'quvchilar" />
            <StatCard icon={GraduationCap} value="62" label="Malakali Ustozlar" />
            <StatCard icon={BookOpen} value="34" label="Sinfxonalar" />
            <StatCard icon={Award} value="150+" label="Yutuqlarimiz" />
          </div>
        </div>
      </section>

      {/* Info Block - Rasm va matn responsive (mobil qurilmada matn birinchi keladi) */}
      <section className="py-16 md:py-24 border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Nima uchun aynan bizning maktab?
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Biz o'quvchilarimizning qiziqishlaridan kelib chiqib, fanlarni chuqurlashtirilgan holda o'qitish va ularning ijodiy salohiyatini oshirishga urg'u beramiz.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Prezident maktablariga tayyorlov tizimi",
                    "Zamonaviy IT va ingliz tili to'garaklari",
                    "Sportning 5 ta turi bo'yicha seksiyalar",
                    "Yuksak natijali bitiruvchilar"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 size={20} className="text-blue-900 flex-shrink-0" />
                      <span className="font-bold text-gray-700 text-base md:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/10">
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Maktab hayoti"
                  className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Director Message - Toza va silliq ko'rinish */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-1 bg-blue-900 mx-auto mb-10"></div>
            <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic mb-10">
              "Har bir bola — bu ochilmagan qirradir. Bizning vazifamiz esa shu qirralarni tarashlab, jamiyatga foydasi tegadigan shaxsni yetishtirishdir."
            </p>
            <div>
              <h4 className="text-xl font-black text-gray-900 uppercase">Maktab Ma'muriyati</h4>
              <p className="text-blue-900 font-bold tracking-[3px] text-xs mt-2 uppercase">Xo'jaobod tumani 5-maktab</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;