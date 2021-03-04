import { action, makeObservable, observable } from "mobx";
import React from "react";
import { ShopsRefItem } from "../../refs/refs-api-models";
import { DayData, ShopDayData } from "../schedule-api-models";
import { BREAK_ID, DAYS } from "../schedule-constants";
import { DayModel, ShopDayModel } from "../schedule-types";
import { ShopDayStore } from "./shop-day-store";

interface DayStoreParams {
  dayOfWeek: number;
  data: DayData | undefined;
  shopsRef: ShopsRefItem[];
}

const createShop = (shopsData: ShopDayData[] | undefined) => (
  refItem: ShopsRefItem,
): ShopDayModel =>
  new ShopDayStore({
    shopId: refItem.id,
    displayName: refItem.shopName,
    data: shopsData?.find((item) => item.shopId === refItem.id),
  });

export class DayStore implements DayModel {
  dayOfWeek: number;

  @observable
  active: boolean = false;

  dayName: string;

  shops: ShopDayModel[];

  breaks = new ShopDayStore({
    shopId: BREAK_ID,
    displayName: "Перерыв",
  });

  constructor({ dayOfWeek, data, shopsRef }: DayStoreParams) {
    this.dayOfWeek = dayOfWeek;
    this.dayName = DAYS.get(dayOfWeek)!;
    this.active = data?.active ?? false;

    this.shops = shopsRef.map(createShop(data?.shops));

    makeObservable(this);
  }

  @action.bound
  toggleActive() {
    this.active = !this.active;
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DayContext = React.createContext<DayModel>({} as any);
