import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: #444444;
  height: 260px;
  width: 100%;
  padding: 5vh 11vw;
  padding-right: 20vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.section`
  color: white;
  font-size: 25px;
  padding-bottom: 25px;
  font-weight: 800;
`;

const Paragraph = styled.p`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  color: white;
  opacity: 0.5;
  line-height: 25px;
  letter-spacing: -1px;
  font-weight: 100;
  .fa-youtube {
    color: red;
  }
`;

const FooterComponent = () => (
  <Footer>
    <Section>
      <Title>구름다리</Title>
      <Paragraph>
        <span>
          구름다리 | 대표자:ooo | 사업자등록번호:000-00-00000
        </span>
        <span>
          본사:경기도 안산시 상록구 한양대학로 55 한양대학교
        </span>
        <span>
          연구소:경기도 안산시 상록구 한양대학로 55 한양대학교
        </span>
        <span>대표전화:000-0000-0000 | FAX:000-000-0000</span>
        <span>E-mail:cloud@hanyang.ac.kr/cloud@gmail.com</span>
      </Paragraph>
    </Section>
    <Section>
      <Title>교육 문의</Title>
      <Paragraph>
        <span>교육 문의</span>
        <span>000-0000-0000</span>
        <span>주중 AM 09:00-PM 06:00</span>
        <span>일요일 및 공휴일 휴무</span>
        <span>점심시간PM12:00-PM1:00</span>
      </Paragraph>
    </Section>
    <Section>
      <Title>구름다리 SNS</Title>
      <Paragraph>
        <a href="">
          <i className="far fa-comment"></i> 블로그 바로가기
        </a>
        <a href="">
          <i className="fab fa-youtube"></i> 유튜브 바로가기
        </a>
      </Paragraph>
    </Section>
  </Footer>
);

export default FooterComponent;
