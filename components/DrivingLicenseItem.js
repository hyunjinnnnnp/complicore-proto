import styled from "styled-components/native";
import { colors } from "../colors";
import { FONT_BOLD } from "../constants";

const Item = styled.View`
  border: 0.5px solid ${colors.gray};
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text`
  font-weight: 500;
  padding: 5px 10px;
`;

const LightText = styled(Text)`
  font-size: 15px;
  letter-spacing: 1.5px;
  line-height: 15px;
`;
const SmallText = styled(Text)`
  font-size: 14px;
  letter-spacing: 1.2px;
  line-height: 10px;
`;
const BoldText = styled.Text`
  font-weight: ${FONT_BOLD};
  padding: 5px 10px;
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
      ? containerWidth / 2 - 1
      : index === 5
      ? containerWidth - 1
      : containerWidth / 3 - 1;
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
