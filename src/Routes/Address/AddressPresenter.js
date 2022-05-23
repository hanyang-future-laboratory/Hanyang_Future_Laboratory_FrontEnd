import React from "react";
import SubTop2 from "Components/SubTop2";
import { WayCome } from "Components/EduDetail";

const AddressPresenter = ({
  subTopData,
}) => (
  <>
    <SubTop2 subTopData={subTopData} />
    <WayCome />
  </>
);

export default AddressPresenter;
