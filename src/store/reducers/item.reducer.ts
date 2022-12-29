import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getProductsAPI,
} from "../../apis/item.api";
import { Items } from "../../models/item.model";

// Define a type for the slice state
interface ProductState {
  products: Items[];
  isLoadin: boolean;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  isLoadin: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Items[]>) => {
      state.products = [...action.payload];
    },

    setIsLoadin: (state, action: PayloadAction<boolean>) => {
      state.isLoadin = action.payload;
    },
  },
});

const {  setProducts, setIsLoadin } =
  productSlice.actions;
export default productSlice.reducer;

export const getProductsReducer = async (dispatch: any, getState: any) => {
  dispatch(setIsLoadin(true));
  const data = await getProductsAPI();
  const transformData: Items[] = [];
  for (const key in data.data) {
    transformData.push({ 
      ...data.data[key],
      id: key,
    });
  }
  dispatch(setIsLoadin(false));
  dispatch(setProducts(transformData));
};
