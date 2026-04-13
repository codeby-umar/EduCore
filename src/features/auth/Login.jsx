import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, GraduationCap } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
        
        <div className="bg-blue-900 p-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-blue-400"></div>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm border border-white/20">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight uppercase">5-Maktab</h1>
          <p className="text-blue-200 text-xs font-bold mt-1 tracking-widest uppercase">Elektron ta'lim tizimi</p>
        </div>

        <div className="p-8">
          {/* Google orqali kirish */}
          <button 
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700 mb-6 active:scale-[0.98]"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" className="w-5 h-5" />
            <span>Google orqali kirish</span>
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold">Yoki login orqali</span></div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Login yoki ID</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-300 group-focus-within:text-blue-900 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-3 py-3.5 border-2 border-slate-50 rounded-2xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-900 focus:bg-white transition-all text-slate-900 font-medium"
                  placeholder="ID raqamingiz"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Parol</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-300 group-focus-within:text-blue-900 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-11 pr-11 py-3.5 border-2 border-slate-50 rounded-2xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-900 focus:bg-white transition-all text-slate-900 font-medium"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-blue-900 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-blue-900 peer-checked:border-blue-900 transition-all flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                </div>
                <span className="ml-2 text-sm text-slate-500 font-bold group-hover:text-slate-700 transition-colors">Eslab qolish</span>
              </label>
              <a href="#" className="text-sm font-bold text-blue-900 hover:underline">Parolni unutdingizmi?</a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl shadow-blue-900/20 text-sm font-black uppercase tracking-widest text-white bg-blue-900 hover:bg-blue-800 transition-all active:scale-[0.97]"
            >
              Tizimga kirish
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-slate-50">
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
              Andijon viloyati Xo'jaobod tumani <br />
              5-maktab Axborot tizimi © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;