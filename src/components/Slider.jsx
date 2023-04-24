import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components" 
import React from "react"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;

`;

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    width: 100vx;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
 

const Slider = () => {
  return (
    <Container>
        <Arrow direction = "left">
             <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
                <Image src = "https://m.media-amazon.com/images/M/MV5BZDg4MDI1ZDUtZTQ3My00ZWViLThhM2YtMWI2NjgyNDAyMmUwXkEyXkFqcGdeQXVyMTYzNTY4NjAy._V1_FMjpg_UX1000_.jpg"/>
            </ImgContainer>
            <InfoContainer></InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction = "right">
             <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider