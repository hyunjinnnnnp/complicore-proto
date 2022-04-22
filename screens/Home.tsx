import React, { useState } from "react";
import { Text, FlatList, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { colors } from "../globalStyles";
import ScreenBtn from "../components/ScreenBtn";
import { fontPixel, pixelSizeVertical } from "../globalStyles";
import { HomeScreenProps } from "../types";

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
// FLAT LIST -> View ?????? 가능쓰?? numColumns 대체 가능쓰?????
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
        <Text
          style={{
            fontSize: fontPixel(24),
            fontWeight: Platform.OS === "ios" ? "300" : "700",
          }}
        >
          Hello, John
        </Text>
        <Text
          style={{
            fontSize: fontPixel(12),
            fontWeight: Platform.OS === "ios" ? "500" : "700",
            marginVertical: pixelSizeVertical(10),
          }}
        >
          Valued Driver Since 2017
        </Text>
        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "700" }}>
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
      </ScreenBtnWrapper>
      <EmptySpace />
    </Container>
  );
};

export default Home;
