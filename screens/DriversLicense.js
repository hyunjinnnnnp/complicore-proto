import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

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
const DetailRow = styled.View`
  flex: 1;
  flex-direction: row;
  border: 0.5px solid ${colors.gray};
  align-items: center;
`;
const LightText = styled.Text`
  flex: 1;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1.5px;
  line-height: 25px;
  padding: 5px 10px;
`;
const SmallText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.2px;
  line-height: 20px;
  padding: 5px 10px;
`;
const BoldText = styled.Text`
  font-weight: 800;
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

const DriversLicense = () => (
  <Container>
    <ImageContainer>
      <Image source={require("../license.png")} resizeMode="contain" />
    </ImageContainer>
    <LicenseDetail>
      <DetailRow>
        <LightText>DL: {`\n`}123456789</LightText>
        <LightText>Exp: {`\n`}07/11/2025</LightText>
        <LightText>Class: {`\n`}C</LightText>
      </DetailRow>
      <DetailRow>
        <LightText>First Name: {`\n`}John</LightText>
        <LightText>Last Name: {`\n`}Doe</LightText>
      </DetailRow>
      <DetailRow>
        <SmallText>
          <BoldText>Address:</BoldText> {`\n`}0123 Anystreet, Anytown, CA012345
        </SmallText>
      </DetailRow>
      <DetailRow>
        <SmallText>
          <BoldText>DOB:</BoldText> {`\n`}09/05/1993
        </SmallText>
        <SmallText>
          <BoldText>Sex:</BoldText> {`\n`}Male
        </SmallText>
        <SmallText>
          <BoldText>Hair:</BoldText> {`\n`}BRN
        </SmallText>
      </DetailRow>
      <DetailRow>
        <SmallText>
          <BoldText>Eyes:</BoldText> {`\n`}BLUE
        </SmallText>
        <SmallText>
          <BoldText>Height:</BoldText> {`\n`}6'0"
        </SmallText>
        <SmallText>
          <BoldText>Issued:</BoldText> {`\n`}07/11/2015
        </SmallText>
      </DetailRow>
    </LicenseDetail>
    <ConfirmBtn>
      <BtnText>CONFIRM</BtnText>
    </ConfirmBtn>
  </Container>
);

export default DriversLicense;
