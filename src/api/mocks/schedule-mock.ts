import { ScheduleData } from "../../schedule/schedule-api-models";

export const scheduleMock: ScheduleData = {
  days: [
    {
      dayOfWeek: 1,
      active: true,
      shops: [
        {
          shopId: 1,
          active: true,
          intervals: [{ start: "09:00", end: "18:00" }],
        },
        {
          shopId: 2,
          active: true,
          intervals: [{ start: "09:00", end: "18:00" }],
        },
      ],
      breaks: {
        active: true,
        intervals: [{ start: "14:00", end: "15:00" }],
      },
    },
    {
      dayOfWeek: 4,
      active: true,
      shops: [
        { shopId: 1, active: false },
        {
          shopId: 2,
          active: true,
          intervals: [
            { start: "09:00", end: "13:00" },
            { start: "15:00", end: "18:00" },
          ],
        },
      ],
      breaks: null,
    },
  ],
};
