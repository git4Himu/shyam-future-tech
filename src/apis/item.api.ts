import Axios from "../axios";
import { Items } from "../models/item.model";

export function getProductsAPI() {
  return Axios.get<{
    [id: string]: Items;
  }>("items.json");
}
