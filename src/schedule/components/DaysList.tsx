import cn from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { DayModel } from "../schedule-types";
import { DayCard } from "./DayCard";
import css from "./DaysList.module.less";

interface Props {
  days: DayModel[];
  className?: string;
}

function renderDay(day: DayModel) {
  return <DayCard key={day.dayOfWeek} day={day} className={css.card} />;
}

function _DaysList(props: Props) {
  return (
    <div className={cn(css.container, props.className)}>
      {props.days.map(renderDay)}
    </div>
  );
}

export const DaysList = observer(_DaysList);
