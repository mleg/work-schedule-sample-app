import { computed, makeObservable } from "mobx";
import { generateId } from "../../common/utils";
import { MomentStore } from "../../store/helper-stores/moment-store";
import { IntervalData } from "../schedule-api-models";
import { IntervalModel, MomentModel, ShopDayModel } from "../schedule-types";

export class IntervalStore implements IntervalModel {
  readonly id: string = generateId();

  readonly start: MomentModel;

  readonly end: MomentModel;

  constructor(readonly shop: ShopDayModel, data: IntervalData | null) {
    this.start = new MomentStore(data?.start);
    this.end = new MomentStore(data?.end);
    makeObservable(this);
  }

  @computed
  get comparisonString(): string {
    return JSON.stringify([String(this.start), String(this.end)]);
  }
}
