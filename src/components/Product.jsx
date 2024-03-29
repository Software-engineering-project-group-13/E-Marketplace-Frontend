import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useSelector } from "react-redux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  border-radius: 15px;
`;

const Container = styled.div`
  flex: 1;
  margin: 15px;
  /* padding: 10%; */
  min-width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cccfd0;
  position: relative;
  border-radius: 15px;
  background-image: radial-gradient(#1e285e 100px, #f6f8fa);
  /* background-image: linear-gradient(to bottom right, #1e285e, #f6f8fa); */
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 85%;
  object-fit: contain;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #3547af;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Product = ({ item }) => {
  console.log(item);
  const user = useSelector((state) => state.user.currentUser);

  const handleFavorite = async () => {
    try {
      // console.log(productId.productId);
      const res = await publicRequest.post("/favorites/" + item._id);
      // console.log(res.data);
      //   setProduct(res.data);
    } catch {}
  };

  return (
    <Container>
      <Image src={item.img[0]} />
      <Info>
        {user && (
          <Icon onClick={handleFavorite()}>
            <FavoriteBorderIcon />
          </Icon>
        )}
        <Link
          to={"/product/" + item._id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Icon>
            <OpenInFullIcon />
          </Icon>
        </Link>
      </Info>
    </Container>
  );
};

export default Product;
