import cn from "classnames";
import { observer } from "mobx-react-lite";
import React, { PropsWithChildren } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function _RoundedIcon({
  className,
  children,
  ...attrs
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "rounded-full w-5 h-5 flex items-center justify-center text-base cursor-pointer",
        className,
      )}
      {...attrs}
    >
      {children}
    </div>
  );
}

export const RoundedIcon = observer(_RoundedIcon);
