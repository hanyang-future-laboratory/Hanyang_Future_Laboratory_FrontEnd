import React from "react";
import styled from "styled-components";
import SubTitleLeft from "Components/EduDetail/SubTitleLeftBar";
import img from "img/cloud.jpg";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15vh 13vw;
`;
const Main = styled.div`
    margin-top: 40px;
    display: flex;
`;
const Info = styled.div`
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
`;
const Title = styled.span`
    font-size: 20px;
    font-weight: 800;
    line-height: 25px;
`;

const Highlight = styled.span`
    color: var(--main-color);
`;

const Text = styled.span`
    display: block;
    margin-top: 20px;
    line-height: 25px;
`;

const Vision = () => (
    <Section>
        <SubTitleLeft title="구름다리의 비전" />
        <Main>
            <img alt="cloud" src={img} height="250px" />
            <Info>
                <Title>
                    <div>
                        학교와 방과후 교실을 이어주는{" "}
                        <Highlight>구름다리</Highlight>,
                    </div>
                    <div>
                        한 사람의 인생을 바꾸는 <Highlight>교육</Highlight>을
                        제공합니다.
                    </div>
                </Title>
                <Text>
                    <div>
                        <Highlight>
                            체험교육은 삶의 방향에 영향을 주는 가장 중요한
                            ‘경험’입니다.
                        </Highlight>
                    </div>
                    <div>
                        그 ‘경험’이야말로 한 사람의 인생과 방향을 크게 바꿀 수
                        있는 기회이며, 미래를 위한 투자이기 때문입니다. 우리는
                        체험교육을 통해 미래를 바꾸는 씨앗을 심는 일을 합니다.
                    </div>
                </Text>
                <Text>
                    교육이라는 미래에 투자하고 함께 성장하며 함께 사회적 가치를
                    만들어나가는 스타트업을 목표로 합니다.
                </Text>
                <Text>
                    <div>
                        <Highlight>
                            구름다리는 단순한 교육이 아닙니다. 평생 꿈을
                            보육합니다.
                        </Highlight>
                    </div>
                    <div>
                        매일 바뀌는 세상에 적응하며, 생존하기 위해 새로운 기술과
                        이론을 체험하고, 자기주도적 학습을 가능하게 합니다.
                    </div>
                </Text>
            </Info>
        </Main>
    </Section>
);

export default Vision;
