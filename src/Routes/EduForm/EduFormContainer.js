import React, { useState } from "react";
import EduFormPresenter from "./EduFormPresenter";

const EduFormContainer = () => {
  const [subTopData] = useState({
    subTitle: "Education Application",
    mainTitle: "교육 신청",
  });

  return (
    <EduFormPresenter
      subTopData={subTopData}
    />
  );
};

export default EduFormContainer;
