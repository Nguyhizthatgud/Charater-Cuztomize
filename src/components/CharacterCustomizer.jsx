import { useState } from "react";
import CharacterPreview from "./CharacterPreview";
import CustomizationPanel from "./CustomizationPanel";
import {
  getRandomAsset,
  getEaringsAsset,
  getRandomEarings,
  getRandomVest,
  getRandomShirt,
  getRandomJacket,
  getRandomGlasses,
  getRandomHat,
  getRandomNeckwear
} from "../config/characterAssets";

const CharacterCustomizer = () => {
  const [character, setCharacter] = useState({
    body: "body1",
    eyes: "eyes1",
    hair: "hair1",
    mouths: "mouth1",
    eyebrows: "eyebrows1",
    noses: "nose1",
    facial_hair: "none",
    // Clothing layers
    vest: "vest1",
    shirt: "shirt1",
    jacket: "jacket1",
    // Accessories
    earings: "earings1",
    glasses: "glasses1",
    hat: "hat1",
    neckwear: "neckwear1"
  });

  const updateCharacter = (key, value) => {
    setCharacter((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const randomizeCharacter = () => {
    setCharacter({
      body: getRandomAsset("body")?.id || "body1",
      eyes: getRandomAsset("eyes")?.id || "eyes1",
      hair: getRandomAsset("hair")?.id || "hair1",
      mouths: getRandomAsset("mouths")?.id || "mouth1",
      eyebrows: getRandomAsset("eyebrows")?.id || "eyebrows1",
      noses: getRandomAsset("noses")?.id || "nose1",
      facial_hair: getRandomAsset("facial_hair")?.id || "none",
      // Use specific layer random functions
      vest: getRandomVest()?.id || "vest1",
      shirt: getRandomShirt()?.id || "shirt1",
      jacket: getRandomJacket()?.id || "jacket1",
      earings: getRandomEarings()?.id || "earings1",
      glasses: getRandomGlasses()?.id || "glasses1",
      hat: getRandomHat()?.id || "hat1",
      neckwear: getRandomNeckwear()?.id || "neckwear1"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">Thay đồ cho búp bê</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Character Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Xem trước</h2>
            <CharacterPreview character={character} />
            <button
              onClick={randomizeCharacter}
              className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🎲 Lựa đại
            </button>
          </div>

          {/* Customization Panel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Lựa đồ</h2>
            <CustomizationPanel character={character} updateCharacter={updateCharacter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCustomizer;
