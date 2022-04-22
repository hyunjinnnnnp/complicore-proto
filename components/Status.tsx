import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { colors } from "../globalStyles";
import { fontPixel } from "../globalStyles";
import { DriversStatus } from "../types";

const Column = styled.View``;
const State = styled.Text`
  font-weight: ${Platform.OS === "ios" ? "600" : "700"};
  font-size: ${fontPixel(10)}px;
`;

const Text = styled.Text<{ state: string }>`
  color: ${({ state }) =>
    state === DriversStatus.Expired
      ? colors.red
      : state === DriversStatus.Pending
      ? colors.yellow
      : state === DriversStatus.Approved
      ? colors.green
      : state === DriversStatus.InProgress
      ? colors.yellow
      : colors.black};
`;

interface IStatusProps {
  state?: string;
}

export const Status: React.FC<IStatusProps> = ({ state }) => (
  <Column>
    <State>
      Status: <Text state={state}>{state}</Text>
    </State>
  </Column>
);

export default Status;
