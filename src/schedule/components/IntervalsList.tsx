import { observer } from "mobx-react-lite";
import React from "react";
import { IntervalModel, ShopDayModel } from "../schedule-types";
import { Interval } from "./Interval";

interface Props {
  shop: ShopDayModel;
}

function renderInterval(interval: IntervalModel, i: number, arr: any[]) {
  const isLast = i === arr.length - 1;
  return (
    <Interval
      key={interval.id}
      interval={interval}
      showAdd={isLast}
      showDelete={!isLast}
      className="col-start-2"
    />
  );
}

function _IntervalsList({ shop }: Props) {
  return <>{shop.intervals.map(renderInterval)}</>;
}

export const IntervalsList = observer(_IntervalsList);
