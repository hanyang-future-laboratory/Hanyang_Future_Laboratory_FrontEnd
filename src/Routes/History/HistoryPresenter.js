import React from "react";
import SubTop2 from "Components/SubTop2";
import History from "Components/Company/HIstory"


const HistoryPresenter = ({
  subTopData,
}) => (
  <>
    <SubTop2 subTopData={subTopData} />
    <History/>
  </>
);

export default HistoryPresenter;
