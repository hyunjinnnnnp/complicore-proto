import React from "react";
import { Text, Platform } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import Status from "./Status";
import { colors } from "../globalStyles";
import { pixelSizeVertical } from "../globalStyles";

const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-evenly;
  padding: ${pixelSizeVertical(15)}px 0;
  background-color: white;
  margin-right: 1px;
  margin-bottom: 1px;
`;

interface IScreenBtnProps {
  onPress: () => void;
  width: number;
  height: number;
  title: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
  status: string;
}

const ScreenBtn: React.FC<IScreenBtnProps> = ({
  onPress,
  width,
  height,
  title,
  icon,
  status,
}) => {
  return (
    <Btn style={{ width, height }} onPress={onPress}>
      <FontAwesome name={icon} size={30} color={colors.purple} />
      <Text
        style={{
          textAlign: "center",
          fontWeight: Platform.OS === "ios" ? "600" : "700",
          fontSize: 14,
        }}
      >
        {title.replace(" ", "\n")}
      </Text>
      {status ? <Status state={status} /> : null}
    </Btn>
  );
};
export default ScreenBtn;
