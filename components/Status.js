import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { FONT_BOLD } from "../constants";

const Column = styled.View``;
const State = styled.Text`
  font-weight: ${FONT_BOLD};
  font-size: 14px;
`;
// TO DO: Enum
const Text = styled.Text`
  color: ${(props) =>
    props.state === "Expired"
      ? colors.red
      : props.state === "Pending"
      ? colors.yellow
      : props.state === "Approved"
      ? colors.green
      : props.state === "In Progress"
      ? colors.yellow
      : colors.black};
`;

const Status = ({ state }) => (
  <Column>
    <State>
      Status: <Text state={state}>{state}</Text>
    </State>
  </Column>
);

export default Status;
