import React from 'react';
import { Eye, Clock, ChevronRight } from 'lucide-react';

const EventCard = ({ image, views, date, title, description }) => (
  <div className="flex flex-col group cursor-pointer">
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
  </div>
);

const EventsSection = () => {
  const events = [
    {
      id: 1,
      image: "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/473094522_618701050534273_1491955365733037190_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=TMU1q9OC-aAQ7kNvwFc5EnU&_nc_oc=AdoM0Ps1URFhRxXEwm7jdW4VAbnlN5qvtNKfgi6AWQ4wggPIH2gZIra0ZWvqCDyLxO8&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=hpof14UR69Qe5iAA8gmUWA&_nc_ss=7a389&oh=00_Af2y_jIQOJs7Gu0L2WPGQKetGyWR1d-JOEH42BsspobXcA&oe=69E33B31",
      views: "728",
      date: "13.04.2026",
      title: "Senator xalqaro ilmiy-amaliy konferensiyada...",
      description: "Joriy yilning 13-aprel kuni Oliy Majlis Senatining Fan, ta'lim va..."
    },
    {
      id: 2,
      image: "https://scontent.ftas6-1.fna.fbcdn.net/v/t39.30808-6/480444462_614926991182337_4456026943396211364_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=R6V0vRbWU08Q7kNvwFkZDCm&_nc_oc=AdpNMOYXhAIQqYOFLzv0_ipV3d1uQcW0TIq1WQGTxIY6Ez186VMBqJKDe33FDSwskKM&_nc_zt=23&_nc_ht=scontent.ftas6-1.fna&_nc_gid=VVWcv8R4wpy51LUvYEnT8Q&_nc_ss=7a389&oh=00_Af0teaGrMVU6KEs6nD-UNAjhcdsRfyYkJOq1AXUaOlUCew&oe=69E32D48",
      views: "1362",
      date: "10.04.2026",
      title: "Senator Sank-Peterburg shahrida bo'lib o'tgan...",
      description: "Joriy yilning 8-9 aprel kunlari Oliy Majlis Senatining Sud-huquq..."
    },
    {
      id: 3,
      image: "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/480564949_613664004641969_1672243934507564913_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=3vevOh0ReOwQ7kNvwE6AOYz&_nc_oc=Adr83Tm4I-nAfSiIWzkMrOJjn1BdU51bZUT1AtGD9o3zrly-cbfBPlG6CJTIUzkySoU&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=tNJrM_4CXxiaFCNNQOAVTQ&_nc_ss=7a389&oh=00_Af0s85XhyTL0JeQr4NljFRZ7TWGQ0K9CJzuRSj1E8Gc0Cg&oe=69E313D9",
      views: "2062",
      date: "10.04.2026",
      title: "Samarqandda O'zbek-qozoq ilmiy-ijodiy...",
      description: "Qozog'iston parlamenti delegatsiyasining O'zbekistong..."
    },
    {
      id: 4,
      image: "https://scontent.ftas6-2.fna.fbcdn.net/v/t39.30808-6/473079456_618701000534278_7442763861620241835_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=cFjg7jWM4MgQ7kNvwEAjRnF&_nc_oc=AdonB_owk6IpMwmdttfXTUiDK7tbIxFHovqZzZSUD_KWaG5R2e7_jO6xj3iQ8jRMQ2E&_nc_zt=23&_nc_ht=scontent.ftas6-2.fna&_nc_gid=xYHJECOfGrj67ZNxk7-3vA&_nc_ss=7a389&oh=00_Af21IbsyjbPMDfDTuxShNsIFU28TMbywNzw6b7ZscbadfQ&oe=69E31012",
      views: "2062",
      date: "10.04.2026",
      title: "Samarqandda O'zbek-qozoq ilmiy-ijodiy...",
      description: "Qozog'iston parlamenti delegatsiyasining O'zbekistong..."
    }
  ];

  return (
    <section className="container mx-auto px-5 py-12 font-sans">
      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">Tadbirlar</h2>
        <a href="#" className="flex items-center gap-1 text-blue-900 font-bold hover:text-blue-700 transition-colors">
          Barchasi <ChevronRight size={20} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;