import React from "react";
import { tradingFirms } from "../assets/assets"; // Adjust the path if needed
import { TiTick } from "react-icons/ti";

const StarRating = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <span
                key={i}
                className={`text-yellow-400 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            >
                ★
            </span>
        ))}
    </div>
);

const CardSection = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 mt-2">
            <nav className="flex space-x-4 px-6 py-3">
                <button className="px-6 py-3 text-lg font-medium rounded-md text-white bg-gradient-to-b from-blue-400 to-blue-950 shadow-lg hover:opacity-90 transition-all">
                    Top 10
                </button>
                <button className="px-6 py-2 text-white font-medium border border-blue-950 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:text-blue-400 transition">
                    COMPARE FIRMS
                </button>
                <button className="px-6 py-2 text-white font-medium border border-blue-950 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:text-blue-400 transition">
                    REVIEWS
                </button>
                <button className="px-6 py-2 text-white font-medium border border-blue-950 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:text-blue-400 transition">
                    MATCH TEST
                </button>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-semibold text-white mt-9 text-center leading-[1.5]">
                Top 10 Prop Trading Firms <br /> Compare the Best in the Industry
            </h1>

            <div className="mt-10 w-full max-w-5xl space-y-6">
                {tradingFirms.map((firm, index) => (
                    <div
                        key={index}
                        className="flex items-center w-full max-w-6xl  bg-gradient-to-r from-[#081328] to-[#122944] rounded-2xl p-6 space-x-6 "
                    >
                        {/* Firm Logo */}
                        <div className="w-40 h-40 rounded-lg overflow-hidden bg-[#011A30] flex-shrink-0">
                            <img src={firm.logo} alt={firm.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Firm Details - Left Aligned */}
                        <div className="flex-1 flex flex-col text-left">
                            <h2 className="text-xl font-semibold text-white">{firm.name}</h2>
                            <p className="text-gray-300 text-sm">{firm.description}</p>

                            {/* Features List */}
                            <div className="mt-2 text-white text-sm flex flex-col space-y-1">
                                <div className="flex items-center space-x-2">
                                    <TiTick /> <p>Feature 1</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <TiTick /> <p>Feature 2</p>
                                </div>
                            </div>

                            {/* Firm Stats - Left Aligned */}
                            <div className="mt-4 flex space-x-6 text-sm text-gray-300">
                                <div>
                                    <p className="uppercase text-gray-400 text-xs">Avg. Payout Time</p>
                                    <p className="text-white font-semibold text-lg">2 Days</p>
                                </div>
                                <div className="h-10 w-[2px] bg-gray-400"></div>
                                <div>
                                    <p className="uppercase text-gray-400 text-xs">Profit Payout</p>
                                    <p className="text-white font-semibold text-lg">80-90 %</p>
                                </div>
                                <div className="h-10 w-[2px] bg-gray-400"></div>
                                <div>
                                    <p className="uppercase text-gray-400 text-xs">Trading Platforms</p>
                                    <p className="text-white font-semibold text-lg">Tradelocker and DXTrade</p>
                                </div>
                            </div>
                        </div>

                        {/* Review & Button Section - Right Aligned */}
                        <div className="flex flex-col items-center space-y-1 text-right">
                            {/* Rating */}
                            <div className="flex items-center space-x-1">
                                <span className="text-white text-lg font-bold">{firm.rating}</span>
                                <StarRating rating={firm.rating} />
                            </div>

                            {/* Reviews Count */}
                            <p className="text-gray-400 text-xs mt-10">21K Total Reviews</p>

                            {/* Button - Reduced spacing */}
                            <button className="mt-10 px-6 py-2 text-lg font-medium rounded-full text-white bg-gradient-to-b from-blue-400 to-blue-950 shadow-lg hover:opacity-90 transition-all ">
                                Visit Site
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-14 mb-16 px-20 py-2  text-lg font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                See All
            </button>
            {/* <div className="mt-4 w-screen border-t border-white/20"></div> */}
        </div>

    );
};

export default CardSection;

