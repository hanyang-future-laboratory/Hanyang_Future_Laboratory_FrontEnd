import { forwardRef } from "react";
import styled from "styled-components";

const SubTop = styled.div`
    position: fixed;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1.8fr 1fr 1fr 1fr 1fr 1fr;
    height: 250px;
    width: 120px;
    overflow: hidden;
    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
`;

const Li = styled.div`
    &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
`;

const Top = styled.div`
    background-color: #555555;
    color: white;
`;

const SubTopComponent = forwardRef(({ tabRef }, ref) => {
    return (
        <SubTop>
            <Top>온라인 교육</Top>
            <Li
                onClick={() =>
                    ref.current[0].scrollIntoView({ behavior: "smooth" })
                }
            >
                교육 소개
            </Li>
            <Li
                onClick={() =>
                    ref.current[1].scrollIntoView({ behavior: "smooth" })
                }
            >
                커리큘럼
            </Li>
            <Li
                onClick={() =>
                    ref.current[2].scrollIntoView({ behavior: "smooth" })
                }
            >
                교육 사진
            </Li>
            <Li
                onClick={() =>
                    ref.current[3].scrollIntoView({ behavior: "smooth" })
                }
            >
                교육 후기
            </Li>
            <Li
                onClick={() =>
                    ref.current[4].scrollIntoView({ behavior: "smooth" })
                }
            >
                교육 신청
            </Li>
        </SubTop>
    );
});

export default SubTopComponent;
