import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { colors } from "../globalStyles";
import { fontPixel } from "../globalStyles";

const Column = styled.View``;
const State = styled.Text`
  font-weight: ${Platform.OS === "ios" ? "600" : "700"};
  font-size: ${fontPixel(10)}px;
`;

const enum DriversStatus {
  Expired = "Expired",
  Pending = "Pending",
  Approved = "Approved",
  InProgress = "In Progress",
}

const Text = styled.Text<{ state: string }>`
  color: ${(props) =>
    props.state === DriversStatus.Expired
      ? colors.red
      : props.state === DriversStatus.Pending
      ? colors.yellow
      : props.state === DriversStatus.Approved
      ? colors.green
      : props.state === DriversStatus.InProgress
      ? colors.yellow
      : colors.black};
`;

interface IStatusProps {
  state: string;
}

export const Status: React.FC<IStatusProps> = ({ state }) => (
  <Column>
    <State>
      Status: <Text state={state}>{state}</Text>
    </State>
  </Column>
);

export default Status;
