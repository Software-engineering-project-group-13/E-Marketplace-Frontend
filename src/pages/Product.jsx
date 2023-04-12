import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Button from "../components/StyledComponents";

const Filler = styled.div`
  height: 10vh;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper1 = styled.div`
  /* display: flex; */
  /* flex: 1; */
  margin-right: 10vw;
  /* flex-direction: column; */
  height: 50vh;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 85%;
  padding-bottom: 20px;
`;

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: none;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 27vw;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescId = styled.h3`
  display: flex;
  justify-content: left;
`;

const DescContent = styled.p`
  display: flex;
  justify-content: left;
`;

const Product = () => {
  return (
    <div>
      <Navbar />
      <Filler></Filler>
      <Container>
        <Wrapper1>
          <Image src="https://th.bing.com/th/id/OIP.o2hpFnUg2tfIYjubSXiw7gHaKK?pid=ImgDet&rs=1" />
          <ButtonWrapper>
            <Button style={{ color: "white" }}>Button1</Button>
            <Button style={{ color: "white" }}>Button2</Button>
          </ButtonWrapper>
        </Wrapper1>
        <Wrapper2>
          <Description>
            <DescId>Name</DescId>
            <DescContent>Sahil</DescContent>
          </Description>
          <Description>
            <DescId>Age</DescId>
            <DescContent>20</DescContent>
          </Description>
          <Button style={{ color: "white" }}>Button3</Button>
        </Wrapper2>
      </Container>
    </div>
  );
};

export default Product;
