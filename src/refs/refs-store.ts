import { RefsService } from "./refs-service";
import { ShopsRefStore } from "./sub-stores/shops-ref-store";

export class RefsStore {
  shops = new ShopsRefStore(new RefsService());
}
