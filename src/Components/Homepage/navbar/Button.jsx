const Button = ({title}) => {
  return (
    <button className="relative py-1 px-8 text-sm text-white font-bold rounded-[50px] overflow-hidden 
    bg-black transition-all duration-400 ease-in-out shadow-md hover:scale-105
     hover:bg-orange-500 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full 
     before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
     before:rounded-[50px] hover:before:left-0">
      {title}
    </button>
  );
};

export default Button;