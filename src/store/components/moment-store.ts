import { action, makeObservable, observable } from "mobx";
import { Moment } from "moment";
import { toMomemt } from "../../common/moment";
import { MomentModel } from "../../schedule/schedule-types";

export class MomentStore implements MomentModel {
  @observable
  value: Moment | null = null;

  constructor(initial?: string) {
    this.value = toMomemt(initial);
    makeObservable(this);
  }

  @action.bound
  set(newValue: Moment | null) {
    this.value = newValue;
  }
}
