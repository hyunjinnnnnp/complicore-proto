import { Dimensions, PixelRatio } from "react-native";

export const colors = {
  red: "#c0392b",
  yellow: "#f39c12",
  green: "#2ecc71",
  purple: "#322D86",
  lightGray: "rgba(255, 255, 255, 0.8)",
  gray: "#bdc3c7",
  black: "#1e272e",
  white: "white",
};

const BASIC_DIMENSIONS = {
  width: 347,
  height: 620,
};

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / BASIC_DIMENSIONS.width;
const heightBaseScale = SCREEN_HEIGHT / BASIC_DIMENSIONS.height;

interface normalize {
  (size: number, base?: string): number;
}

const normalize: normalize = (size, base = "width") => {
  const newSize =
    base === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const widthPixel: normalize = (size) => {
  return normalize(size, "width");
};

export const heightPixel: normalize = (size) => {
  return normalize(size, "height");
};

export const fontPixel: normalize = (size) => {
  return heightPixel(size);
};

export const pixelSizeVertical: normalize = (size) => {
  return heightPixel(size);
};

export const pixelSizeHorizontal: normalize = (size) => {
  return widthPixel(size);
};
