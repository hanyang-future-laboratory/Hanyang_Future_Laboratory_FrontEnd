import React, { useState } from "react";
import HistoryPresenter from "./HistoryPresenter";

const HistoryContainer = () => {
  const [subTopData] = useState({
    subTitle: "Corporate History",
    mainTitle: "연혁",
  });
  

  return (
    <HistoryPresenter
      subTopData={subTopData}
    />
  );
};

export default HistoryContainer;
