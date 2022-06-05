import React, { useState } from "react";
import InquireFormPresenter from "./InquireFormPresenter";
import { withRouter } from "react-router-dom";
import { inquireApi } from "api";
import { actionCreators } from "store";
import { connect } from "react-redux";

const EduInquireContainer = ({ history, newReviewAction }) => {

    const [title, updateTitle] = useState("");
    const [main, updateMain] = useState("");
    const [category, updateCategory] = useState("교육 문의");
    const [secret, updateSecret] = useState(false);

    const onChangeTitle = (e) => {
        const {
            target: { value },
        } = e;
        updateTitle(value);
    };
    const onChangeMain = (value) => {
        console.log(main);
        updateMain(value);
    };
    const onChangeCategory = (e) => {
        const {
            target: { value },
        } = e;
        updateCategory(value);
    };
    const onChangeSecret = (e) => {
        if (secret === false) updateSecret(true);
        else updateSecret(false);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(main);
        const body = {
            title,
            main,
            category,
            secret,
        };
        try {
            await inquireApi.reviewPost(body);
            newReviewAction();
        } catch (e) {
            console.log(e);
        } finally {
            history.push("/Inquire");
        }
    };
    return (
        <InquireFormPresenter
            onChangeTitle={onChangeTitle}
            onChangeMain={onChangeMain}
            onChangeCategory={onChangeCategory}
            onChangeSecret={onChangeSecret}
            submitHandler={submitHandler}
            title={title}
            main={main}
            category={category}
            secret={secret}
        />
    );
};

function mapDispatchToProps(dispatch) {
    return {
        newReviewAction: () => dispatch(actionCreators.newReviewAction()),
    };
}

export default withRouter(
    connect(null, mapDispatchToProps)(EduInquireContainer)
);
