import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  DriversLicense: undefined;
  TakePhoto: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export const enum DriversStatus {
  Expired = "Expired",
  Pending = "Pending",
  Approved = "Approved",
  InProgress = "In Progress",
}
