import React from "react";
import styled from "styled-components";
import SubTitleLeft from "Components/EduDetail/SubTitleLeftBar";
import img from "img/Field.png";

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

const Business = () => (
    <Section>
        <SubTitleLeft title="사업 영역" />
        <Main>
            <img alt="field" src={img} height="500px" />
        </Main>
    </Section>
);

export default Business;
