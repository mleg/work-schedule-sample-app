import { Switch } from "antd";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { DayContext } from "../sub-stores/day-store";
import css from "./DayTitle.module.less";

interface Props {
  className?: string;
}

function _DayTitle(props: Props) {
  const day = useContext(DayContext);

  return (
    <div className={cn("flex", css.container, props.className)}>
      <span>{day.dayName}</span>
      <Switch
        checked={day.active}
        onChange={day.toggleActive}
        className="ml-auto"
      />
    </div>
  );
}

export const DayTitle = observer(_DayTitle);
