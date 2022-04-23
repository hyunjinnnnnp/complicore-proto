import React, { useState } from "react";
import styled from "styled-components/native";
import { colors } from "../globalStyles";
import DrivingLicenseItem from "../components/DrivingLicenseItem";

const Wrapper = styled.View`
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
const ItemsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom-color: ${colors.gray};
  border-bottom-width: 0.5px;
`;
const Confirm = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.TouchableOpacity`
  width: 80%;
  height: 50%;
  background-color: ${colors.purple};
  align-items: center;
  justify-content: center;
`;
const BtnText = styled.Text`
  color: ${colors.white};
  font-weight: 600;
  font-size: 16px;
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
    <Wrapper>
      <ImageContainer>
        <Image source={require("../license.png")} resizeMode="contain" />
      </ImageContainer>
      <ItemsContainer
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
      </ItemsContainer>
      <Confirm>
        <Btn>
          <BtnText>CONFIRM</BtnText>
        </Btn>
      </Confirm>
    </Wrapper>
  );
};

export default DriversLicense;
