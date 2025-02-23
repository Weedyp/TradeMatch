import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center mt-10 lg:mt-20 px-4">

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-wider leading-[1.3]">
        Find the Best Prop <br /> Trading Firm for You
      </h1>

      <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-[#FFAC47] to-[#FF7F50] text-transparent bg-clip-text tracking-widest leading-[1.5]">
        Compare. Review. Choose. Trade.
      </p>

      <p className="mt-3 text-gray-300 max-w-2xl text-base sm:text-lg leading-loose tracking-widest leading-[1.8]">
        Navigating the world of <span className="font-bold">prop trading firms</span> can be overwhelming.
        That’s why we’ve built the ultimate <span className="font-bold">comparison platform</span>—so you can
        find the firm that best fits your trading style, goals, and risk appetite.
      </p>

      <button className="mt-6 px-6 py-3 mb-16 text-lg font-medium rounded-full text-white bg-gradient-to-b from-blue-400 to-blue-950 shadow-lg hover:opacity-90 transition-all">
        Take our test
      </button>
      <div className="mt-25 w-screen border-t border-white/20"></div>
    </div>
  );
};

export default HeroSection;
