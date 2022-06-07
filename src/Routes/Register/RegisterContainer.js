import React, { useState } from "react";
import RegisterPresenter from "./RegisterPresenter";

const RegisterContainer = () => {
    const [subTopData] = useState({
        subTitle: "register",
        mainTitle: "회원가입",
    });

    return <RegisterPresenter subTopData={subTopData}></RegisterPresenter>;
};

export default RegisterContainer;
