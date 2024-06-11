"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var avatarium2_exports = {};
__export(avatarium2_exports, {
  Avatar: () => Avatar
});
module.exports = __toCommonJS(avatarium2_exports);

// utils/randomizer.ts
function mulberry32(seed) {
  return function() {
    let t = seed += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
var getRandomAvatar = (avatars, seed) => {
  const randomFunc = seed !== void 0 ? mulberry32(seed) : Math.random;
  const randomIndex = Math.floor(randomFunc() * avatars.length);
  return avatars[randomIndex];
};

// avatarThemes.ts
var themes = {
  space: ["https://cdn-icons-png.flaticon.com/128/4165/4165908.png", "https://cdn-icons-png.flaticon.com/128/4165/4165470.png", "https://cdn-icons-png.flaticon.com/128/4166/4166265.png", "https://cdn-icons-png.flaticon.com/128/4166/4166263.png", "https://cdn-icons-png.flaticon.com/128/4166/4166258.png", "https://cdn-icons-png.flaticon.com/128/4166/4166266.png", "https://cdn-icons-png.flaticon.com/128/4165/4165859.png", "https://cdn-icons-png.flaticon.com/128/4165/4165990.png", "https://cdn-icons-png.flaticon.com/128/4165/4165722.png", "https://cdn-icons-png.flaticon.com/128/4165/4165494.png", "https://cdn-icons-png.flaticon.com/128/4165/4165539.png", "https://cdn-icons-png.flaticon.com/128/4165/4165551.png", "https://cdn-icons-png.flaticon.com/128/4165/4165578.png", "https://cdn-icons-png.flaticon.com/128/4165/4165599.png", "https://cdn-icons-png.flaticon.com/128/4165/4165623.png", "https://cdn-icons-png.flaticon.com/128/4165/4165635.png", "https://cdn-icons-png.flaticon.com/128/4165/4165657.png", "https://cdn-icons-png.flaticon.com/128/4165/4165673.png", "https://cdn-icons-png.flaticon.com/128/4165/4165735.png", "https://cdn-icons-png.flaticon.com/128/4165/4165762.png", "https://cdn-icons-png.flaticon.com/128/4165/4165815.png", "https://cdn-icons-png.flaticon.com/128/4165/4165829.png", "https://cdn-icons-png.flaticon.com/128/4165/4165848.png", "https://cdn-icons-png.flaticon.com/128/4165/4165876.png", "https://cdn-icons-png.flaticon.com/128/4165/4165897.png"],
  blob: ["https://cdn-icons-png.flaticon.com/128/4765/4765698.png", "https://cdn-icons-png.flaticon.com/128/4765/4765653.png", "https://cdn-icons-png.flaticon.com/128/4765/4765674.png", "https://cdn-icons-png.flaticon.com/128/4765/4765669.png", "https://cdn-icons-png.flaticon.com/128/4765/4765679.png", "https://cdn-icons-png.flaticon.com/128/4765/4765693.png", "https://cdn-icons-png.flaticon.com/128/4765/4765643.png", "https://cdn-icons-png.flaticon.com/128/4765/4765716.png", "https://cdn-icons-png.flaticon.com/128/4765/4765689.png", "https://cdn-icons-png.flaticon.com/128/4765/4765706.png", "https://cdn-icons-png.flaticon.com/128/4765/4765657.png", "https://cdn-icons-png.flaticon.com/128/4765/4765662.png", "https://cdn-icons-png.flaticon.com/128/4765/4765683.png", "https://cdn-icons-png.flaticon.com/128/4765/4765613.png", "https://cdn-icons-png.flaticon.com/128/4765/4765711.png"],
  user: ["https://cdn-icons-png.flaticon.com/128/219/219970.png", "https://cdn-icons-png.flaticon.com/128/219/219969.png", "https://cdn-icons-png.flaticon.com/128/219/219974.png", "https://cdn-icons-png.flaticon.com/128/219/219975.png", "https://cdn-icons-png.flaticon.com/128/219/219971.png", "https://cdn-icons-png.flaticon.com/128/219/219956.png", "https://cdn-icons-png.flaticon.com/128/219/219966.png", "https://cdn-icons-png.flaticon.com/128/219/219955.png", "https://cdn-icons-png.flaticon.com/128/219/219972.png", "https://cdn-icons-png.flaticon.com/128/219/219968.png", "https://cdn-icons-png.flaticon.com/128/219/219961.png", "https://cdn-icons-png.flaticon.com/128/219/219959.png", "https://cdn-icons-png.flaticon.com/128/219/219976.png", "https://cdn-icons-png.flaticon.com/128/219/219977.png", "https://cdn-icons-png.flaticon.com/128/219/219960.png"],
  monster: ["https://cdn-icons-png.flaticon.com/128/826/826586.png", "https://cdn-icons-png.flaticon.com/128/826/826576.png", "https://cdn-icons-png.flaticon.com/128/826/826610.png", "https://cdn-icons-png.flaticon.com/128/826/826601.png", "https://cdn-icons-png.flaticon.com/128/826/826580.png", "https://cdn-icons-png.flaticon.com/128/826/826590.png", "https://cdn-icons-png.flaticon.com/128/826/826569.png", "https://cdn-icons-png.flaticon.com/128/826/826588.png", "https://cdn-icons-png.flaticon.com/128/826/826599.png", "https://cdn-icons-png.flaticon.com/128/826/826608.png", "https://cdn-icons-png.flaticon.com/128/826/826567.png", "https://cdn-icons-png.flaticon.com/128/826/826603.png", "https://cdn-icons-png.flaticon.com/128/826/826596.png", "https://cdn-icons-png.flaticon.com/128/826/826605.png", "https://cdn-icons-png.flaticon.com/128/826/826604.png"],
  emoji: ["https://cdn-icons-png.flaticon.com/128/3525/3525084.png", "https://cdn-icons-png.flaticon.com/128/3525/3525065.png", "https://cdn-icons-png.flaticon.com/128/3525/3525114.png", "https://cdn-icons-png.flaticon.com/128/3525/3525130.png", "https://cdn-icons-png.flaticon.com/128/3525/3525097.png", "https://cdn-icons-png.flaticon.com/128/3524/3524856.png", "https://cdn-icons-png.flaticon.com/128/3525/3525089.png", "https://cdn-icons-png.flaticon.com/128/3525/3525015.png", "https://cdn-icons-png.flaticon.com/128/3524/3524953.png", "https://cdn-icons-png.flaticon.com/128/3525/3525037.png", "https://cdn-icons-png.flaticon.com/128/3525/3525195.png", "https://cdn-icons-png.flaticon.com/128/3525/3525067.png", "https://cdn-icons-png.flaticon.com/128/3525/3525019.png", "https://cdn-icons-png.flaticon.com/128/3524/3524797.png", "https://cdn-icons-png.flaticon.com/128/3524/3524884.png", "https://cdn-icons-png.flaticon.com/128/3525/3525033.png", "https://cdn-icons-png.flaticon.com/128/3525/3525077.png", "https://cdn-icons-png.flaticon.com/128/3525/3525104.png", "https://cdn-icons-png.flaticon.com/128/3524/3524789.png", "https://cdn-icons-png.flaticon.com/128/3525/3525010.png"]
};
var getAvatarsByTheme = (theme) => {
  return themes[theme] || [];
};

// Avatar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Avatar = ({
  theme,
  size = "sm",
  border = false,
  borderShape = "square",
  borderColor = "black",
  backgroundColor = "transparent",
  styleType,
  seed
}) => {
  const effectiveSeed = seed !== void 0 ? seed : Math.random() * 10;
  const avatars = getAvatarsByTheme(theme);
  console.log(avatars);
  const avatar = getRandomAvatar(avatars, effectiveSeed);
  console.log(avatar);
  const borderRadius = borderShape === "circle" ? "50%" : borderShape === "rounded" ? "10px" : "0";
  const avatarSize = size === "xs" ? "25px" : size === "sm" ? "50px" : size === "med" ? "100px" : size === "lg" ? "150px" : "200px";
  const defaultStyle = {
    border: border ? `2px solid ${borderColor}` : "none",
    borderRadius,
    width: avatarSize,
    height: avatarSize,
    padding: "2px",
    borderColor,
    backgroundColor
  };
  const style1 = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    backgroundColor: "white"
  };
  const style2 = {
    border: "8px solid black",
    backgroundColor: "white",
    borderRadius: "50%"
  };
  const style3 = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "20%"
  };
  const chosenStyle = styleType === "style1" ? style1 : styleType === "style2" ? style2 : styleType === "style3" ? style3 : defaultStyle;
  console.log("Avatar image path:", avatar);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: avatar, alt: "Avatar", style: chosenStyle });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar
});
