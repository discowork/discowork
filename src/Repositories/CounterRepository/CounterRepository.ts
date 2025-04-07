import { model, ObjectId, Schema } from "mongoose";

import { CounterType } from "./CounterRepository.types";

export const CounterSchema = new Schema<CounterType>({
  quantity: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

export class CounterRepository {
  private CounterModel = model<CounterType>("Counter", CounterSchema);

  public async create(counter: CounterType): Promise<CounterType> {
    return this.CounterModel.create(counter);
  }

  public async findAll(): Promise<CounterType[]> {
    return this.CounterModel.find().exec();
  }

  public async update(counter: CounterType): Promise<void> {
    this.CounterModel.findById(counter.id).updateOne(counter).exec();
  }
}
