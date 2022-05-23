import React, { useState } from "react";
import AddressPresenter from "./AddressPresenter";

const AddressContainer = () => {
  const [subTopData] = useState({
    subTitle: "Company Adress",
    mainTitle: "오시는 길",
  });
  

  return (
    <AddressPresenter
      subTopData={subTopData}
    />
  );
};

export default AddressContainer;
