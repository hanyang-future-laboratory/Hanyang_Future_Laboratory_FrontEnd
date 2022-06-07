import React, { useState } from "react";
import SubTop2 from "Components/SubTop2";
import styled from "styled-components";
import ItemComponent from "Components/Poster/Item";
import { registerApi } from "api";

const Container = styled.div`
    width: 80vw;
    display: grid;
    grid-template-columns: 1.5fr 5fr;
    margin: auto;
`;
const ContainerLeft = styled.div`
    background: #f3f3f3;
    border-bottom: 1px solid #deddde;
    border-right: 1px solid #deddde;
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 70px;
`;
const ContainerRight = styled.div`
    border-bottom: 1px solid #deddde;
    display: flex;
    align-items: center;
    padding-left: 50px;
`;
const Type = styled.div``;
const Input = styled.input`
    height: 30px;
    width: 400px;
    padding-left: 20px;
    border: 1px solid #deddde;
`;
const Require = styled.div`
    font-size: 12px;
    color: #2a72e6;
    margin-left: 5px;
`;

const FormContainer = styled.div`
    margin: 20px 0;
`;

const Title = styled.div`
    margin: 30px 0;
    margin-left: 10vw;
    font-size: 25px;
`;
const Button = styled.button`
    background: var(--main-color);
    width: 150px;
    height: 60px;
    border: 0;
    color: white;
    float: right;
    margin-right: 10vw;
    font-size: 20px;
    margin-bottom: 50px;
`;

const RegisterPresenter = ({ subTopData }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [gender, setGender] = useState("");
    const [type, setType] = useState("");
    const [parent, setParent] = useState("");
    const [parentNumber, setParentNumber] = useState("");
    const formArr = [
        {
            type: "아이디",
            placeholder: "User ID",
            name: "username",
            value: id,
            setValue: setId,
        },
        {
            type: "비밀번호",
            placeholder: "Password",
            name: "password",
            value: password,
            setValue: setPassword,
        },
        {
            type: "비밀번호 확인",
            placeholder: "Password (Re-type)",
            name: "username2",
            value: passwordCheck,
            setValue: setPasswordCheck,
        },
        {
            type: "이름",
            placeholder: "User name",
            name: "name",
            value: name,
            setValue: setName,
        },
        {
            type: "이메일 주소",
            placeholder: "Email Address",
            name: "email",
            value: email,
            setValue: setEmail,
        },
        {
            type: "휴대폰 번호",
            placeholder: "010-0000-0000",
            name: "phonenumber",
            value: phoneNumber,
            setValue: setphoneNumber,
        },
        {
            type: "생년월일",
            placeholder: "Click Here",
            name: "birthday",
            value: birthDay,
            setValue: setBirthDay,
        },
        {
            type: "성별",
            placeholder: "남성 / 여성",
            name: "sex",
            value: gender,
            setValue: setGender,
        },
        {
            type: "구분",
            placeholder: "학생 / 학부모 / 교사 중 해당되는 항목을 적어주세요",
            name: "jobcategory",
            value: type,
            setValue: setType,
        },
        {
            type: "보호자명",
            placeholder: "보호자명을 입력해주세요",
            name: "nokname",
            value: parent,
            setValue: setParent,
        },
        {
            type: "보호자 연락처",
            placeholder: "010-0000-0000",
            name: "nokphonenumber",
            value: parentNumber,
            setValue: setParentNumber,
        },
    ];

    const submitHandler = async () => {
        const body = {};
        formArr.map((item) => {
            body[item.name] = item.value;
        });
        body.address = "경기도 시흥시 시흥대로";
        try {
            const response = await registerApi.register(body);
            console.log(response);
        } catch (e) {}
    };

    return (
        <>
            <SubTop2 subTopData={subTopData} />
            <Title>Create Account</Title>
            <FormContainer>
                {formArr.map((item, index) => (
                    <Container key={index}>
                        <ContainerLeft>
                            <Type>{item.type}</Type>
                            <Require>(필수입력)</Require>
                        </ContainerLeft>
                        <ContainerRight>
                            <Input
                                placeholder={item.placeholder}
                                value={ItemComponent.value}
                                onChange={(e) => item.setValue(e.target.value)}
                                name={item.name}
                            />
                        </ContainerRight>
                    </Container>
                ))}
            </FormContainer>
            <Button onClick={submitHandler}>가입</Button>
        </>
    );
};
export default RegisterPresenter;
