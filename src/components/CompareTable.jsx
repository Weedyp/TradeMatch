import { useState } from "react";
import { firms } from "../assets/assets";

const CompareTable = () => {
  const [priceRange, setPriceRange] = useState(259);

  return (
    <div className=" mt-4 min-h-screen bg-gradient-to-b from-[#0B1726] to-[#0D1B2A] text-white p-6 ">
      {/* Title */}
      <h1 className="mt-12 text-center text-5xl font-semibold  mb-6">
        What Plan do you want to compare?
      </h1>

      {/* Filters Section */}
      <div className=" flex flex-col md:flex-row justify-center items-center gap-28 mb-14">
  {/* Account Size Dropdown */}
  <div className="mt-6 flex flex-col items-start space-y-5 ">
    <label className="text-white text-xs font-semibold">Account Size</label>
    <select className="bg-[#011F3A] text-white px-4 py-3 rounded-lg border border-white/10 w-56 md:w-64">
      <option>10k</option>
      <option>50k</option>
      <option>100k</option>
    </select>
  </div>

  {/* Number of Steps Dropdown */}
  <div className=" mt-6 flex flex-col items-start space-y-5">
    <label className="text-white text-xs font-semibold ">Number of Steps</label>
    <select className="bg-[#011F3A] text-white px-4 py-3 rounded-lg border border-white/10 w-56 md:w-64">
      <option>1 Step</option>
      <option>2 Steps</option>
    </select>
  </div>

  {/* Price Range Slider */}
  <div className="mt-6 flex flex-col items-start space-y-5 "> 
    <label className="text-white text-xs font-semibold">Price Range</label>
    <div className="flex flex-col items-center">
      <input
        type="range"
        min="200"
        max="259"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="w-56 md:w-64"
      />
      <div className="flex justify-between w-56 md:w-64 text-sm mt-2">
        <span>$200</span>
        <span>${priceRange}</span>
      </div>
    </div>
  </div>
</div>

      {/* Comparison Table */}
      <div className="overflow-x-auto ">
        <table className="w-full max-w-7xl mx-auto bg-[#00172B] text-white rounded-lg overflow-hidden border border-white/20">
          <thead>
            <tr className="bg-[#011F3A] text-gray-300 text-xs border-b border-white/20">
              <th className="p-6">Firm  ⬍</th>
              <th className="p-6">Price ⬍</th>
              <th className="p-6">Account Size ⬍</th>
              <th className="p-6">Profit Split ⬍</th>
              <th className="p-6">Profit Target ⬍</th>
              <th className="p-6">Max. Daily Loss ⬍</th>
              <th className="p-6">Max. Total Drawdown ⬍</th>
            </tr>
          </thead>
          <tbody>
            {firms.map((firm, index) => (
              <tr
                key={index}
                className={`border-b border-[#1E2A3A] hover:bg-[#1B2635]  transition-all ${index % 2 === 0 ? "bg-[#00172B]" : "bg-[#011F3A]"
                  }`}
              >
                <td className="p-4 flex items-center space-x-3">
                  <img src={firm.logo} alt={firm.name} className="h-10 w-10" />
                  <span>{firm.name}</span>
                </td>
                <td className="p-4 text-xs">{firm.price}</td>
                <td className="p-4 text-xs">{firm.accountSize}</td>
                <td className="p-4 text-xs">{firm.profitSplit}</td>
                <td className="p-4 text-xs">{firm.profitTarget}</td>
                <td className="p-4 text-xs">{firm.dailyLoss}</td>
                <td className="p-4 text-xs">{firm.drawdown}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareTable;
