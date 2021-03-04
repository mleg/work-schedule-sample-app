import { action, makeObservable, observable } from "mobx";
import { ShopsRefItem } from "../refs-api-models";
import { RefsService } from "../refs-service";

export class ShopsRefStore {
  @observable.ref
  items: ShopsRefItem[] = [];

  constructor(private readonly service: RefsService) {
    makeObservable(this);
  }

  @action
  private setItems(items: ShopsRefItem[]) {
    this.items = items;
  }

  async fetchItems() {
    const data = await this.service.getShops();
    if (data) {
      this.setItems(data.shops);
    }
  }
}
