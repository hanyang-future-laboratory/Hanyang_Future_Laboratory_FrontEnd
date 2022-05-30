import React, { useState } from "react";
import InquirePresenter from "./InquirePresenter";

const InquireContainer = () => {
  const [subTopData] = useState({
    subTitle: "Inquire about Education",
    mainTitle: "교육 문의",
  });
  

  return (
    <InquirePresenter
      subTopData={subTopData}
    />
  );
};

export default InquireContainer;
