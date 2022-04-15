import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import DrivingLicenseItem from "../components/DrivingLicenseItem";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
const ImageContainer = styled.View`
  flex: 1;
`;
const Image = styled.Image`
  align-self: center;
  flex: 1;
  width: 90%;
  height: 100%;
`;
const LicenseDetail = styled.View`
  flex: 1;
  border: 0.5px solid ${colors.gray};
`;

const ConfirmBtn = styled.TouchableOpacity`
  flex: 0.2;
  background-color: ${colors.purple};
  margin: 25px 30px;
  align-items: center;
  justify-content: center;
`;
const BtnText = styled.Text`
  color: ${colors.white};
  font-weight: 600;
  font-size: 20px;
`;

const DRIVERS_DATA = {
  DL: "123456789",
  Exp: "07/11/2025",
  Class: "C",
  FirstName: "John",
  LastName: "Doe",
  Address: "0123 Anystreet, Anytown, CA012345",
  DOB: "09/05/1993",
  Sex: "Male",
  Hair: "BRN",
  Eyes: "BLUE",
  Height: `6'0"`,
  Issued: "07/11/2015",
};

const DriversLicense = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  return (
    <Container>
      <ImageContainer>
        <Image source={require("../license.png")} resizeMode="contain" />
      </ImageContainer>
      <LicenseDetail
        onLayout={(e) => {
          const {
            nativeEvent: {
              layout: { width, height },
            },
          } = e;
          setContainerWidth(width);
          setContainerHeight(height);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {Object.entries(DRIVERS_DATA).map((data, index) => {
            const [title, content] = data;
            return (
              <DrivingLicenseItem
                title={title}
                content={content}
                key={index}
                index={index}
                containerWidth={containerWidth}
                containerHeight={containerHeight}
              />
            );
          })}
        </View>
      </LicenseDetail>
      <ConfirmBtn>
        <BtnText>CONFIRM</BtnText>
      </ConfirmBtn>
    </Container>
  );
};

export default DriversLicense;
