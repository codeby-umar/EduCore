import React from 'react';

const statsData = [
  { id: 1, label: "Jami o'quvchilar soni:", value: "970" },
  { id: 2, label: "Shundan birinchi sinf o'quvchilari:", value: "150" },
  { id: 3, label: "Sinf xonalari soni:", value: "45" },
  { id: 4, label: "O'qituvchilar va pedagoglar jamoasi:", value: "120" },
];

const StatCard = ({ label, value }) => (
  <div className="bg-white/10 backdrop-blur-[2px] border border-white/10 p-6 rounded-lg flex flex-col justify-between h-full group hover:bg-white/15 transition-all duration-300">
    <span className="text-white text-lg font-medium mb-4 leading-tight group-hover:text-white/90">
      {label}
    </span>
    <span className="text-[#FFD700] text-5xl md:text-6xl font-extrabold tracking-tight">
      {value}
    </span>
  </div>
);

const SchoolStatsSection = () => {
  const gerbImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/960px-Emblem_of_Uzbekistan.svg.png";

  return (
    <section className="relative rounded-sm w-full bg-[#063a9b] overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full h-full flex justify-end items-center z-0 pointer-events-none">
        <img 
          src={gerbImageUrl} 
          alt="O'zbekiston Gerbi" 
          className="h-[40%] md:h-[110%] w-auto max-w-none opacity-[0.10] translate-x-1/3 -rotate-12 select-none"
        />
      </div>

      <div className="container mx-auto py-20 px-6 md:px-10 relative z-10">
        
        <div className="mb-14 ">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Maktab faoliyati statistikasi
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-medium">
            2026-yil 1-sentabr holatiga
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((stat) => (
            <StatCard key={stat.id} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStatsSection;