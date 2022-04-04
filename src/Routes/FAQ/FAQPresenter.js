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
            content: "asdfasfas",
        },
        {
            title: "교육은 어떻게 신청하나요?",
            var: false,
            content: "asdfasfas",
        },
        {
            title: "교육은 어떻게 신청하나요?",
            var: false,
            content: "asdfasfas",
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
