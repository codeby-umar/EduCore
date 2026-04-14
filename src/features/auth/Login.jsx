import React, { useState } from "react";
import { Lock, User, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans p-4">
      <div className="max-w-md w-full bg-white">
        <div className="py-10 px-6 sm:px-10 md:py-14">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">
                Login yoki ID
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-300 group-focus-within:text-blue-900 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-3 py-3.5 border-2 border-slate-50 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-900 focus:bg-white transition-all text-slate-900 font-medium"
                  placeholder="ID raqamingiz"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">
                Parol
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-300 group-focus-within:text-blue-900 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-11 pr-11 py-3.5 border-2 border-slate-50 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-900 focus:bg-white transition-all text-slate-900 font-medium"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-blue-900 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobil ekranda elementlarni ustma-ust tushmasligi uchun flex-wrap va text-xs/sm ishlatildi */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-blue-900 peer-checked:border-blue-900 transition-all flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                </div>
                <span className="ml-2 text-sm text-slate-500 font-bold group-hover:text-slate-700 transition-colors">
                  Eslab qolish
                </span>
              </label>
              <a
                href="#"
                className="text-sm font-bold text-blue-900 hover:underline"
              >
                Parolni unutdingizmi?
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-widest text-white bg-blue-900 hover:bg-blue-800 active:scale-[0.98] transition-all"
            >
              Tizimga kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;