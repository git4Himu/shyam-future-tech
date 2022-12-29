import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Reac from "react";
import {  TouchableOpacity } from "react-native";
import { Items } from "../models/item.model";
export interface ItemCompoent {
  item: Items;
  onView:( item: Items) => void
}

const ItemCompoent = ({ item, onView }: ItemCompoent) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onView(item)}>
        <HStack space={3} m="2" background={"white"} p={3} flex={1}>
          <Box>
            <Image
              size="20"
              rounded={"md"}
              source={{
                uri: item.download_url.length
                  ? item.download_url
                  : "https://img.icons8.com/ios/512/open-box.png",
              }}
              alt="product img"
            />
          </Box>
          <VStack flex={1}>
            <Heading size={"md"}>{item.author || "No Name"}</Heading>
            <View flex={1}>
              <Text bold fontSize={"sm"} color="gray.400">
                {item.description || "No Description"}
              </Text>
            </View>
          </VStack>
        </HStack>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ItemCompoent);
