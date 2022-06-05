import React, { useState, useEffect } from "react";
import EduInquirePresenter from "./EduInquirePresenter";
import { inquireApi } from "api";
import { connect } from "react-redux";

const EduInquireContainer = ({ updateCheck }) => {
    const [subTopData] = useState({
        title: "교육 문의",
        smallTitle: "Education Inquire",
        subTitle1: "구름다리 혹은 교육에 대한",
        subTitle2: "문의 사항을 편하게 남겨주시면 됩니다.",
    });


    const [boardData, boardDataUpdate] = useState();
    const [buttonSelect, setButtonSelect] = useState([1, 0, 0, 0, 0]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await inquireApi.reviewBoard();
            boardDataUpdate(data);
        };
        fetchData();
    }, [updateCheck]);

    const typeHandler = (index) => {
        let arr = [0, 0, 0, 0, 0];
        arr[index] = 1;
        setButtonSelect(arr);
    };

    return (
        <EduInquirePresenter
            subTopData={subTopData}
            boardData={boardData}
            setButtonSelect={setButtonSelect}
            buttonSelect={buttonSelect}
            typeHandler={typeHandler}
        />
    );
};

function mapStateToProps(state) {
    return { updateCheck: state };
}

export default connect(mapStateToProps)(EduInquireContainer);
