import { Camera } from "expo-camera";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "../colors";

const CAMERA_CONTAINER_PADDING = {
  vertical: 20,
  horizontal: 50,
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Header = styled.View`
  flex: 0.3;
`;

const CameraContainer = styled.View`
  flex: 1;
  padding: ${CAMERA_CONTAINER_PADDING.vertical}px
    ${CAMERA_CONTAINER_PADDING.horizontal}px;
  position: relative;
`;
const CameraBorderBox = styled.View`
  flex: 1;
`;
const TakePhotoBtnContainer = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const Btn = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid ${colors.purple};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const BtnBorder = styled.View`
  width: 80%;
  height: 80%;
  border: 1px solid ${colors.purple};
  border-radius: 50px;
`;
const Box = styled.View`
  position: absolute;
  width: 80px;
  height: 80px;
`;

export default function TakePhoto() {
  const navigation = useNavigation();
  const camera = useRef();
  const [cameraReady, setCameraReady] = useState(false);
  const [ok, setOk] = useState(false);
  const getPermissions = async () => {
    const { granted } = await Camera.requestCameraPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  const onCameraReady = () => setCameraReady(true);
  const takePhoto = async () => {
    if (camera.current && cameraReady) {
      const photo = await camera.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log(photo);
    }
  };

  const BORDER_WIDTH = 3;
  const CAMERA_BORDER_PADDING = 10;
  return (
    <Container>
      <StatusBar hidden={true} />
      <Header>
        <EvilIcons
          name="close"
          size={50}
          color="black"
          style={{ marginLeft: 20, marginTop: 40 }}
          onPress={() => navigation.goBack()}
        />
      </Header>
      <CameraContainer>
        <CameraBorderBox>
          <Box
            style={{
              top: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              left: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              borderColor: colors.purple,
              borderTopWidth: BORDER_WIDTH,
              borderLeftWidth: BORDER_WIDTH,
            }}
          />
          <Box
            style={{
              bottom: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              left: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              borderColor: colors.purple,
              borderBottomWidth: BORDER_WIDTH,
              borderLeftWidth: BORDER_WIDTH,
            }}
          />
          <Box
            style={{
              top: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              right: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              borderColor: colors.purple,
              borderTopWidth: BORDER_WIDTH,
              borderRightWidth: BORDER_WIDTH,
            }}
          />
          <Box
            style={{
              bottom: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              right: -BORDER_WIDTH - CAMERA_BORDER_PADDING,
              borderColor: colors.purple,
              borderBottomWidth: BORDER_WIDTH,
              borderRightWidth: BORDER_WIDTH,
            }}
          />
          <Camera
            style={{
              flex: 1,
            }}
            ref={camera}
            onCameraReady={onCameraReady}
          />
        </CameraBorderBox>
      </CameraContainer>
      <TakePhotoBtnContainer>
        <Btn onPress={takePhoto}>
          <BtnBorder />
        </Btn>
      </TakePhotoBtnContainer>
    </Container>
  );
}
