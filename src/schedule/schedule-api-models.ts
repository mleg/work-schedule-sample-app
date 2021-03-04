export interface ScheduleData {
  days: DayData[];
}

export interface DayData {
  dayOfWeek: number;
  active: boolean;
  shops: ShopDayData[];
  breaks: BreaksData | null;
}

export interface BreaksData {
  active: boolean;
  intervals?: IntervalData[];
}

export interface ShopDayData {
  shopId: number;
  active: boolean;
  intervals?: IntervalData[];
}

export interface IntervalData {
  start: string;
  end: string;
}
