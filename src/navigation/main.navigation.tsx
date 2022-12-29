import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, useToast } from "native-base";
import { TouchableOpacity } from "react-native";
import ItemListScreen from "../screen/products/item-list.screen";
import { useAppSelector } from "../store/hooks";
import { MainNavigationType } from "./main.navigation.type";
const Stack = createNativeStackNavigator<MainNavigationType>();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ItemList" component={ItemListScreen} options={{
        title:"Items"
      }} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
