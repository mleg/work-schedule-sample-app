import { action, computed, makeObservable, observable } from "mobx";
import { ShopsRefItem } from "../refs/refs-api-models";
import { RefsStore } from "../refs/refs-store";
import { LoaderStore } from "../store/components/loader-store";
import { ShowHideStore } from "../store/components/show-hide-store";
import { ScheduleData } from "./schedule-api-models";
import { DAYS } from "./schedule-constants";
import { scheduleToServerData } from "./schedule-fns";
import { ScheduleService } from "./schedule-service";
import { DayModel } from "./schedule-types";
import { DayStore } from "./sub-stores/day-store";

interface Deps {
  refs: RefsStore;
}

const createDaysStores = (data: ScheduleData, shopsRef: ShopsRefItem[]) => (
  dayOfWeek: number,
): DayModel => {
  const dayData = data?.days.find((item) => item.dayOfWeek === dayOfWeek);
  return new DayStore({ data: dayData, dayOfWeek, shopsRef });
};

export class ScheduleStore {
  @observable.ref
  days: DayModel[] = [];

  loader = new LoaderStore();

  resultsModal = new ShowHideStore();

  private initialJson: string = "";

  @observable
  private readonly service = new ScheduleService();

  constructor(private readonly deps: Deps) {
    makeObservable(this);
  }

  @computed
  private get shopsRef(): ShopsRefItem[] {
    return this.deps.refs.shops.items;
  }

  @computed
  get hasChanges(): boolean {
    return this.days.length > 0 && this.json !== this.initialJson;
  }

  @computed
  get json(): string {
    return JSON.stringify(scheduleToServerData(this), null, 2);
  }

  @action
  private applyData(data: ScheduleData) {
    this.days = Array.from(DAYS.keys()).map(
      createDaysStores(data, this.shopsRef),
    );
    this.initialJson = JSON.stringify(scheduleToServerData(this), null, 2);
  }

  private async fetchSchedule() {
    const data = await this.service.getSchedule();
    if (data) {
      this.applyData(data);
    }
  }

  fetchData = this.loader.run(() =>
    Promise.all([this.deps.refs.shops.fetchItems(), this.fetchSchedule()]),
  );

  saveData() {
    this.resultsModal.show();
  }
}
