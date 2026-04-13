const Banners = ({children}) => {
  return (
    <div className="relative h-75 w-full flex items-center justify-center overflow-hidden">
      <img
        src="https://imgproxy.divecdn.com/XaU6v4EbDPRqCOtP6nbMjknVb0E_vQ9NCXnrD-aoI64/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzE3MDA3OTQ1LmpwZw==.webp" 
        alt="Maktab binosi"
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/50"></div>

      <h1 className="relative z-10 text-3xl md:text-5xl text-white font-black tracking-tight text-center px-4 uppercase">
        {children}
      </h1>
    </div>
  );
};

export default Banners;