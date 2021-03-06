import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import SubTop from "Components/SubTop";
import SubTitle from "Components/EduReview/SubTitle";
import Board from "Components/EduReview/Board";
import Form from "Routes/EduReviewForm";
import ReviewDetail from "Routes/EduReviewDetail";

const Box = styled.div`
    width: 70vw;
    margin: 0 auto;
`;

const EduInquirePresenter = ({
    subTopData,
    boardData,
    buttonSelect,
    typeHandler,
}) => {
    return (
        <>
            <SubTop subTopData={subTopData} />
            <Box>
                <SubTitle title="교육 문의" />
                <Route
                    path="/EduInquire"
                    exact
                    render={() => (
                        <Board
                            boardData={boardData}
                            buttonSelect={buttonSelect}
                            typeHandler={typeHandler}
                        />
                    )}
                />
                <Switch>
                    <Route path="/review/form"  component={Form} />
                    <Route path="/review/:id" component={ReviewDetail} />
                </Switch>
            </Box>
        </>
    );
};

export default EduInquirePresenter;
