
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
    <div className="flex flex-col items-center gap-4 my-10 group">
      <div
        className="relative cursor-pointer transition-transform hover:scale-110 active:scale-95"
        onClick={getNewMessage}
      >
        <div className="text-8xl md:text-9xl filter drop-shadow-xl">🐻</div>
        <div className="absolute -top-16 -right-20 md:-right-32 bg-white p-4 rounded-3xl rounded-bl-none shadow-xl max-w-[200px] border-4 border-pink-200 z-10">
          <p className="text-sm md:text-base font-bold text-gray-700 leading-tight">
            {loading ? "Thinking..." : message}
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-xs italic">Click Barnaby for a special message!</p>
    </div>
  );
};

export default MascotMessage;
