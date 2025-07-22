import React from "react";
import {
  getAssetById,
  getEaringsAsset,
  getGlassesAsset,
  getHatAsset,
  getNeckwearAsset,
  getVestAsset,
  getShirtAsset,
  getJacketAsset
} from "../config/characterAssets";

const CharacterPreview = ({ character }) => {
  // Get asset objects for each body part
  const bodyAsset = getAssetById("body", character.body);
  const eyesAsset = getAssetById("eyes", character.eyes);
  const hairAsset = getAssetById("hair", character.hair);
  const mouthAsset = getAssetById("mouths", character.mouths);
  const eyebrowsAsset = getAssetById("eyebrows", character.eyebrows);
  const noseAsset = getAssetById("noses", character.noses);
  const facialHairAsset = getAssetById("facial_hair", character.facial_hair);

  // Get clothing assets using specific layer functions
  const vestAsset = getVestAsset(character.vest);
  const shirtAsset = getShirtAsset(character.shirt);
  const jacketAsset = getJacketAsset(character.jacket);

  // Get accessory assets using specific layer functions
  const earingsAsset = getEaringsAsset(character.earings);
  const glassesAsset = getGlassesAsset(character.glasses);
  const hatAsset = getHatAsset(character.hat);
  const neckwearAsset = getNeckwearAsset(character.neckwear);

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-sky-200 to-green-200 rounded-xl p-8 min-h-[500px] relative overflow-hidden">
      <div className="relative w-64 h-80">
        {/* Base Layer - Body */}
        {bodyAsset?.path && (
          <img
            src={bodyAsset.path}
            alt="Body"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 1 }}
            onLoad={() => console.log("Body loaded:", bodyAsset.path)}
            onError={(e) => console.error("Body failed to load:", bodyAsset.path, e)}
          />
        )}

        {/* Clothing Layer 1 - Vest */}
        {vestAsset?.path && (
          <img
            src={vestAsset.path}
            alt="Vest"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 2 }}
          />
        )}

        {/* Clothing Layer 2 - Shirt */}
        {shirtAsset?.path && (
          <img
            src={shirtAsset.path}
            alt="Shirt"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 3 }}
          />
        )}

        {/* Clothing Layer 3 - Jacket */}
        {jacketAsset?.path && (
          <img
            src={jacketAsset.path}
            alt="Jacket"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 4 }}
          />
        )}

        {/* Facial Features */}
        {noseAsset?.path && (
          <img
            src={noseAsset.path}
            alt="Nose"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 5 }}
          />
        )}

        {eyesAsset?.path && (
          <img
            src={eyesAsset.path}
            alt="Eyes"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 6 }}
          />
        )}

        {eyebrowsAsset?.path && (
          <img
            src={eyebrowsAsset.path}
            alt="Eyebrows"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 7 }}
          />
        )}

        {mouthAsset?.path && (
          <img
            src={mouthAsset.path}
            alt="Mouth"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 8 }}
          />
        )}

        {/* Hair */}
        {hairAsset?.path && (
          <img
            src={hairAsset.path}
            alt="Hair"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 9 }}
          />
        )}

        {/* Facial Hair */}
        {facialHairAsset?.path && (
          <img
            src={facialHairAsset.path}
            alt="Facial Hair"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 10 }}
          />
        )}

        {/* Accessories */}
        {earingsAsset?.path && (
          <img
            src={earingsAsset.path}
            alt="Earings"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 11 }}
          />
        )}

        {neckwearAsset?.path && (
          <img
            src={neckwearAsset.path}
            alt="Neckwear"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 12 }}
          />
        )}

        {glassesAsset?.path && (
          <img
            src={glassesAsset.path}
            alt="Glasses"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 13 }}
          />
        )}

        {/* Hat (top layer) */}
        {hatAsset?.path && (
          <img
            src={hatAsset.path}
            alt="Hat"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 14 }}
          />
        )}

        {/* Fallback if no images load */}
        {!bodyAsset?.path && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🧍</div>
              <p className="text-gray-600">Character Preview</p>
              <p className="text-sm">Images loading...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterPreview;
