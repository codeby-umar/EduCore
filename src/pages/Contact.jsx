import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';
import Banner from "../components/ui/Banners"

const ContactInfo = ({ icon: Icon, title, detail, link }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 md:gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-all group"
  >
    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
      <Icon size={20} className="md:size-[22px]" />
    </div>
    <div className="flex-grow">
      <h4 className="text-[10px] md:text-[11px] font-black text-blue-900/50 uppercase tracking-[2px] mb-1">{title}</h4>
      <p className="text-[15px] md:text-[17px] font-bold text-gray-800 leading-tight">{detail}</p>
    </div>
    <ChevronRight size={18} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-all hidden md:block" />
  </motion.a>
);

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
       <Banner children={"Bog'lanish sahifasi"} />
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            
            {/* Kontakt Ma'lumotlar */}
            <div className="lg:col-span-5 space-y-2 order-2 lg:order-1">
              <ContactInfo 
                icon={MapPin} 
                title="Manzil" 
                detail="Andijon viloyati, Xo'jaobod tumani, 5-maktab" 
                link="https://www.google.com/maps/search/Andijon+Xo'jaobod+5-maktab"
              />
              <ContactInfo 
                icon={Phone} 
                title="Telefon" 
                detail="+998 (--) --- -- --" 
                link="tel:+998"
              />
              <ContactInfo 
                icon={Mail} 
                title="Elektron pochta" 
                detail="xojabod5-maktab@umail.uz" 
                link="mailto:xojabod5-maktab@umail.uz"
              />
              <ContactInfo 
                icon={Clock} 
                title="Dars vaqti" 
                detail="Dushanba — Shanba, 08:00 - 17:00" 
                link="#"
              />

              <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 md:mb-6">Ijtimoiy tarmoqlarimiz</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Telegram', 'Facebook', 'Instagram', 'YouTube'].map((social) => (
                    <a key={social} href="#" className="px-4 md:px-5 py-2 md:py-2.5 bg-gray-50 text-gray-800 text-xs md:text-sm font-bold rounded-full hover:bg-blue-900 hover:text-white transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Xabar yuborish formasi */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 bg-white border border-gray-100 rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-sm order-1 lg:order-2"
            >
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[12px] md:text-[13px] font-bold text-gray-900 ml-1">F.I.SH</label>
                    <input 
                      type="text" 
                      placeholder="Ismingizni kiriting"
                      className="w-full px-0 py-2 md:py-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-900 outline-none transition-all text-base md:text-lg font-medium placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] md:text-[13px] font-bold text-gray-900 ml-1">Telefon raqamingiz</label>
                    <input 
                      type="tel" 
                      placeholder="+998"
                      className="w-full px-0 py-2 md:py-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-900 outline-none transition-all text-base md:text-lg font-medium placeholder:text-gray-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[12px] md:text-[13px] font-bold text-gray-900 ml-1">Mavzu</label>
                  <input 
                    type="text" 
                    placeholder="Murojaat mazmuni"
                    className="w-full px-0 py-2 md:py-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-900 outline-none transition-all text-base md:text-lg font-medium placeholder:text-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] md:text-[13px] font-bold text-gray-900 ml-1">Xabaringiz</label>
                  <textarea 
                    rows="3" 
                    placeholder="Savolingizni yozing..."
                    className="w-full px-0 py-2 md:py-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-900 outline-none transition-all text-base md:text-lg font-medium placeholder:text-gray-300 resize-none"
                  ></textarea>
                </div>

                <button className="group relative w-full md:w-max px-8 md:px-10 py-3.5 md:py-4 bg-blue-900 text-white rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-blue-800 active:scale-95 shadow-lg shadow-blue-900/10">
                  <span className="relative z-10 text-sm md:text-base">Xabarni yuborish</span>
                  <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map qismi */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 w-full h-[350px] md:h-[500px] rounded-[24px] md:rounded-[40px] overflow-hidden border border-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.875204273397!2d72.316667!3d40.633333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM4JzAwLjAiTiA3MsKwMTknMDAuMCJF!5e0!3m2!1suz!2s!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;