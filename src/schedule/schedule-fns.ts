import {
  BreaksData,
  DayData,
  IntervalData,
  ScheduleData,
  ShopDayData,
} from "./schedule-api-models";
import type { ScheduleStore } from "./schedule-store";
import { DayModel, IntervalModel, ShopDayModel } from "./schedule-types";

const intervalToServerData = ({ end, start }: IntervalModel): IntervalData => ({
  end: end.toString(),
  start: start.toString(),
});

const shopDayToServerdata = ({
  shopId,
  active,
  intervals,
}: ShopDayModel): ShopDayData => ({
  shopId,
  active,
  intervals: active ? intervals.map(intervalToServerData) : [],
});

const breaksToServerdata = ({
  active,
  intervals,
}: ShopDayModel): BreaksData => ({
  active,
  intervals: active ? intervals.map(intervalToServerData) : [],
});

function dayModelToServerData({
  dayOfWeek,
  active,
  shops,
  breaks,
}: DayModel): DayData {
  return {
    dayOfWeek,
    active,
    shops: shops.filter((shop) => shop.active).map(shopDayToServerdata),
    breaks: breaks.active ? breaksToServerdata(breaks) : null,
  };
}

export function scheduleToServerData(schedule: ScheduleStore): ScheduleData {
  return {
    days: schedule.days.filter((day) => day.active).map(dayModelToServerData),
  };
}
