import React, { useState, useEffect, useCallback } from "react";
import EduReivewPresenter from "./ReviewDetailPresenter";
import { reviewApi } from "api";
import { withRouter } from "react-router";

const EduReviewContainer = ({ match }) => {
    const {
        params: { id },
    } = match;
    const [reviewData, reviewUpdate] = useState();
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}, []));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await reviewApi.reviewDetail(id);
                reviewUpdate(data);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [id]);
    return <EduReivewPresenter reviewData={reviewData} id={id} />;
};

export default withRouter(EduReviewContainer);
