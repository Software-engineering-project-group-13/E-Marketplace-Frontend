import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container1 = styled.div`
  width: 97%;
  padding: 3px;
  /* padding-right: 50px; */
  display: flex;
  justify-content: space-between;
  background-color: #f6f8fa;
`

const Wrapper = styled.div`
  display: flex;  
  padding: 20px;
  width: 30%;
  background-color: #f6f8fa;
  border-radius: 10px;
  flex-direction: column;
`;

const Wrapper1 = styled.div` 
  margin-top: 20px;
  padding: 20px;
  width: 30%;
  background-color: #f6f8fa;
  color: blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 750;
  margin: auto;
  margin-bottom: 15px;
`;

const List = styled.form`
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

// const Input1 = styled.input`
//   flex: 1;
//   width: 13vw;
//   margin: 0px 5px 20px 0px;
//   padding: 10px;
//   border-radius: 5px;
//   border-color: white;
//   border: none;
//   box-shadow: 0px 0px 5px #ddd;
// `

const Input = styled.input`
  flex: 1;
  width: 28vw;
  margin: 0px 5px 20px 0px;
  padding: 10px;
  border-radius: 5px;
  border-color: white;
  border: none;
  box-shadow: 0px 0px 5px #ddd;
`;

const Inputid = styled.div`
  display: flex;
  margin: 1px;
  width: 100%;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
`;

const Idname = styled.p`
  color: black;
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 500;
`

const Idname1 = styled(Link)`
  color: blue;
  font-size: 15px;
  font-weight: 500;
  text-align: right;
`

const Button = styled.button`
  border: none;
  padding: 12px 20px;
  background-color: #00bf63;
  margin: auto;
  /* margin-top: 20px; */
  border-radius: 5px;
  :hover{
    background-color: #00964d;
    cursor: pointer;
  }
  width: 20vw;
  font-weight: 700;
`;

const Middler = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
`;

const Middler1 = styled.div`
  display: flex;
  justify-content: center;
`

const ChangePassword = () => {
  return (
    <div>
      <Navbar /> 
      <Container>
        <Wrapper>
          <Middler>
            <Title> CHANGE PASSWORD </Title>
          </Middler>
          <List>
            <Idname>Enter a new password.</Idname>
            <br></br>
            <Inputid>
              <Idname>New Password</Idname>
              <Input />
            </Inputid>

            <Inputid>
              <Idname>Confirm New Password</Idname>
              < Input/>
            </Inputid>
            
            
          </List>
          <Middler1>
            <Link to='/' style={{ textDecoration: "none", color: "white" }}>
              <Button
                style={{ color: "white" }}>
                Reset Password
              </Button>
            </Link>
          </Middler1>
        </Wrapper>
        {/* <Wrapper1>Didn't recieve the OTP?&ensp;<Link to= "/resetpassword" style={{color: "blue"}}>Resend OTP</Link></Wrapper1>  */}
      </Container>
      <Footer />
    </div>
  );
};

export default ChangePassword;