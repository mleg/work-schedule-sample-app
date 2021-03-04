import Modal from "antd/lib/modal/Modal";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../store/store";
import css from "./ResultsModal.module.less";

function _ResultsModal() {
  const { schedule } = useStore();
  const { resultsModal } = schedule;

  return (
    <Modal
      title="Результат"
      visible={resultsModal.visible}
      onCancel={resultsModal.hide}
      footer={null}
    >
      <pre className={css.content}>{schedule.json}</pre>
    </Modal>
  );
}

export const ResultsModal = observer(_ResultsModal);
