import { forwardRef } from "react";
import styled from "styled-components";
import SubTitle from "Components/EduDetail/SubTitle";
import { useLocation } from "react-router-dom";
const Section = styled.section`
    background-color: #f8f8f8;
    padding: 50px 5vw;
    width: 100%;
`;

const Grid = styled.div`
    margin: 30px 8vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;

const Img = styled.img`
    width: 100%;
    margin-bottom: 20px;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PictureSection = forwardRef(({ pictureContent }, ref) => {
    const type = useLocation();
    const pathname =
        `${type.pathname.split("/")[1]}/` + `${type.pathname.split("/")[2]}`;
    return (
        <Section ref={ref}>
            <SubTitle title="교육 사진" />
            <Grid>
                {pictureContent.map((item, index) => (
                    <Column key={index}>
                        <Img
                            src={
                                require(`img/introduce/${pathname}/${index}.png`)
                                    .default
                            }
                        />
                        <div>{item}</div>
                    </Column>
                ))}
            </Grid>
        </Section>
    );
});

export default PictureSection;
