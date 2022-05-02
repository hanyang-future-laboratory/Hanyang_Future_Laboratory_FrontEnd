import styled from "styled-components";
import SubTitle from "Components/EduDetail/SubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Box = styled.div`
    width: 300px;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 40px auto;
    font-size: 14px;
    padding: 35px 40px;
    position: relative;
    div {
        text-align: center;
        line-height: 150%;
    }
`;

const Circle = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: absolute;
    top: -25px;
    right: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`;

const Goal = ({ content }) => (
    <>
        <SubTitle title={"수업 목표"} />
        <Box>
            <div>{content} </div>
            <Circle>
                <FontAwesomeIcon icon="check" />
            </Circle>
        </Box>
    </>
);

export default Goal;
