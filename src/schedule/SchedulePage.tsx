import { Button, PageHeader, Spin } from "antd";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStore } from "../store/store";
import { DaysList } from "./components/DaysList";
import { ResultsModal } from "./components/ResultsModal";
import css from "./SchedulePage.module.less";

function _SchedulePage() {
  const { schedule: model } = useStore();

  useEffect(() => {
    model.fetchData();
  }, [model]);

  return (
    <div className={cn("flex flex-col items-center", css.container)}>
      <div className={cn("w-full flex justify-center", css.header)}>
        <PageHeader title="Редактирование расписания" />
        <div className={css.headerAligner} />
      </div>
      <div
        className={cn("flex justify-center px-8 pt-8 w-full", css.scrollArea)}
      >
        <div className={cn("flex", css.content)}>
          <Spin spinning={model.loader.loading} size="large">
            <DaysList days={model.days} className="pb-8" />
          </Spin>
          <div className="ml-4 w-28">
            <Button
              disabled={!model.hasChanges}
              size="large"
              type="primary"
              shape="round"
              className="fixed"
              onClick={model.resultsModal.show}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
      <ResultsModal />
    </div>
  );
}

export const SchedulePage = observer(_SchedulePage);
