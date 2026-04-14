import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import Banner from "../components/ui/Banners";

const ContactInfo = ({ icon: Icon, title, detail, link }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-6 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors group"
  >
    <div className="flex-shrink-0 mt-1 text-blue-800">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <div className="flex-grow">
      <h4 className="text-[10px] font-bold text-blue-800 uppercase tracking-[0.2em] mb-2 opacity-70">{title}</h4>
      <p className="text-base md:text-lg font-semibold text-slate-800 leading-snug">{detail}</p>
    </div>
    <ArrowRight size={16} className="text-slate-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
  </motion.a>
);

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Banner children={"Murojaat va bog'lanish"} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-4xl mb-16">
            <div className="h-1 w-12 bg-blue-800 mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Biz bilan <span className="text-blue-800 italic font-medium">aloqada bo'ling</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              O'quv jarayoni, qabul shartlari yoki takliflaringiz bo'yicha quyidagi rasmiy kanallar orqali murojaat qilishingiz mumkin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-sm overflow-hidden shadow-sm">
            
            {/* Kontakt Ma'lumotlar - Jiddiy jadval uslubi */}
            <div className="lg:col-span-5 bg-white border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="divide-y divide-slate-100">
                <ContactInfo 
                  icon={MapPin} 
                  title="Rasmiy manzil" 
                  detail="Andijon viloyati, Xo'jaobod tumani, 5-maktab" 
                  link="https://maps.google.com"
                />
                <ContactInfo 
                  icon={Phone} 
                  title="Ishonch telefoni" 
                  detail="+998 (--) --- -- --" 
                  link="tel:+998"
                />
                <ContactInfo 
                  icon={Mail} 
                  title="Elektron manzili" 
                  detail="xojabod5-maktab@umail.uz" 
                  link="mailto:xojabod5-maktab@umail.uz"
                />
                <ContactInfo 
                  icon={Clock} 
                  title="Qabul soatlari" 
                  detail="Dushanba — Shanba, 08:00 - 17:00" 
                  link="#"
                />
              </div>

              <div className="p-8 bg-slate-50/50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Ijtimoiy tarmoqlar</p>
                <div className="flex flex-wrap gap-4">
                  {['Telegram', 'Facebook', 'Instagram'].map((social) => (
                    <a key={social} href="#" className="text-xs font-bold text-blue-800 hover:text-slate-900 underline decoration-blue-800/20 underline-offset-4 transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Xabar yuborish formasi - Minimalist & Clean */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      className="peer w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-blue-800 transition-colors text-slate-900 font-medium"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-3.5 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-800 peer-focus:text-xs">
                      F.I.SH
                    </label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      required
                      className="peer w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-blue-800 transition-colors text-slate-900 font-medium"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-3.5 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-800 peer-focus:text-xs">
                      Telefon raqami
                    </label>
                  </div>
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    className="peer w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-blue-800 transition-colors text-slate-900 font-medium"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-3.5 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-800 peer-focus:text-xs">
                    Murojaat mavzusi
                  </label>
                </div>

                <div className="relative group">
                  <textarea 
                    rows="3" 
                    className="peer w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-blue-800 transition-colors text-slate-900 font-medium resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-0 -top-3.5 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-800 peer-focus:text-xs">
                    Xabaringiz mazmuni
                  </label>
                </div>

                <button className="inline-flex items-center justify-center gap-3 px-12 py-4 bg-blue-800 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-xl shadow-blue-800/10 active:scale-95">
                  Xabarni yuborish
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 relative group">
             <div className="absolute inset-0 border border-slate-200 pointer-events-none z-10"></div>
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="w-full h-[450px] bg-slate-100 overflow-hidden"
             >
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771793.3756642591!2d70.88928222656254!3d40.91973905106221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca5002c169bcf%3A0xc514a38111008139!2s5-Maktab!5e0!3m2!1sen!2s!4v1776175381261!5m2!1sen!2s" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
                 allowFullScreen="" 
                 loading="lazy"
                 className="hover:filter-none transition-all duration-1000"
               ></iframe>
             </motion.div>
             <div className="mt-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <span>Google Maps platformasi</span>
                <span>40.6432° N, 72.3789° E</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;