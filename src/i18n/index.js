import en from "./en.json";
import hi from "./hi.json";
import ta from "./ta.json";
import kn from "./kn.json";
import ml from "./ml.json";

export const languages = [
  { code:"en", name:"English", native:"English", font:"Inter" },
  { code:"hi", name:"Hindi", native:"हिन्दी", font:"Noto Sans Devanagari" },
  { code:"ta", name:"Tamil", native:"தமிழ்", font:"Noto Sans Tamil" },
  { code:"kn", name:"Kannada", native:"ಕನ್ನಡ", font:"Noto Sans Kannada" },
  { code:"ml", name:"Malayalam", native:"മലയാളം", font:"Noto Sans Malayalam" }
];
export const messages = { en, hi, ta, kn, ml };
export function getMessage(locale, path) {
  return path.split(".").reduce((obj, key) => obj?.[key], messages[locale]) ?? path;
}
export function createTranslator(locale) {
  return (path) => getMessage(locale, path);
}
