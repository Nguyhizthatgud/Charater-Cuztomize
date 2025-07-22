import React from "react";
import { CHARACTER_ASSETS } from "../config/characterAssets";

const CustomizationPanel = ({ character, updateCharacter }) => {
  // Helper function to get assets for layered categories
  const getLayeredAssets = (category, layerIndex) => {
    const assets = CHARACTER_ASSETS[category];
    if (Array.isArray(assets[0])) {
      return assets[layerIndex] || [];
    }
    return [];
  };

  // Helper function to get flat assets
  const getFlatAssets = (category) => {
    return CHARACTER_ASSETS[category] || [];
  };

  const OptionButton = ({ option, isSelected, onClick }) => (
    <button
      onClick={() => onClick(option.id)}
      className={`p-2 rounded-lg border-2 transition-all duration-200 text-sm ${
        isSelected
          ? "border-blue-500 bg-blue-500/20 text-blue-700"
          : "border-gray-300 bg-white/50 hover:border-gray-400 hover:bg-white/70"
      }`}
      title={option.name}
    >
      {option.path ? (
        <img
          src={option.path}
          alt={option.name}
          className="w-12 h-12 object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        />
      ) : (
        <div className="w-12 h-12 flex items-center justify-center text-gray-500">None</div>
      )}
      <div className="text-xs mt-1 hidden">{option.name}</div>
    </button>
  );

  const Section = ({ title, children }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{children}</div>
    </div>
  );

  return (
    <div className="max-h-[600px] overflow-y-auto space-y-4 pr-2">
      {/* Body Parts */}
      <Section title="💪 Body">
        {getFlatAssets("body").map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.body === option.id}
            onClick={(id) => updateCharacter("body", id)}
            category="body"
          />
        ))}
      </Section>

      {/* Eyes */}
      <Section title="👀 Eyes">
        {getFlatAssets("eyes").map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.eyes === option.id}
            onClick={(id) => updateCharacter("eyes", id)}
            category="eyes"
          />
        ))}
      </Section>

      {/* Hair */}
      <Section title="💇 Hair">
        {getFlatAssets("hair").map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.hair === option.id}
            onClick={(id) => updateCharacter("hair", id)}
            category="hair"
          />
        ))}
      </Section>

      {/* Mouths */}
      <Section title="👄 Mouths">
        {getFlatAssets("mouths").map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.mouths === option.id}
            onClick={(id) => updateCharacter("mouths", id)}
            category="mouths"
          />
        ))}
      </Section>

      {/* Eyebrows */}
      <Section title="🤨 Eyebrows">
        {getFlatAssets("eyebrows").map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.eyebrows === option.id}
            onClick={(id) => updateCharacter("eyebrows", id)}
            category="eyebrows"
          />
        ))}
      </Section>

      {/* Noses */}
      <Section title="👃 Noses">
        {getFlatAssets("noses").map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.noses === option.id}
            onClick={(id) => updateCharacter("noses", id)}
            category="noses"
          />
        ))}
      </Section>

      {/* Facial Hair */}
      <Section title="🧔 Facial Hair">
        {getFlatAssets("facial_hair").map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.facial_hair === option.id}
            onClick={(id) => updateCharacter("facial_hair", id)}
            category="facial_hair"
          />
        ))}
      </Section>

      {/* Clothing Layers */}
      <Section title="👕 Vests">
        {getLayeredAssets("clothes", 0).map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.vest === option.id}
            onClick={(id) => updateCharacter("vest", id)}
            category="clothes"
          />
        ))}
      </Section>

      <Section title="👔 Shirts">
        {getLayeredAssets("clothes", 1).map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.shirt === option.id}
            onClick={(id) => updateCharacter("shirt", id)}
            category="clothes"
          />
        ))}
      </Section>

      <Section title="🧥 Jackets">
        {getLayeredAssets("clothes", 2).map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.jacket === option.id}
            onClick={(id) => updateCharacter("jacket", id)}
            category="clothes"
          />
        ))}
      </Section>

      {/* Accessories */}
      <Section title="💎 Earings">
        {getLayeredAssets("accessories", 0).map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.earings === option.id}
            onClick={(id) => updateCharacter("earings", id)}
            category="accessories"
          />
        ))}
      </Section>

      <Section title="🕶️ Glasses">
        {getLayeredAssets("accessories", 1).map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.glasses === option.id}
            onClick={(id) => updateCharacter("glasses", id)}
            category="accessories"
          />
        ))}
      </Section>

      <Section title="🎩 Hats">
        {getLayeredAssets("accessories", 2).map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.hat === option.id}
            onClick={(id) => updateCharacter("hat", id)}
            category="accessories"
          />
        ))}
      </Section>

      <Section title="📿 Neckwear">
        {getLayeredAssets("accessories", 3).map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={character.neckwear === option.id}
            onClick={(id) => updateCharacter("neckwear", id)}
            category="accessories"
          />
        ))}
      </Section>
    </div>
  );
};

export default CustomizationPanel;
