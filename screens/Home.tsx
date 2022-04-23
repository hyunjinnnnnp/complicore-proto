import React, { useState } from "react";
import { FlatList, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { colors } from "../globalStyles";
import ScreenBtn from "../components/ScreenBtn";
import { fontPixel, pixelSizeVertical } from "../globalStyles";
import { HomeScreenProps } from "../navigations/types";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Greeting = styled.Text`
  font-size: ${fontPixel(20)}px;
  font-weight: ${Platform.OS === "ios" ? "300" : "700"};
`;
const Validation = styled.Text`
  font-size: ${fontPixel(10)}px;
  font-weight: ${Platform.OS === "ios" ? "500" : "700"};
  margin: ${pixelSizeVertical(10)}px 0;
`;
const Provider = styled.Text`
  font-weight: ${Platform.OS === "ios" ? "500" : "700"};
`;
const ScreenWrapper = styled.View`
  flex: 2.5;
  border-top-color: ${colors.gray};
  border-top-width: 1px;
  border-bottom-color: ${colors.gray};
  border-bottom-width: 1px;
`;
const ScreenBg = styled.View`
  background-color: ${colors.gray};
`;
const EmptySpace = styled.View`
  flex: 1;
`;

interface IFlatListContent {
  title: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
  status?: string;
}

const flatListContentsData: IFlatListContent[] = [
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

const Home = ({ navigation: { navigate } }: HomeScreenProps) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  return (
    <Container>
      <Header>
        <Greeting>Hello, John</Greeting>
        <Validation>Valued Driver Since 2017</Validation>
        <Provider>Provider Name: Med Transport Services</Provider>
      </Header>
      <ScreenWrapper>
        <FlatList
          // style={{ backgroundColor: colors.gray }}
          // RESPONSIVE WEB ???
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
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
        />
      </ScreenWrapper>
      <EmptySpace />
    </Container>
  );
};

export default Home;
