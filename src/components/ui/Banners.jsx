
const Banners = ({children}) => {
  return (
    <div className="relative h-75 w-full flex items-center justify-center overflow-hidden bg-gray-900">
      <img
        src="https://stateline.org/wp-content/uploads/2023/09/school-start-times.jpg"
        alt="Banner background"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <h1 className="text-3xl text-white font-black">{children}</h1>
    </div>
  );
};

export default Banners;