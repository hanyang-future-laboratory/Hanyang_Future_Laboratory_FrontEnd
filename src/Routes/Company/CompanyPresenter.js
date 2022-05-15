import React from "react";
import SubTop2 from "Components/SubTop2";
import Vision from "Components/Company/CompanyIntroduce/Vision";
import Introduce from "Components/Company/CompanyIntroduce/Introduce";

const CompanyPresenter = ({ subTopData }) => (
    <>
        <SubTop2 subTopData={subTopData} />
        <Vision />
        <Introduce />
    </>
);

export default CompanyPresenter;
