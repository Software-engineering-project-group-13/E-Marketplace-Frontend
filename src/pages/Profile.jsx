// import React from "react";
// import Navbar from "../components/Navbar";

// export const Profile = () => {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// };


import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Filler = styled.div`
  height: 10vh;
` 

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* background-color: #f6f8fa; */


  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;  
  /* padding: 20px; */
  /* margin-left: 20vw; */
  /* width: 20vw; */
  /* background-color: #f6f8fa; */
  /* border-radius: 10px; */
  flex-direction: column;
  height: 80vh;
  /* height: 1vh; */
`;

const Wrapper1 = styled.div` 
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;
`;


const List = styled.form`
  display:flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  width: 1vw;
`;



const Input = styled.input`
  /* flex: 1; */
  width: 20vw;
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
  width: 35vw; 

  /* align-items: center; */
  justify-content: space-between;
`;

const Idname = styled.p`
  color: black;
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 500;
  /* width: 1; */
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 750;
  /* margin: auto; */
  margin-bottom: 25px;
`;

const Button = styled.button`
  border: none;
  padding: 12px 20px;
  background-color: #00bf63;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  :hover{
    background-color: #00964d;
    cursor: pointer;
  }
  width: 20vw;
  font-weight: 700;
`;

const Image = styled.img`
  height: 50vh;

`

const Profile = () => {
  return (
    <div>
      <Navbar /> 
      <Filler></Filler>
      <Container>
        <Wrapper>
          <Title> PROFILE </Title>
          <List>
            <Inputid>
              <Idname>NAME</Idname>
              <Input />
            </Inputid>
            
            <Inputid>
            <Idname>ROLL NO</Idname>
            <Input/>
            </Inputid>
            
            
            <Inputid>
            <Idname>EMAIL</Idname>
            <Input/>
            </Inputid>
            
            
            <Inputid>
            <Idname>ADDRESS</Idname>
            <Input/>
            </Inputid>
            
            
            <Inputid>
            <Idname>MOBILE NO.</Idname>
            <Input/>
            </Inputid>
            
          </List>
        </Wrapper>
        <Wrapper1>
          <Image src = "https://th.bing.com/th/id/OIP.o2hpFnUg2tfIYjubSXiw7gHaKK?pid=ImgDet&rs=1"></Image>  
          <Button>Edit Profile</Button>
        </Wrapper1> 
      </Container>
    </div>
  );
};

// const Heading = styled.div`
//   height: 20vw;
//   font-size: 30px;
//   padding-left: 100px;
//   border-color: black;
  
// `

// const Container = styled.div`

// `

// const Profile = () => {
//   return (
//     <div>
//       <Navbar />
//       <Filler></Filler>
//       <Heading>Profile</Heading>
//       <Container>HI</Container>
//     </div>
//   )
// }


export default Profile;