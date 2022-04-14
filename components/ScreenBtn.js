import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import Status from "./Status";
import { colors } from "../colors";

const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-evenly;
  border: 0.5px solid ${colors.gray};
  padding: 5px 0;
`;

const ScreenBtn = ({ onPress, width, height, title, icon, status }) => {
  return (
    <Btn style={{ width, height }} onPress={onPress}>
      <FontAwesome name={icon} size={38} color={colors.purple} />
      <Text style={{ textAlign: "center", fontWeight: "600" }}>
        {title.replace(" ", "\n")}
      </Text>
      {status ? <Status state={status} /> : null}
    </Btn>
  );
};
export default ScreenBtn;
