import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import Status from "./Status";
import { colors } from "../colors";
import { FONT_BOLD } from "../constants";

const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0;
  background-color: white;
  margin-right: 1px;
`;

const ScreenBtn = ({ onPress, width, height, title, icon, status }) => {
  return (
    <Btn style={{ width, height }} onPress={onPress}>
      <FontAwesome name={icon} size={30} color={colors.purple} />
      <Text
        style={{ textAlign: "center", fontWeight: FONT_BOLD, fontSize: 12 }}
      >
        {title.replace(" ", "\n")}
      </Text>
      {status ? <Status state={status} /> : null}
    </Btn>
  );
};
export default ScreenBtn;
