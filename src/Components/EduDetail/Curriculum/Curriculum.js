import { forwardRef } from "react";
import styled from "styled-components";
import SubTitle from "Components/EduDetail/SubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Section = styled.div`
    margin-top: 120px;
    letter-spacing: -2px;
    margin-bottom: 120px;
`;

const GridSection = styled.div`
    display: grid;
    grid-template-columns: 90px 500px;
    font-weight: 400;
    font-size: 14px;
    margin: 30px 20vw;
`;

const Key = styled.div`
    background-color: #40857d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Value = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Li = styled.div`
    margin: 5px 5px;
`;

const LiTitle = styled.div`
    margin: 5px 5px;
    svg {
        opacity: 0.3;
        font-size: 15px;
    }
    font-weight: 550;
`;

const Curriculum = forwardRef(({ CurriculumData }, ref) => {
    const { introduction, deployment, finish } = CurriculumData;
    return (
        <Section ref={ref}>
            <SubTitle title={"커리큘럼"} />
            <GridSection>
                <Key>
                    <div>도입</div>
                </Key>
                <Value>
                    {introduction.map((item, index) =>
                        index === 0 ? (
                            <LiTitle key={index}>
                                <FontAwesomeIcon icon="check-circle" />
                                &nbsp;&nbsp;&nbsp;
                                {item}
                            </LiTitle>
                        ) : (
                            <Li key={index}>
                                &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{item}
                            </Li>
                        )
                    )}
                </Value>
                <Key>
                    <div>전개</div>
                </Key>
                <Value>
                    {deployment.map((item, index) =>
                        index === 0 ? (
                            <LiTitle key={index}>
                                <FontAwesomeIcon icon="check-circle" />
                                &nbsp;&nbsp;&nbsp;
                                {item}
                            </LiTitle>
                        ) : (
                            <Li key={index}>
                                &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{item}
                            </Li>
                        )
                    )}
                </Value>
                <Key>
                    <div>마무리</div>
                </Key>
                <Value>
                    {finish.map((item, index) =>
                        index === 0 ? (
                            <LiTitle key={index}>
                                <FontAwesomeIcon icon="check-circle" />
                                &nbsp;&nbsp;&nbsp;
                                {item}
                            </LiTitle>
                        ) : (
                            <Li key={index}>
                                &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{item}
                            </Li>
                        )
                    )}
                </Value>
            </GridSection>
        </Section>
    );
});

export default Curriculum;
