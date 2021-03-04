import cn from "classnames";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ShopDayModel } from "../schedule-types";
import { DayContext } from "../sub-stores/day-store";
import { ShopsItem } from "./ShopsItem";
import css from "./ShopsList.module.less";

interface Props {
  className?: string;
}

function renderShop(shop: ShopDayModel) {
  return <ShopsItem key={shop.shopId} shop={shop} />;
}

function _ShopsList(props: Props) {
  const day = useContext(DayContext);

  return (
    <div className={cn(css.container, "px-4 py-2", props.className)}>
      {day.shops.concat(day.breaks).map(renderShop)}
    </div>
  );
}

export const ShopsList = observer(_ShopsList);
