import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Items } from "../models/item.model";
export type MainNavigationType = {
  ItemList: undefined;
};
export type MainNavigation<Screen extends keyof MainNavigationType> =
  NativeStackScreenProps<MainNavigationType, Screen>;
