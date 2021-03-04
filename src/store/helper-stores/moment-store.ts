import { action, makeObservable, observable } from "mobx";
import { Moment } from "moment";
import { TIME_FORMAT } from "../../common/constants";
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

  toString(): string {
    return (this.value ?? toMomemt()).format(TIME_FORMAT);
  }
}
