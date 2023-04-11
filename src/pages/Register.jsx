import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* display: flex;   */
  padding: 20px;
  width: 30%;
  background-color: #ebf1ea;
  border-radius: 10px;

`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 750;
  margin: auto;
`;

const List = styled.form`
  display:flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 5px 0px 0px;
  padding: 10px;
  border-radius: 5px;
  border-color: white;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #057605;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
`;
const Title1 = styled.Title`
  display: flex;
`;

const Register = () => {
  return (
    <div>
      <Navbar />    
      <Container>
        <Wrapper>
          <Title1><Title> REGISTER </Title> </Title1>
          <List>
            <Input placeholder= "First name"/>
            <Input placeholder= "Last name"/>
            <Input placeholder= "Username"/>
            <Input placeholder= "Institute email-id"/>
            <Input placeholder= "Phone number"/>
            <Input placeholder= "Password"/>
            <Input placeholder= "Confirm Password"/>
          </List>
            <Button style={{ color: "white"}}>
            <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                SIGNUP
              </Link>
            </Button>
        </Wrapper> 
      </Container>
    </div>
  );
};

export default Register;
