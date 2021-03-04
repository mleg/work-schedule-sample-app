import { action, makeObservable, observable } from "mobx";

export class ShowHideStore {
  @observable
  visible: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  set(value: boolean) {
    this.visible = value;
  }

  toggle = () => {
    this.set(!this.visible);
  };

  hide = () => {
    this.set(false);
  };

  show = () => {
    this.set(true);
  };
}
