import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from "styled-components"
import "./Form.css";

function Form() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const Div = styled.div`
    text-align: center;
  `;

  const InlineBlock = styled.div`
    display: inline-block;
    text-align: left;
  `;

  const Section = styled.div`
    margin:20px;
    height:50px;
  `;

  const Title = styled.h3`
    font-size: 40px;
    line-height: 80px;
    margin : 40px;
  `;

  const ModalTitle = styled.h3`
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
  `;

  const SubTitle = styled.h5`
    font-size: 18px;
    line-height: 36px;
    width: 200px;
    display: inline-block;
  `;

  const ModalSubTitle = styled.h5`
    font-size: 15px;
    line-height: 30px;
  `;

  const Para = styled.p`
    font-size: 12px;
    line-height: 24px;
  `;

  const InlinePara = styled.p`
  font-size: 12px;
  line-height: 24px;
  display: inline;
`;

  const ModalPara = styled.p`
    color: rgb(73, 73, 73);
    font-size: 10px;
    line-height: 20px;
  `;

  const Ul = styled.ul``;

  const Li = styled.li`
    color: rgb(73, 73, 73);
    list-style: none;
    font-size: 12px;
    padding: 5px 0;
    :before {
      content: "·";
      font-size: 12px;
      padding-right: 3px;
     }
    }
  `;

  const Button = styled.button`
    width: 180px;
    height: 60px;
    background-color: var(--sub-color);
    border: 0;
    margin-bottom: 150px;
    border-radius: 20px;
  `;


  return (
    <Div>
      <InlineBlock>
        <Title>교육 신청</Title>
        <Section>
          <SubTitle>✔️ 담당자 이름</SubTitle>
          <input className="input" required="required" type="text" />
        </Section>
        <Section>
          <SubTitle>✔️ 담당자 이메일</SubTitle>
          <input className="input" required="required" type="email" />
        </Section>
        <Section>
          <SubTitle>✔️ 기관/ 단체명</SubTitle>
          <input className="input" required="required" type="text" placeholder="예시) 00청소년센터 or 00초등학교" />
        </Section>
        <Section>
          <SubTitle>✔️ 담당자 연락처</SubTitle>
          <input className="input" required="required" type="text" placeholder="예시) 000-0000-0000" />
        </Section>
        <Section>
          <SubTitle>✔️ 교육 희망일</SubTitle>
          <input className="input" type="date" required value />
        </Section>
      </InlineBlock>
      <InlineBlock>
        <Section>
          <SubTitle>✔️ 교육 진행 시간</SubTitle>
          <input className="input" required="required" type="text" placeholder="예시) 13:00 ~ 14:30 (90)" />
        </Section>
        <Section>
          <SubTitle>✔️ 교육 희망 장소</SubTitle>
          <input className="input" required="required" type="text" placeholder="예시) 한양중학교 1학년 1반 교실 (0층)" />
        </Section>
        <Section>
          <SubTitle>✔️ 교육 인원</SubTitle>
          <input className="input" required="required" type="text" />
          <Para>최소 인원 20명 미만일 경우, 20명 기준으로 비용이 집행됩니다.</Para>
        </Section>
        <Section>
          <SubTitle>✔️ 교육 유형 선택</SubTitle>
          <select className="input">
            <option value="청소년 캠프">청소년 캠프</option>
            <option value="찾아가는 체험교실 (1회기)">찾아가는 체험교실 (1회기)</option>
            <option value="청소년 동아리 (장회기)">청소년 동아리 (장회기)</option>
            <option value="전문인 특강">전문인 특강</option>
            <option value="체험 부스">체험 부스</option>
          </select>
        </Section>
        <Section>
          <SubTitle>✔️ 신청 교육명</SubTitle>
          <input className="input" required="required" type="text" placeholder="예시) 3D프린터 전문가" />
        </Section>
      </InlineBlock>
      <Section>
        <button className="linetext" onClick={() => setModalIsOpen(true)}>
          개인정보 수집, 개인정보취급방침</button>
        <input required type="checkbox" />
        <InlinePara>동의합니다</InlinePara>
      </Section>
      <Modal isOpen={modalIsOpen} className="Modal">
        <button onClick={() => setModalIsOpen(false)} className="unsetButton">X</button>
        <ModalTitle>[필독] 개인정보취급방침 동의</ModalTitle>
        <ModalSubTitle>수집하는 개인정보 항목</ModalSubTitle>
        <ModalPara>회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</ModalPara>
        <Ul>
          <Li>수집항목: 이름, 생년월일, 성별, 로그인ID, 비밀번호, 비밀번호 질문과 답변, 자택 전화번호, 자택 주소, 휴대전화 번호, 이메일, 쿠키, 결제기록</Li>
          <Li>개인정보 수집방법 : 홈페이지(회원가입)</Li>
        </Ul>
        <ModalSubTitle>개인정보의 수집 및 이용목적</ModalSubTitle>
        <ModalPara>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</ModalPara>
        <Ul>
          <Li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스</Li>
          <Li>회원관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 불만처리 등 민원 처리, 고지사항 전달</Li>
          <Li>마케팅 및 광고에 활용: 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</Li>
        </Ul>
        <ModalSubTitle>개인정보의 보유 및 이용기간</ModalSubTitle>
        <ModalPara>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</ModalPara>
        <Ul>
          <Li>보존항목: 결제기록</Li>
          <Li>보존 근거: 계약 또는 청약철회 등에 관한 기록</Li>
          <Li>보존 기간: 3년/ 회원탈퇴 및 서비스(제휴) 탈퇴 후 5일까지(정보통신망법)</Li>
          <Li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</Li>
          <Li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</Li>
          <Li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</Li>
        </Ul>
      </Modal>
      <Button type="submit">작성완료</Button>

    </Div>
  )

}

export default Form;
