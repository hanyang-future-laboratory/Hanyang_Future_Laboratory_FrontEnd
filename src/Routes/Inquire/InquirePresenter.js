import React from "react";
import SubTop2 from "Components/SubTop2";
import Buttons from "Components/Buttons";

const InquirePresenter = ({
  subTopData,
}) => (
  <>
    <SubTop2 subTopData={subTopData} />
    <Buttons title="교육 문의하기"/>
    <Buttons title="카카오톡으로 교육 문의, 신청하기"/>
  </>
);

export default InquirePresenter;
