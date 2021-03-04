import { Checkbox } from "antd";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { ShopDayModel } from "../schedule-types";
import { IntervalsList } from "./IntervalsList";
import css from "./ShopsItem.module.less";

interface Props {
  shop: ShopDayModel;
  className?: string;
}

function _ShopsItem({ shop, ...props }: Props) {
  return (
    <div
      className={cn(
        css.container,
        "grid grid-cols-2 gap-y-3 py-3",
        props.className,
      )}
    >
      <Checkbox
        checked={shop.active}
        onChange={shop.toggleActive}
        className={cn("flex items-center mr-9", css.checkbox)}
      >
        {shop.displayName}
      </Checkbox>
      {shop.active ? <IntervalsList shop={shop} /> : null}
    </div>
  );
}

export const ShopsItem = observer(_ShopsItem);
