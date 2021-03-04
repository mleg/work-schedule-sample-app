import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";
import React from "react";
import { SchedulePage } from "./schedule/SchedulePage";
import { Store, StoreContext } from "./store/store";

export function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <StoreContext.Provider value={Store.get()}>
        <SchedulePage />
      </StoreContext.Provider>
    </ConfigProvider>
  );
}
