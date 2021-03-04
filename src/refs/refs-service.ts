import { delay, to } from "../common/utils";
import { ShopsRefData } from "./refs-api-models";

/* eslint-disable class-methods-use-this */
export class RefsService {
  async getShops(): Promise<ShopsRefData | undefined> {
    await delay(400);
    const [module] = await to(import("../api/mocks/shops-ref-mock"));
    return module?.shopsRefMock;
  }
}
