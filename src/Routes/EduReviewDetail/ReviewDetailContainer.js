import React, { useState, useEffect } from "react";
import EduReivewPresenter from "./ReviewDetailPresenter";
import { reviewApi } from "api";
import { withRouter } from "react-router";

const EduReviewContainer = ({ match }) => {
    const {
        params: { id },
    } = match;
    const [reviewData, reviewUpdate] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await reviewApi.reviewDetail(id);
            reviewUpdate(data);
        };
        fetchData();
    }, [id]);
    return <EduReivewPresenter reviewData={reviewData} />;
};

export default withRouter(EduReviewContainer);