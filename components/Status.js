import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const Column = styled.View``;
const State = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;
// TO DO: Enum
const Text = styled.Text`
  color: ${(props) =>
    props.state === "Expired"
      ? colors.red
      : "Pending"
      ? colors.yellow
      : "Approved"
      ? colors.green
      : "In Progress"
      ? colors.yellow
      : "none"};
`;

const Status = ({ state }) => (
  <Column>
    <State>
      Status: <Text state={state}>{state}</Text>
    </State>
  </Column>
);

export default Status;
