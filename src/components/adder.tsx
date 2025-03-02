"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function Adder({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className="w-full max-w-2xl mx-auto bg-[#2a0e4a] p-5 rounded-lg shadow-md cursor-pointer hover:bg-[#3b1760] transition-all duration-300"
      onClick={toggleDropdown}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-purple-200">{question}</h3>
        {isOpen ? (
          <ChevronDown className="text-purple-400 transition-transform duration-300 rotate-180" />
        ) : (
          <ChevronRight className="text-gray-400 transition-transform duration-300" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300 text-sm">{answer}</p>
      </div>
    </div>
  );
}
