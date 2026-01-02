import { NavLink } from "react-router-dom";
import Buttons from "../ui/Buttons";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden font-poppins">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Replace with your actual image path
          backgroundImage: `url('./images/reception photo.avif')`
        }}
      >
        {/* The Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex gap-4 h-full flex-col items-center justify-center px-4 text-center text-white">

        {/* Main Headline */}
        <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl font-serif">
          Clear Your Vision <br /> 
          {/* <span className="mt-2 text-3xl md:4xl lg:text-5xl block">Manifest Your Future</span> */}
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl text-md mb-4 font-light md:text-lg lg:text-xl">
          Helping students and professionals succeed in over 8 countries with a 98% visa success rate.
        </p>

        {/* CTA Button */}
        <Buttons label={"Get Start Now"} to={'/contact'}></Buttons>
      </div>
    </section>
  );
};

export default Hero;