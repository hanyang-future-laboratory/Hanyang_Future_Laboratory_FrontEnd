import React from "react";
import styled from "styled-components";
import SubTitleLeft from "Components/EduDetail/SubTitleLeftBar";

const Section = styled.section`
    width: 100%;
    padding: 15vh 13vw;
`;

const ImgContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    width: 50%;
    height: 50%;
    opacity: 0.6;
    transition: all 0.2s linear;
`;
const Title = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`;
const Text = styled.div`
    width: 300px;
    line-height: 25px;
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
`;
const Tab = styled.div`
    width: 70%;
    height: 250px;
    margin: 150px auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Sub = styled.div``;

const Value = () => {
    const data = [
        {
            imgUrl: "img/mainPage/3d.png",
            title: "3D프린팅",
            text: "3D프린팅(3D Printing)은 프린터로 물체를 뽑아내는 기술을 말한다. 종이에 글자를 인쇄하는 기존 프린터와 비슷한 방식으로, 다만 입체 모형을 만드는 기술이라고 하여 3D프린팅이라고 부른다.",
        },
        {
            imgUrl: "img/mainPage/pen.png",
            title: "3D펜",
            text: "3D프린터의 원리를 그대로 적용한 펜 형태의 기기로서, 펜촉에서 액체 플라스틱이 흘러나오면서 원하는 대로 입체 형상을 만들어낼 수 있다.",
        },
        {
            imgUrl: "img/mainPage/vr.png",
            title: "VR",
            text: "컴퓨터로 만들어 놓은 가상의 세계에서 사람이 실제와 같은 체험을 할 수 있도록 하는 최첨단 기술. 가상현실에서는 모든 것들을 사용자가 원하는 방향대로 조작하거나 실행할 수 있다.",
        },
        {
            imgUrl: "img/mainPage/ar.png",
            title: "AR",
            text: "현실에 기반하여 정보를 추가 제공하는 기술. 즉, 현실의 이미지나 배경에 3차원 가상 이미지를 겹쳐서 하나의 영상으로 보여주는 기술이다.",
        },
        {
            imgUrl: "img/mainPage/drone.png",
            title: "드론",
            text: "사람이 타지 않고 무선전파의 유도에 의해서 비행하는 비행기나 헬리콥터 모양의 비행체. 카메라, 센서, 통신시스템 등이 탑재돼 있으며 25g부터 1200kg까지 무게와 크기도 다양하다. 드론은 군사용도로 처음 생겨났지만 최근엔 고공 촬영과 배달 등으로 확대됐다.",
        },
        {
            imgUrl: "img/mainPage/coding.png",
            title: "코딩",
            text: "주어진 명령을 컴퓨터가 이해할 수 있는 언어로 입력하는 것을 말한다. 좀 더 넓은 의미에서는 프로그램을 만든다는 뜻의 '프로그래밍'과 동일한 개념으로 사용되기도 한다.",
        },
        {
            imgUrl: "img/mainPage/car.png",
            title: "자율주행자동차",
            text: "인간의 지능으로 할 수 있는 사고, 학습, 자기 개발 등을 컴퓨터가 할 수 있도록 하는 방법을 연구하는 컴퓨터 공학 및 정보기술의 한 분야. 즉, 컴퓨터가 인간의 지능적인 행동을 모방할 수 있도록 하는 것을 말한다.",
        },
    ];
    return (
        <Section>
            <SubTitleLeft title="핵심 가치" />
            {data.map((item) => (
                <Tab>
                    <ImgContainer>
                        <Img
                            src={require(`../../../../${item.imgUrl}`).default}
                        />
                    </ImgContainer>
                    <Sub>
                        <Title>{item.title}</Title>
                        <Text>{item.text}</Text>
                    </Sub>
                </Tab>
            ))}
        </Section>
    );
};

export default Value;
