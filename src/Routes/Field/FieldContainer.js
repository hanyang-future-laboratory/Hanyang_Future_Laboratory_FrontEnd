import React, { useState } from "react";
import FieldPresenter from "./FieldPresenter";

const FieldContainer = () => {
  const [subTopData] = useState({
    subTitle: "Field of Business",
    mainTitle: "사업 영역",
  });
  

  return (
    <FieldPresenter
      subTopData={subTopData}
    />
  );
};

export default FieldContainer;
