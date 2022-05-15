import React from "react";
import styled from "styled-components";
import SubTitleLeft from "Components/EduDetail/SubTitleLeftBar";
import img from "img/logo_w.png";
const Section = styled.div`
    width: 100%;
    padding: 15vh 13vw;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`;

const Highlight = styled.span`
    font-weight: 800;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    line-height: 25px;
    align-items: center;
`;

const Circle = styled.div`
    height: 195px;
    width: 195px;
    border-radius: 50%;
    background-image: url(${img});
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Introduce = () => (
    <Section>
        <SubTitleLeft title="법인 소개" />
        <Main>
            <Circle />
            <Text>
                <div>
                    <Highlight>
                        구름다리는 클라우드소프트의 교육 브랜드입니다.
                    </Highlight>
                </div>
            </Text>
            <Text>
                <div>구름다리는</div>
                <div>
                    메이커 융합 교육, 코딩 교육, STEAM 교육, 창업 교육과 같이
                </div>
                <div>
                    4차산업혁명 시대에 한 사람의 인생을 바꿀 수 있는 체험교육을
                    제공합니다.
                </div>
            </Text>
        </Main>
    </Section>
);

export default Introduce;
