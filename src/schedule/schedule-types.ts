import { Moment } from "moment";

export interface DayModel {
  dayOfWeek: number;
  dayName: string;
  active: boolean;
  shops: ShopDayModel[];
  breaks: ShopDayModel;
  toggleActive(): void;
}

export interface ShopDayModel {
  shopId: number;
  active: boolean;
  displayName: string;
  intervals: IntervalModel[];
  toggleActive(): void;
  addInterval(): void;
  removeInterval(intervalId: string): void;
}

export interface IntervalModel {
  shop: ShopDayModel;
  id: string;
  start: MomentModel;
  end: MomentModel;
  comparisonString: string;
}

export interface MomentModel {
  value: Moment | null;
  set(newValue: Moment | null): void;
}
