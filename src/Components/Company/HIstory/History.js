import React from "react";
import styled from "styled-components";
import SubTitleLeft from "Components/EduDetail/SubTitleLeftBar";
import BarComponent from "Components/Bar";
import img from "img/location.jpeg";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15vh 13vw;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`;
const Year = styled.span`
    font-size: 35px;
    font-weight: 900;
    color: var(--main-color);
    display: block;
    margin-top: 40px;
`;
const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
    display: block;
    margin-top: 20px;
`;
const Bar = styled(BarComponent)`
    margin-top: 20px;
    width: 23px;
    height: 4px;
`;
const Type = styled.span`
    width: flex;
    height: 30px;
    background-color: var(--sub-color);
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
`;

const Location = styled.span`
    font-size: 14px;
    font-weight: 300;
    margin-top: 20px;
`;

const Tap = styled.div`
    margin-top: 50px;
`;

const History = () => (
    <Section>
        <SubTitleLeft title="교육 현황" />
        <Main>
            <Year>"구름다리는</Year>
            <Year>지금까지 총 7,600명의 학생들과 함께했습니다."</Year>
            <Tap />
            <Tap />
            <img alt="field" src={img} height="500px" />
            <Tap />
            <Tap />
        </Main>
        <SubTitleLeft title="연혁" />
        <Main>
            <Year>2021</Year>
            <Title>한양 청소년 캠프</Title>
            <Bar />
            <Type>온라인 캠프</Type>
            <Location>충훈고등학교</Location>
            <Location>청미청소년문화의집</Location>
            <Tap />
            <Title>찾아가는 체험교실</Title>
            <Bar />
            <Type>VR체험교실</Type>
            <Location>충훈고등학교</Location>
            <Type>자율주행자동차 체험교실</Type>
            <Location>구립도화청소년문화의집</Location>
            <Type>드론 체험교실</Type>
            <Location>대부중학교</Location>
            <Type>코딩 체험교실</Type>
            <Location>영통청소년문화의집</Location>
            <Location>만안청소년문화의집</Location>
            <Type>3D펜 체험교실</Type>
            <Location>성동구립도서관</Location>
            <Location>양평고등학교</Location>
            <Location>은평구건강가정다문화지원센터</Location>
            <Tap />
            <Year>2020</Year>
            <Title>한양 융합공학 캠프</Title>
            <Bar />
            <Type>일일 캠프</Type>
            <Location>광운전자공업고등학교</Location>
            <Location>안산시글로벌청소년센터</Location>
            <Type>1박2일 캠프</Type>
            <Location>휘경여자고등학교</Location>
            <Location>창원남산고등학교</Location>
            <Tap />
            <Title>찾아가는 체험교실</Title>
            <Bar />
            <Type>VR체험교실</Type>
            <Location>한양대학교 ERICA</Location>
            <Type>자율주행자동차 체험교실</Type>
            <Location>오산남부청소년문화의집</Location>
            <Location>영통청소년문화의집</Location>
            <Type>드론 체험교실</Type>
            <Location>신천중학교</Location>
            <Location>신북초등학교</Location>
            <Type>코딩 체험교실</Type>
            <Location>여주시청</Location>
            <Location>성동구립도서관</Location>
            <Location>시립구로청소년센터</Location>
            <Type>3D프린터 체험교실</Type>
            <Location>성동구립도서관</Location>
            <Type>3D펜 체험교실</Type>
            <Location>방산고등학교</Location>
            <Location>진천중학교</Location>
            <Tap />
        </Main>
    </Section>
);

export default History;
