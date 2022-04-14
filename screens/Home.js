import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, FlatList } from "react-native";
import { colors } from "../colors";
import ScreenBtn from "../components/ScreenBtn";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ScreenBtnWrapper = styled.View`
  flex: 2.5;
  border-color: ${colors.gray};
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

const EmptySpace = styled.View`
  flex: 1;
`;

const DATA = [
  {
    title: "Drivers License",
    icon: "id-card-o",
    status: "Expired",
  },
  {
    title: "Vehicle Insurance",
    icon: "shield",
    status: "Pending",
  },
  {
    title: "Vehicle Proof",
    icon: "car",
    status: "Approved",
  },
  {
    title: "Training Programs",
    icon: "exchange",
    status: "In Progress",
  },
  {
    title: "Support Center",
    icon: "wechat",
  },
  {
    title: "Your Settings",
    icon: "cog",
  },
];

const Home = ({ navigation: { navigate } }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  return (
    <Container>
      <Header>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>Hello, John</Text>
        <Text style={{ fontSize: 16, fontWeight: "500", marginVertical: 10 }}>
          Valued Driver Since 2017
        </Text>
        <Text style={{ fontWeight: "500" }}>
          Provider Name: Med Transport Services
        </Text>
      </Header>
      <ScreenBtnWrapper>
        <FlatList
          onLayout={(e) => {
            const {
              nativeEvent: {
                layout: { width, height },
              },
            } = e;
            setContainerHeight(height);
            setContainerWidth(width);
          }}
          data={DATA}
          renderItem={({ item }) => (
            <ScreenBtn
              onPress={() => {
                if (item.title === "Drivers License") {
                  navigate("DriversLicense");
                }
              }}
              width={containerWidth / 2}
              height={containerHeight / 3}
              title={item.title}
              icon={item.icon}
              status={item.status}
            />
          )}
          keyExtractor={(_, index) => index}
          numColumns={2}
        />
      </ScreenBtnWrapper>
      <EmptySpace />
    </Container>
  );
};

export default Home;
