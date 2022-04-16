import { Dimensions, PixelRatio } from "react-native";

const BASIC_DIMENSIONS = {
  width: 347,
  height: 620,
};

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / BASIC_DIMENSIONS.width;
const heightBaseScale = SCREEN_HEIGHT / BASIC_DIMENSIONS.height;

const normalize = (size, base = "width") => {
  const newSize =
    base === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const widthPixel = (size) => {
  return normalize(size, "width");
};

export const heightPixel = (size) => {
  return normalize(size, "height");
};

export const fontPixel = (size) => {
  return heightPixel(size);
};

export const pixelSizeVertical = (size) => {
  return heightPixel(size);
};

export const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};
