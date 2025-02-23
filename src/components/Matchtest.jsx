import { useState } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const steps = [
  { title: "Your details", subtitle: "Name and email", completed: true },
  { title: "Company details", subtitle: "Website and location", completed: false },
  { title: "Invite your team", subtitle: "Start collaborating", completed: false },
  { title: "Add your socials", subtitle: "Automatic sharing", completed: false },
];

export const MatchTest =() => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#0c1b2d] flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h2 className="text-white text-3xl md:text-5xl font-semibold mb-14">Take our match test</h2>
      
      {/* Step Progress Bar */}
      <div className="flex items-center justify-center space-x-10 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            {step.completed ? (
              <FaCheckCircle className="text-green-400 text-xl mx-auto" />
            ) : (
              <FaCircle className="text-gray-400 text-xl mx-auto" />
            )}
            <p className="text-white text-sm font-medium mt-2">{step.title}</p>
            <p className="text-gray-400 text-xs">{step.subtitle}</p>
          </div>
        ))}
      </div>
      
      {/* Placeholder Box */}
      <div className="w-full max-w-4xl h-64 md:h-80 bg-gradient-to-r from-[#112240] to-[#334a68] flex items-center justify-center rounded-lg shadow-lg">
        <p className="text-white text-xl md:text-2xl font-semibold">Placeholder</p>
      </div>
    </div>
  );
}
