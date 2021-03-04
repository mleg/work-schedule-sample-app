import { Typography } from "antd";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { IntervalModel } from "../schedule-types";
import { IconAdd } from "./IconAdd";
import { IconDelete } from "./IconDelete";
import css from "./Interval.module.less";
import { TimeInput } from "./TimeInput";

const { Text } = Typography;

interface Props {
  interval: IntervalModel;
  showAdd: boolean;
  showDelete: boolean;
  className?: string;
}

function _Interval({ interval, ...props }: Props) {
  return (
    <div className={cn(css.container, "flex items-center", props.className)}>
      <Text type="secondary" className="mr-1">
        с
      </Text>
      <TimeInput model={interval.start} />
      <Text type="secondary" className="mx-1">
        до
      </Text>
      <TimeInput model={interval.end} />
      {props.showAdd ? (
        <IconAdd onClick={interval.shop.addInterval} className="ml-2" />
      ) : null}
      {props.showDelete ? (
        <IconDelete
          onClick={() => interval.shop.removeInterval(interval.id)}
          className="ml-2"
        />
      ) : null}
    </div>
  );
}

export const Interval = observer(_Interval);
