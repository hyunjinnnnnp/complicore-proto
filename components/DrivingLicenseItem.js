import styled from "styled-components/native";
import { colors } from "../colors";

const Item = styled.View`
  flex: 1;
  justify-content: space-evenly;
  border-color: ${colors.gray};
  border-top-width: 0.5px;
  border-right-width: 0.5px;
`;
const Text = styled.Text`
  font-weight: 600;
  padding: 0 10px;
`;
const LightText = styled(Text)`
  font-size: 15px;
  letter-spacing: 1.5px;
`;
const SmallText = styled(Text)`
  font-size: 14px;
  letter-spacing: 1.2px;
`;
const BoldText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  padding: 0 10px;
`;
const DrivingLicenseItem = ({
  title,
  content,
  index,
  containerWidth,
  containerHeight,
}) => {
  const flexBasis =
    index === 3 || index === 4
      ? containerWidth / 2 - 2
      : index === 5
      ? containerWidth
      : containerWidth / 3 - 2;
  const height = containerHeight / 5;

  return (
    <Item style={{ flexBasis, height }}>
      {index < 5 ? (
        <>
          <LightText>{title}:</LightText>
          <LightText>{content}</LightText>
        </>
      ) : (
        <>
          <BoldText>{title}:</BoldText>
          <SmallText>{content}</SmallText>
        </>
      )}
    </Item>
  );
};

export default DrivingLicenseItem;
