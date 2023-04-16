import React from "react";
// import Navbar from "../../components/Navbar";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/StyledComponents";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Footer from "../../components/Footer";

import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { stepLabelClasses } from "@mui/material";
import { style } from "@mui/system";
// import { Container } from "@material-ui/core";
// import Favorites from './Favorites';


// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   /* align-items: center; */
//   justify-content: center;
// `;

// const Wrapper1 = styled.div`
//   display: flex;
//   /* flex: 1; */
//   margin-right: 10vw;
//   flex-direction: column;
//   height: 80vh;
//   width: 25vw;
//   align-items: center;
//   justify-content: space-around;
//   /* background-color: lightgray; */
// `;

// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 50vh;
//   margin-top: 45px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgb(0, 0, 0, 0.1);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
// `;

// const ImageWrapper = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;

//   &:hover ${Info} {
//     opacity: 1;
//   }
// `;

// const Image = styled.img`
//   height: 50vh;
//   /* padding-bottom: 20px;
//   object-fit: cover; */
//   z-index: 2;
//   /* box-shadow: 0px 0px 5px #696969; */
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: pink;
//     transform: scale(1.1);
//     cursor: pointer;
//   }
// `;

// const ButtonWrapper = styled.button`
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   border: none;
// `;

// const Wrapper2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* align-items: flex-start; */
//   /* background-color: yellow; */
//   width: 50vw;
//   height: 75vh;
//   margin-top: 20px;
//   /* margin-right: 27vw; */
// `;

// const Description = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
//   margin-top: 10px;
// `;

// const DescId = styled.h3`
//   display: flex;
//   justify-content: left;
// `;

// const DescContent = styled.p`
//   display: flex;
//   justify-content: left;
//   font-family: "DynaPuff", cursive;
// `;

// const Divider = styled.hr`
//   background-color: lightgray;
//   width: 100%;
//   height: 3px;
//   border: none;
// `;

// const Comments = styled.div`
//   border: 2px solid lightgray;
//   display: flex;
//   justify-content: center;
//   margin-top: 50px;
//   font-weight: 500;
//   padding: 5px;
// `;

// const Favorites = () => {
//   return (
//     <div>
//       <Navbar />
//       <Filler></Filler>
//       <Container>
//         <Wrapper1>
//           <ImageWrapper>
//             <Image src="https://www.prodirectsport.com/cricket/productimages/Main/193888_Main_Thumb_0380895.jpg" />
//             <Info>
//               <Icon>
//                 <FavoriteBorderIcon />
//               </Icon>
//             </Info>
//           </ImageWrapper>
//           <ButtonWrapper>
//             <Button marginbelow style={{ color: "white" }}>
//               Request Seller Contact
//             </Button>
//             <Button marginbelow style={{ color: "white" }}>
//               Buy Item
//             </Button>
//           </ButtonWrapper>
//         </Wrapper1>
//         <Wrapper2>
//           <Description>
//             <DescId>Product</DescId>
//             <DescContent>Cricket Bat</DescContent>
//           </Description>
//           <Divider />
//           <Description>
//             <DescId>Company</DescId>
//             <DescContent>Kookaburra</DescContent>
//           </Description>
//           <Divider />
//           <Description>
//             <DescId>Categeory</DescId>
//             <DescContent>Sports Equipment</DescContent>
//           </Description>
//           <Divider />
//           <Description>
//             <DescId>Size</DescId>
//             <DescContent>2ft</DescContent>
//           </Description>
//           <Divider />
//           <Description>
//             <DescId>Age</DescId>
//             <DescContent>2 years</DescContent>
//           </Description>
//           <Divider />
//           <Description>
//             <DescId>Product Details</DescId>
//             <DescContent>
//               It is a kookoburra bat weighs 1kg provided with a grip. It is well
//               knocked and doesn't have a single crack. It is provided with
//               getting.
//             </DescContent>
//           </Description>
//           <Divider />
//           <Comments>
//             <Link to="\Comments" style={{ color: "blue" }}>
//               Comments
//             </Link>
//           </Comments>
//         </Wrapper2>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default Favorites;

const Filler = styled.div`
  height: 15vh;
`;

const Divider = styled.hr`
  background-color: lightgray;
  width: 100%;
  height: 3px;
  border: none;
`;

const Heading = styled.h1`
  text-align: center;
  height: 10vh;
`
const TableHeading = styled.div`
  margin: 0.5%;
  display: flex;
`

const ItemHeading = styled.div`
  /* text-align: center; */
  padding-left: 5%;
  width: 50%;
  font-weight: 600;
  font-size: large;
`

const PriceHeading = styled.div`
  width: 25%;
  font-weight: 600;
  font-size: large;
  /* text-align  : center; */
  padding-left: 7%;

`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

const Item = styled.div`
  height: 12vw;
  background-color: #ECF0F1;
  width: 100%;
  display: flex;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  padding-left: 2%;
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  padding: 10px;

// `;

const Image = styled.img`
  height: 20vh;
  /* width : 130px; */
  /* width: 20vw; */
  align-items: left;
  /* background-color: lightgoldenrodyellow; */
  
  /* padding-bottom: 20px;
  object-fit: cover; */
  /* z-index: 2; */
  /* box-shadow: 0px 0px 5px #696969; */
`;

const ProdName = styled.div`
  font-size: larger;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 10px;
  /* background-color: lightblue; */
`

const ProdCategory = styled.div`
  font-size: large;
  font-weight: 300;
  display: flex;
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
  font-weight: 600;
  margin: 10px;
  text-align: center;
  /* background-color: lightcyan; */
  height: 85%;
  width: 35%;
`

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ECF0F1;
  border: none;
  padding-bottom: 4%;
  width: 10%;
`;

const Favorites = () => {
  return (
    <div>
      <Navbar />
        <Filler></Filler>
        <Heading>
          Your Favorites
        </Heading>
        <TableHeading>
          <ItemHeading>
            Item
          </ItemHeading>
          <PriceHeading>
            Price
          </PriceHeading>
        </TableHeading>
        <Divider />
        <Container>
            <Item>
              <ImageWrapper>
                <Image src="https://www.prodirectsport.com/cricket/productimages/Main/193888_Main_Thumb_0380895.jpg" />      
              </ImageWrapper>
              <ProdName>
                Kookaburra Cricket Bat 
                <ProdCategory>
                Sports Equipment
                </ProdCategory>
              </ProdName>
              <PriceContainer>
                Rs. 500
              </PriceContainer>
              <ButtonWrapper>
                <Button>
                CONTACT SELLER
                </Button>
              </ButtonWrapper>
            </Item>
            <Divider/>
            <Item>
              <ImageWrapper>
                <Image src="https://www.prodirectsport.com/cricket/productimages/Main/193888_Main_Thumb_0380895.jpg" />      
              </ImageWrapper>
              <ProdName>
                Kookaburra Cricket Bat 
                <ProdCategory>
                Sports Equipment
                </ProdCategory>
              </ProdName>
              <PriceContainer>
                Rs. 500
              </PriceContainer>
              <ButtonWrapper>
                <Button>
                CONTACT SELLER
                </Button>
              </ButtonWrapper>
            </Item>
            <Divider/>
        </Container>
      <Footer />
    </div>
  );
};
export default Favorites;