const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="text-center fade-in">
        <span className="font-signature text-3xl md:text-4xl text-gray-700 block mb-2">Razeerh Shop</span>
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.85]">
          STAY <br /> <span className="font-signature font-normal text-5xl md:text-8xl tracking-normal lowercase">classy.</span>
        </h1>
        <a href="#shop" className="inline-block border border-black px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500">
          Explore Collection
        </a>
      </div>
    </div>
  );
};
export default Hero;