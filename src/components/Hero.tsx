const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-white">
      <div className="text-center fade-in px-4">
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Collection 2024</span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
          LESS IS <br /> MORE
        </h1>
        <a 
          href="#shop"
          className="inline-block border border-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
        >
          Explore Shop
        </a>
      </div>
    </div>
  );
};

export default Hero;