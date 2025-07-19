import { Button } from 'antd';
import logo from '../assets/logo.svg';
import girl from '../assets/girl.png';

const Hero = () => {
  return (
    <section id="home" className="h-52 lg:min-h-screen flex overflow-hidden">

      {/* Left Side */}
      <div className="w-3/5 bg-[#1648EB]  justify-center p-8 lg:p-16 text-white">
        {/* Logo */}
        <div className="mb-4 lg:mb-8">
          <img src={logo} alt="Microtrack Logo" className=" w-12 lg:w-auto" />
        </div>

        {/* Title */}
        <h1 className="text-xl lg:text-7xl   font-bold mb-6">
          Detecting <br /> microplastics from <br /> drinking water
        </h1>
      </div>

      {/* Right Side */}
      <div className="w-2/5  hero-background flex items-end justify-center">

        {/* Girl Image */}
        <img
          src={girl}
          alt="Girl holding glass of water"
          className="relative z-10 w-full "
        />
      </div>

    </section>
  );
};

export default Hero;
