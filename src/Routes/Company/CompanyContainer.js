import React, { useState } from "react";
import CompanyPresenter from "./CompanyPresenter";

const CompanyContainer = () => {
    const [subTopData] = useState({
        subTitle: "Corporate Introduction",
        mainTitle: "법인 소개",
    });

    return <CompanyPresenter subTopData={subTopData} />;
};

export default CompanyContainer;
