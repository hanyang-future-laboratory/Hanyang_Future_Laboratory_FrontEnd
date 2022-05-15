import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
    width: 100%;
    margin-top: 87px;
`;

const Board = styled.div`
    margin-left: 315px;
    margin-right: 315px;
`;

const Path = styled.div`
    margin-bottom: 43px;
    font: normal normal normal 15px/21px AppleSDGothicNeoM00;
    letter-spacing: 0px;
    color: #707070;
    span {
        margin: 0px 30px 0px 30px;
    }
    font: normal normal normal 15px/25px AppleSDGothicNeoR00;
    color: #636363;
    margin-left: 30px;
`;

const PostWrap = styled.div`
    margin: auto;
`;

const Text = styled.div`
    p {
        text-align: left;
        margin: 0px;
        font: normal normal normal 20px/26px AppleSDGothicNeoM00;
        letter-spacing: 0px;
    }
    p:first-child {
        font: normal normal normal 40px/25px AppleSDGothicNeoB00;
        margin-bottom: 30px;
    }
    p:last-child {
        margin-bottom: 30px;
    }
`;

const HelpWrap = styled.div`
    height: 400px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HelpText = styled.div`
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0px;
        color: #000000;
        span:first-child {
            font: normal normal normal 40px/55px AppleSDGothicNeoSB00;
        }
        span:nth-child(2) {
            font: normal normal normal 30px/45px AppleSDGothicNeoM00;
        }
        span:nth-child(3) {
            font: normal normal normal 30px/45px AppleSDGothicNeoM00;
        }
    }
`;

const HelpBtn = styled(Link)`
    display: flex;
    align-items: center;
    background: #22334d 0% 0% no-repeat padding-box;
    justify-content: center;
    width: 170px;
    height: 45px;
    margin: auto;
    border-radius: 30px;
    margin-top: 45px;
    :hover {
        background: #5783c4;
    }
    p {
        text-align: center;
        font: normal normal normal 15px/38px AppleSDGothicNeoB00;
        letter-spacing: 0px;
        color: #e4e4e4;
    }
`;
const PostBlock = styled.div`
    background: #fafafa 0% 0% no-repeat padding-box;
    border: 0.5px solid #707070;
    border-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :nth-child(2) {
        border-radius: 10px 10px 0 0;
    }
    :last-child {
        border-bottom: 0.5px solid #707070;
        margin-bottom: 50px;
        border-radius: 0 0 10px 10px;
    }
`;
const PostBlockColumn = styled.div`
    height: 45px;
    padding-left: 45px;
    display: flex;
    align-items: center;
`;

const HiddenBox = styled.div`
    height: 100px;
    border-top: 0.5px solid #707070;
    padding-left: 45px;
    display: ${(props) => (props.check ? "flex" : "none")};
    align-items: center;
`;

const PostText = styled.div`
    text-align: left;
    font: normal normal normal 15px/25px AppleSDGothicNeoM00;
    color: #000000;
    width: 90%;
    display: flex;
    justify-content: space-between;
    :hover {
        color: #5783c4;
    }
`;

const FAQPresenter = ({}) => {
    const [postBlockArr, setPostBlockArr] = useState([
        {
            title: "교육은 어떻게 신청하나요?",
            var: false,
            content:
                "상단 탭 오른쪽 교육 신청/문의를 통해서 원하시는 교육과 정보를 입력 후 신청해주시면 됩니다.",
        },
        {
            title: "결제는 어떻게 하나요?",
            var: false,
            content:
                "교육 신청을 해주시면 회원정보를 통해 결제 정보 및 안내사항을 따로 연락드립니다.",
        },
        {
            title: "온라인 강의는 다시 수강할 수 없나요?",
            var: false,
            content:
                "저희는 현장감 있는 교육을 제공해 드리고자 실시간 강의를 실시하고 있습니다. 강의 녹화 및 배포는 엄격히 금지하고 있습니다.",
        },
        {
            title: "실시간 온라인 강의는 어떤 프로그램을 이용하여 진행되나요?",
            var: false,
            content:
                "zoom을 이용하여 실시간 강의를 진행하고 있습니다. zoom 링크는 수업 전에 미리 보내드리며, 수업을 수강하시는 모든 학생분들이 간단한 zoom 사용법을 사전에 익히고 계셔야 합니다.",
        },
        {
            title: "온라인 강의는 다시 수강할 수 없나요?",
            var: false,
            content:
                "저희는 현장감 있는 교육을 제공해 드리고자 실시간 강의를 실시하고 있습니다. 강의 녹화 및 배포는 엄격히 금지하고 있습니다.",
        },
        {
            title: "온라인 교육 교구는 추가 주문할 수 있나요?",
            var: false,
            content:
                "교육 신청 이후에 변동 사항이 생기면 수업 일자 5일 전까지 알려주시면 추가 비용 지불 후 배송해드립니다.",
        },
        {
            title: "교육이 끝난 후, 교육 때 사용했던 교구를 추가로 주문할 수 있나요?",
            var: false,
            content:
                "수강하신 교육 이름과 수강하셨던 날짜, 소속, 성함을 챗봇이나 카카오 ‘구름다리’를 통해 보내주시면 안내 도와드리겠습니다.",
        },
        {
            title: "청소년 교육 캠프의 안전관리는 어떻게 진행 되고 있나요?",
            var: false,
            content:
                "운영본부는 학생들의 캠프생활을 종합적으로 점검하여 안전관리에 만전을 기하고 있습니다.",
        },
        {
            title: "캠프가 진행되는 숙소는 어떤 환경인가요?",
            var: false,
            content:
                "캠프 기간 중 학생들은 한양대학교 ERICA캠퍼스의 게스트하우스를 이용하게 됩니다.",
        },
        {
            title: "캠프를 운영하고 수업을 진행하는 멘토 선생님들은 어떤 분들이신가요?",
            var: false,
            content:
                "교육 선생님들은 모두 교육 전문 자격증을 소유하고 200-300시간 이상 교육을 받은 전문 강사님들입니다.",
        },
        {
            title: "궁금한 점은 어디로 문의하면 되나요?",
            var: false,
            content: "문의 : 한양미래연구소 (하이쓰리디) 070-8064-0829",
        },
    ]);

    const [openHandler, setOpenHandler] = useState([false, false, false]);

    const handleClick = (index) => {
        let arr = [...openHandler];
        arr[index] = !arr[index];
        setOpenHandler(arr);
    };

    const PosterBlock = () => {
        return postBlockArr !== []
            ? postBlockArr.map((item, index) => (
                  <PostBlock key={index} onClick={() => handleClick(index)}>
                      <PostBlockColumn>
                          <PostText>
                              {item.title}
                              <span>{openHandler[index] ? " 🔼" : " 🔽"}</span>
                          </PostText>
                      </PostBlockColumn>
                      <HiddenBox
                          check={openHandler[index]}
                          dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                  </PostBlock>
              ))
            : null;
    };
    return (
        <Wrap>
            <Board>
                <Path>
                    홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 1:1 문의
                </Path>
                <PostWrap>
                    <Text>
                        <p> 자주 묻는 질문 </p>
                        <p> 한양미래연구소에 궁금한 점이 있으신가요? </p>
                        <p> 자주 묻는 질문 FAQ 리스트를 확인해보세요. </p>
                    </Text>
                    <PosterBlock />
                </PostWrap>
            </Board>
            <HelpWrap>
                <HelpText>
                    <span>원하는 답변을 찾기 어려우신가요?</span>
                    <span>한양미래연구소에게 직접 문의 해주세요</span>
                    <span>최대한 빠르게 도와드리겠습니다!</span>
                    <HelpBtn to="/inquiry">
                        <p>1:1 문의 하기</p>
                    </HelpBtn>
                </HelpText>
            </HelpWrap>
        </Wrap>
    );
};

export default FAQPresenter;
