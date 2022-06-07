import { loginApi } from "api";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10% 30%;
`;

const LoginContainer = styled.form`
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: white;
    width: 500px;
    height: 500px;
    align-items: center;
`;
const Input = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 85%;
    height: 50px;
    padding-left: 10px;
`;

const Submit = styled.input`
    border: 0;
    text-align: center;
    width: 85%;
    height: 50px;
    background: #11ab69;
    color: white;
    margin-top: auto;
    margin-bottom: 50px;
`;

const Title = styled.div`
    font-size: 25px;
    padding-top: 40px;
`;
const SubTitle = styled.div`
    color: rgba(0, 0, 0, 0.3);
    font-size: 13px;
`;
const Type = styled.div`
    float: left;
    width: 85%;
`;

const OnlinePresenter = ({ history }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const submitHander = async () => {
        try {
            const body = { username: id, password };
            const response = await loginApi.login(body);
            const token = response.data.token;
            localStorage.setItem("jwtToken", token);
            history.push("/");
        } catch (e) {
            alert("다시 시도해 주세요");
            console.log(e);
        }
    };
    return (
        <Section>
            <LoginContainer method="POST">
                <Title>로그인</Title>
                <SubTitle>
                    로그인 아이디와 비밀번호 입력하신 후 '로그인' 버튼을
                    클릭하세요.
                </SubTitle>
                <Type>아이디</Type>
                <Input
                    placeholder="User ID"
                    name="username"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <Type>비밀번호</Type>
                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Submit value="로그인" onClick={submitHander} />
            </LoginContainer>
        </Section>
    );
};

export default withRouter(OnlinePresenter);
