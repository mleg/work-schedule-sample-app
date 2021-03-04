import React, { useContext } from "react";
import { RefsStore } from "../refs/refs-store";
import { ScheduleStore } from "../schedule/schedule-store";

export class Store {
  // STATIC section

  private static instance: Store | undefined;

  static get(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  // INSTANCE section

  refs = new RefsStore();

  schedule = new ScheduleStore(this);

  private constructor() {}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const StoreContext = React.createContext<Store>(Store.get());

export function useStore() {
  return useContext(StoreContext);
}
