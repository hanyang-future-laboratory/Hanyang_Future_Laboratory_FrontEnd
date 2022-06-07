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
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: white;
    width: 500px;
    height: 600px;
`;
const Input = styled.input`
    border: 1px solid black;
    width: 200px;
    height: 100px;
`;

const Submit = styled.input`
    border: 1px solid black;
    width: 200px;
    height: 100px;
    background: #11ab69;
    color: white;
`;

const OnlinePresenter = ({ history }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const submitHander = async () => {
        try {
            console.log("login");
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
                <Input
                    placeholder="User ID"
                    name="username"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
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
