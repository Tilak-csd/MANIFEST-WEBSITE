import { NavLink } from "react-router-dom";
import Buttons from "../ui/Buttons";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden font-poppins">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Replace with your actual image path
          backgroundImage: `url('https://ik.imagekit.io/fsso0s4pw/Header/main.avif')`
        }}
      >
        {/* The Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex gap-4 h-full flex-col items-center justify-center px-4 text-center text-white">

        {/* Main Headline */}
        <motion.h1
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.6, delay:.2}}
        className="text-4xl font-bold md:text-6xl lg:text-7xl font-serif">
          Clear Your Vision <br /> 
          {/* <span className="mt-2 text-3xl md:4xl lg:text-5xl block">Manifest Your Future</span> */}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
         initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.6, delay:.3}}
        className="max-w-2xl text-md mb-4 font-light md:text-lg lg:text-xl">
          Helping students and professionals succeed in over 8 countries with a 98% visa success rate.
        </motion.p>

        {/* CTA Button */}
        <motion.div  initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.6, delay:.4}}>
        <Buttons label={"Get Start Now"} to={'/contact'}></Buttons>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;