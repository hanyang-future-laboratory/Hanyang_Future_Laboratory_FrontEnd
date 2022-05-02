import { forwardRef } from "react";
import styled from "styled-components";
import SubTitleLeftBar from "../SubTitleLeftBar";
import boy from "img/boy.svg";
import girl from "img/girl.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = styled.div`
    display: flex;
    width: 100%;
    padding: 0 13vw;
    flex-direction: column;
    align-items: flex-start;
`;

const Box = styled.div`
    background-color: #fbfbfb;
    width: 100%;
    padding: 50px 80px;
    display: flex;
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 20px 0;
`;
const LeftSide = styled.div`
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    padding-right: 3vw;
    display: flex;
`;
const Picture = styled.div`
    font-size: 50px;
    margin-right: 20px;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const RightSide = styled.div`
    padding-left: 3vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Star = styled.div`
    color: #54efac;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;

const Review = forwardRef(({ review }, ref) => {
    return (
        <Section ref={ref}>
            <SubTitleLeftBar title="교육 후기" />
            <Box>
                <LeftSide>
                    <Picture>
                        <Img src={boy} />
                    </Picture>
                    <Info>
                        <span>서울**고 1학년</span>
                        <span>김⚪⚪</span>
                        <Star>
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                        </Star>
                    </Info>
                </LeftSide>
                <RightSide>
                    {review.man.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </RightSide>
            </Box>
            <Box>
                <LeftSide>
                    <Picture>
                        <Img src={girl} />
                    </Picture>
                    <Info>
                        <span>서울**고 1학년</span>
                        <span>김⚪⚪</span>
                        <Star>
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                            <FontAwesomeIcon icon="star" />
                        </Star>
                    </Info>
                </LeftSide>
                <RightSide>
                    {review.woman.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </RightSide>
            </Box>
        </Section>
    );
});
export default Review;
