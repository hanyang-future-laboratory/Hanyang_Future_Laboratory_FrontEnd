import { Link } from 'react-router-dom';
import styled from "styled-components";

const Button = styled.button`
width: 350px;
height: 100px;
background-color: var(--sub-color);
border: 0;
margin:auto;
margin-top: 100px;
margin-bottom: 100px;
display:block;
border-radius: 20px;
font-size: 20px;
`;


const Buttons = ({ title }) => (
    <Link to="./EduInquire">
        <Button>{title}</Button>
    </Link>
    
);



export default Buttons;



