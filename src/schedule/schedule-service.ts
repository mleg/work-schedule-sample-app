import { delay, to } from "../common/utils";
import { ScheduleData } from "./schedule-api-models";

/* eslint-disable class-methods-use-this */
export class ScheduleService {
  async getSchedule(): Promise<ScheduleData | undefined> {
    await delay(700);
    const [module] = await to(import("../api/mocks/schedule-mock"));
    return module?.scheduleMock;
  }
}
