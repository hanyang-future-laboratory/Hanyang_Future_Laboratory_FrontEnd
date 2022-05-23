import React from "react";
import SubTop2 from "Components/SubTop2";
import Form from "Components/Form"

const EduFormPresenter = ({
  subTopData,
}) => (
  <>
    <SubTop2 subTopData={subTopData} />
    <Form />
  </>
);

export default EduFormPresenter;
