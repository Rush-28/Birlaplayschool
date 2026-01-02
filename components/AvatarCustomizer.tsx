
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AVATAR_OPTIONS } from '../constants';
import { AvatarConfig } from '../types';

const AvatarCustomizer: React.FC = () => {
  const [config, setConfig] = useState<AvatarConfig>({
    base: AVATAR_OPTIONS.bases[0].label,
    hairColor: AVATAR_OPTIONS.colors[0],
    shirtColor: AVATAR_OPTIONS.colors[2],
    accessory: AVATAR_OPTIONS.accessories[0].label === '❌' ? '' : AVATAR_OPTIONS.accessories[0].label,
  });

  const updateConfig = (key: keyof AvatarConfig, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleRandom = () => {
    const randomBase = AVATAR_OPTIONS.bases[Math.floor(Math.random() * AVATAR_OPTIONS.bases.length)].label;
    const randomShirtColor = AVATAR_OPTIONS.colors[Math.floor(Math.random() * AVATAR_OPTIONS.colors.length)];
    const randomAccOption = AVATAR_OPTIONS.accessories[Math.floor(Math.random() * AVATAR_OPTIONS.accessories.length)];

    setConfig(prev => ({
      ...prev,
      base: randomBase,
      shirtColor: randomShirtColor,
      accessory: randomAccOption.label === '❌' ? '' : randomAccOption.label
    }));
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10">
      <Link to="/activities" className="inline-block mb-6 relative z-50">
        <button className="bg-white hover:bg-pink-50 text-pink-500 font-bold py-2 px-6 rounded-full shadow-md border-2 border-pink-100 transition-all flex items-center gap-2">
          ⬅ Back to Activities
        </button>
      </Link>
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-8 border-pink-100">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-8 text-center font-bubble">
          Create Your Friend! 🎨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Preview Window */}
          <div className="flex flex-col items-center">
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-yellow-100 flex items-center justify-center relative overflow-hidden shadow-inner flex-shrink-0"
              style={{ backgroundColor: config.shirtColor + '20' }}
            >
              <div className="text-9xl md:text-[10rem] relative z-10 select-none">
                {config.base}
                {config.accessory && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl pointer-events-none drop-shadow-md">
                    {config.accessory}
                  </div>
                )}
              </div>
              {/* Background splashes */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-300 blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-300 blur-xl"></div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 w-full">
              <button className="bg-green-400 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all active:scale-95 min-w-[120px]">
                Save 💾
              </button>
              <button
                onClick={handleRandom}
                className="bg-blue-400 hover:bg-blue-500 text-white border-2 border-blue-300 font-bold px-8 py-3 rounded-full shadow-lg transition-all active:scale-95 min-w-[120px]"
              >
                Random 🎲
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-bubble">Choose Character</h3>
              <div className="flex flex-wrap gap-4">
                {AVATAR_OPTIONS.bases.map(b => (
                  <button
                    key={b.id}
                    onClick={() => updateConfig('base', b.label)}
                    className={`text-4xl p-3 rounded-2xl border-4 transition-all ${config.base === b.label ? 'border-pink-400 bg-pink-50 scale-110 shadow-md' : 'border-gray-100 hover:border-pink-200'
                      }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-bubble">Pick Shirt Color</h3>
              <div className="flex flex-wrap gap-3">
                {AVATAR_OPTIONS.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => updateConfig('shirtColor', color)}
                    style={{ backgroundColor: color }}
                    className={`w-10 h-10 rounded-full border-4 shadow-sm transition-all transform hover:scale-125 ${config.shirtColor === color ? 'border-pink-400 scale-125' : 'border-white'
                      }`}
                  />
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-bubble">Accessories</h3>
              <div className="flex flex-wrap gap-4">
                {AVATAR_OPTIONS.accessories.map(acc => (
                  <button
                    key={acc.id}
                    onClick={() => updateConfig('accessory', acc.label === '❌' ? '' : acc.label)}
                    className={`text-3xl p-3 rounded-2xl border-4 transition-all ${(config.accessory === acc.label || (config.accessory === '' && acc.label === '❌'))
                      ? 'border-blue-400 bg-blue-50 scale-110 shadow-md'
                      : 'border-gray-100 hover:border-blue-200'
                      }`}
                  >
                    {acc.label}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCustomizer;
