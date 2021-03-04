import { Card } from "antd";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { DayModel } from "../schedule-types";
import { DayContext } from "../sub-stores/day-store";
import css from "./DayCard.module.less";
import { DayTitle } from "./DayTitle";
import { ShopsList } from "./ShopsList";

interface Props {
  day: DayModel;
  className?: string;
}

function _DayCard({ day, ...props }: Props) {
  return (
    <DayContext.Provider value={day}>
      <Card
        title={<DayTitle />}
        headStyle={{
          background: day.active ? "#fafafa" : "#FFF",
          transition: "background 0.2s",
        }}
        bodyStyle={{ padding: 0 }}
        className={cn(css.container, props.className)}
      >
        <div className={cn(css.content, day.active && css.content_visible)}>
          <ShopsList />
        </div>
      </Card>
    </DayContext.Provider>
  );
}

export const DayCard = observer(_DayCard);
