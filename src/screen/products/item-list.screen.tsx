import { FlatList, View } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import ItemCompoent from "../../components/item";
import { Items } from "../../models/item.model";
import { MainNavigation } from "../../navigation/main.navigation.type";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProductsReducer } from "../../store/reducers/item.reducer";

export default function ItemListScreen({
  navigation,
}: MainNavigation<"ItemList">) {
  const { products, isLoadin } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsReducer);
  }, []);
  const onRefresh = useCallback(() => {
    dispatch(getProductsReducer);
  }, [dispatch]);

  const onView = useCallback((item: Items) => {
    alert(item.description);
  }, []);
  return (
    <View flex={1}>
      <FlatList
        data={products}
        refreshControl={
          <RefreshControl refreshing={isLoadin} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <ItemCompoent onView={onView} item={item} />}
      />
    </View>
  );
}
