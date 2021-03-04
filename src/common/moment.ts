import moment from "moment";
import { TIME_FORMAT } from "./constants";

export function toMomemt(time?: string) {
  return moment(time ?? "00:00", TIME_FORMAT);
}
