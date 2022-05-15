import React from "react";
import SubTop2 from "Components/SubTop2";
import Business from "Components/Company/Field/Business";
import Value from "Components/Company/Field/Value";


const FieldPresenter = ({
  subTopData,
}) => (
  <>
    <SubTop2 subTopData={subTopData} />
    <Business/>
    <Value/>
  </>
);

export default FieldPresenter;
