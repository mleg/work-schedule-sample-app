import { action, makeObservable, observable } from "mobx";

export class LoaderStore {
  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  private set(value: boolean) {
    this.loading = value;
  }

  run<Result extends any, Params extends any[]>(
    fn: (...params: Params) => Promise<Result>,
  ): typeof fn {
    return async (...params: Params) => {
      this.set(true);
      let result: Result;
      try {
        result = await fn(...params);
      } finally {
        this.set(false);
      }
      return result;
    };
  }
}
