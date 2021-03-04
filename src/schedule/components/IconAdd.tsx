import cn from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { RoundedIcon } from "../../common/components/RoundedIcon";
import css from "./IconAdd.module.less";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function _IconAdd({ className, ...attrs }: Props) {
  return (
    <RoundedIcon className={cn(css.it, className)} {...attrs}>
      +
    </RoundedIcon>
  );
}

export const IconAdd = observer(_IconAdd);
