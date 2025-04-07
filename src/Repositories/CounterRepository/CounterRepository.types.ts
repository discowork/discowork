import { ObjectId } from "mongoose";

export type CounterType = {
  id?: ObjectId;
  type: string;
  quantity: number;
};
