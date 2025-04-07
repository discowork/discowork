import { Command, CommandResponse } from "@discowork/interfaces";

import {
  CounterType,
  CounterRepository
} from "@/repositories/CounterRepository";

const SIMPLE_COUNTER_TYPE = "COUNTER";

export const command: Command = {
  name: "counter",
  description: "Contador simples salvando dados no mongodb",
  options: [],
  run: async (): CommandResponse => {
    const counterRepository = new CounterRepository();
    const counters = await counterRepository.findAll();

    const hasCounter = counters.find(
      (value) => value.type === SIMPLE_COUNTER_TYPE
    );

    if (hasCounter) {
      const counter: CounterType = {
        id: hasCounter.id,
        type: hasCounter.type,
        quantity: ++hasCounter.quantity
      };

      await counterRepository.update(counter);

      return {
        content: `O contador agora está em ${counter.quantity}`
      };
    }

    counterRepository.create({ quantity: 1, type: SIMPLE_COUNTER_TYPE });

    return {
      content: `O contador agora está em 1`
    };
  }
};
