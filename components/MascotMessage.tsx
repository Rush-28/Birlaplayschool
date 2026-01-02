
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const MascotMessage: React.FC = () => {
  const [message, setMessage] = useState("Hi! I'm Barnaby the Bear. Let's learn and play!");
  const [loading, setLoading] = useState(false);

  const getNewMessage = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Give a very short, super happy, encouraging message (max 10 words) for a 4-year-old starting preschool. Use emojis.",
        config: {
          systemInstruction: "You are Barnaby, a friendly cartoon teddy bear mascot for a preschool. You love honey, hugs, and learning.",
        }
      });
      if (response.text) {
        setMessage(response.text.trim());
      }
    } catch (err) {
      console.error("Gemini failed:", err);
      setMessage("You're doing great today! 🌟");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-24 mb-10 group relative z-20">
      <div
        className="relative cursor-pointer transition-transform hover:scale-110 active:scale-95"
        onClick={getNewMessage}
      >
        <div className="relative group">
          <div className="text-8xl md:text-9xl filter drop-shadow-xl leading-none">🐻</div>

          {/* Message Bubble */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1 w-56 bg-white p-4 rounded-3xl shadow-xl border-4 border-pink-200 z-10 text-center">
            <p className="text-sm md:text-base font-bold text-gray-700 leading-tight">
              {loading ? "Thinking..." : message}
            </p>
            {/* Speech Bubble Arrow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b-4 border-r-4 border-pink-200 rotate-45"></div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-xs italic">Click Barnaby for a special message!</p>
    </div>
  );
};

export default MascotMessage;
