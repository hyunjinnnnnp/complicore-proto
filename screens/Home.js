import React, { useState } from "react";
import { Text, FlatList, Platform, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import ScreenBtn from "../components/ScreenBtn";
import { FONT_BOLD } from "../constants";

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
  border: 1px solid ${colors.gray};
`;
const ScreenBg = styled.View`
  background-color: ${colors.gray};
`;
const EmptySpace = styled.View`
  flex: 1;
`;
const flatListContentsData = [
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
        <Text
          style={{
            fontSize: 24,
            fontWeight: Platform.OS === "ios" ? "300" : "700",
          }}
        >
          Hello, John
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: FONT_BOLD,
            marginVertical: 10,
          }}
        >
          Valued Driver Since 2017
        </Text>
        <Text style={{ fontWeight: FONT_BOLD }}>
          Provider Name: Med Transport Services
        </Text>
      </Header>
      <ScreenBtnWrapper>
        <FlatList
          scrollEnabled={false}
          onLayout={(e) => {
            const {
              nativeEvent: {
                layout: { width, height },
              },
            } = e;
            setContainerHeight(height);
            setContainerWidth(width);
          }}
          data={flatListContentsData}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: containerWidth,
                height: 1,
                backgroundColor: colors.gray,
              }}
            />
          )}
          renderItem={({ item }) => (
            <ScreenBg>
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
            </ScreenBg>
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
