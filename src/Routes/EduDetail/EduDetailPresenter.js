import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import data from "./data.json";
import {
    SubTop3,
    DetailIntro,
    Goal,
    Curriculum,
    PictureSection,
    ExpectEffect,
    Review,
    WayCome,
    RefundPolicy,
    SideNav,
} from "Components/EduDetail";

const Section = styled.div`
    position: relative;
`;

const Page = styled.div`
    padding: 10vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PaymentBtn = styled.button`
    background: var(--main-color);
    border-radius: 25px;
    height: 80px;
    width: 180px;
    border: none;
    color: white;
    font-size: 25px;
`;

const EduDetailPresenter = ({ tabRef }) => {
    const sampleLocation = useLocation();
    const [index] = useState(sampleLocation.pathname.split("/")[2]);

    const [Detail] = useState(data);

    return (
        <Section>
            <SubTop3 title={Detail[index].title} />
            <Page>
                <DetailIntro
                    Detail={Detail[index]}
                    ref={(el) => (tabRef.current[0] = el)}
                />
                <Goal content={Detail[index].goal} />
                <Curriculum
                    ref={(el) => (tabRef.current[1] = el)}
                    CurriculumData={Detail[index].curriculumData}
                />
                <PictureSection
                    pictureContent={Detail[index].pictureContent}
                    ref={(el) => (tabRef.current[2] = el)}
                />
                <ExpectEffect />
                <Review
                    review={Detail[index].review}
                    ref={(el) => (tabRef.current[3] = el)}
                />
                <WayCome />
                <RefundPolicy />
                <SideNav ref={tabRef} />
                <PaymentBtn ref={(el) => (tabRef.current[4] = el)}>
                    교육 신청
                </PaymentBtn>
            </Page>
        </Section>
    );
};

export default EduDetailPresenter;
