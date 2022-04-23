import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { colors, fontPixel, pixelSizeVertical } from "../globalStyles";

const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-evenly;
  padding: ${pixelSizeVertical(15)}px 0;
  background-color: white;
  margin-right: 1px;
  margin-bottom: 1px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: ${Platform.OS === "ios" ? "600" : "700"};
  font-size: ${fontPixel(10)}px;
`;

const TextColumn = styled.Text`
  font-weight: ${Platform.OS === "ios" ? "600" : "700"};
  font-size: ${fontPixel(10)}px;
`;

const enum DriversStatus {
  Expired = "Expired",
  Pending = "Pending",
  Approved = "Approved",
  InProgress = "In Progress",
}

const Text = styled.Text<{ status: string }>`
  color: ${(props) =>
    props.status === DriversStatus.Expired
      ? colors.red
      : props.status === DriversStatus.Pending
      ? colors.yellow
      : props.status === DriversStatus.Approved
      ? colors.green
      : props.status === DriversStatus.InProgress
      ? colors.yellow
      : colors.black};
`;

interface IScreenBtnProps {
  onPress: () => void;
  width: number;
  height: number;
  title: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
  status?: string;
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
      <Title>{title.replace(" ", "\n")}</Title>
      {status ? (
        <TextColumn>
          Status: <Text status={status}>{status}</Text>
        </TextColumn>
      ) : null}
    </Btn>
  );
};
export default ScreenBtn;
