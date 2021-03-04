import { TimePicker } from "antd";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { TIME_FORMAT } from "../../common/constants";
import { MomentModel } from "../schedule-types";

interface Props {
  model: MomentModel;
  className?: string;
}

function _TimeInput({ model, ...props }: Props) {
  return (
    <TimePicker
      format={TIME_FORMAT}
      value={model.value}
      placeholder=""
      showNow={false}
      onChange={model.set}
      className={cn("w-24", props.className)}
    />
  );
}

export const TimeInput = observer(_TimeInput);
