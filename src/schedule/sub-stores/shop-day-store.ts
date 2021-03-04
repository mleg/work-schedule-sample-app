import { action, makeObservable, observable } from "mobx";
import { BreaksData, IntervalData, ShopDayData } from "../schedule-api-models";
import { IntervalModel, ShopDayModel } from "../schedule-types";
import { IntervalStore } from "./interval-store";

interface ShopDayParams {
  shopId: number;
  data?: ShopDayData | BreaksData;
  displayName: string;
}

const createInterval = (shop: ShopDayModel) => (data: IntervalData) =>
  new IntervalStore(shop, data);

function initIntervals(shop: ShopDayModel, intervalsData: IntervalData[]) {
  return intervalsData.length > 0
    ? intervalsData.map(createInterval(shop))
    : [new IntervalStore(shop, null)];
}

export class ShopDayStore implements ShopDayModel {
  @observable
  active: boolean = false;

  @observable.ref
  intervals: IntervalModel[] = [];

  constructor(private readonly params: ShopDayParams) {
    this.active = this.initialActive;

    this.intervals = initIntervals(this, params.data?.intervals ?? []);

    makeObservable(this);
  }

  private get initialActive(): boolean {
    return this.params.data?.active ?? false;
  }

  get shopId(): number {
    return this.params.shopId;
  }

  get displayName(): string {
    return this.params.displayName;
  }

  toggleActive = action(() => {
    this.active = !this.active;
  });

  @action.bound
  addInterval(): void {
    this.intervals = [...this.intervals, new IntervalStore(this, null)];
  }

  @action.bound
  removeInterval(intervalId: string): void {
    this.intervals = this.intervals.filter(({ id }) => id !== intervalId);
  }
}
