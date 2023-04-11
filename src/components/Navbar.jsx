import { HomeOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 50px;
  background-color: #1e285e;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-top: 8px;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* padding: 1px; */
  justify-content: space-between;
`;

// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
//     display: flex;
// `

const HomeButtonContainer = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e2e2e2;
  border-radius: 5px;
  width: 100%;
  height: 2rem;
  padding: 0 5px;
  box-shadow: 0px 0px 5px #ddd;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 1rem;
  ::placeholder {
    color: grey;
  }
  margin-left: 5px;
  :focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: flex-start;
  /* background-color: green; */
`;

const Right = styled.div`
  flex: 0;
  display: flex;
  padding-right: 10px;
  /* background-color: yellow; */
`;

const CartOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 10px;
`;

const ProfileOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 10px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <HomeButtonContainer>
            <HomeOutlined style={{ color: "white", fontSize: 30 }} />
          </HomeButtonContainer>
          <SearchContainer>
            <Search style={{ color: "#1e285e" }} />
            <Input placeholder="Search" />
          </SearchContainer>
        </Left>
        <Center></Center>
        <Right>
          <CartOption>
            <ShoppingCartOutlined style={{ color: "white", fontSize: 27 }} />
            <p>Cart</p>
          </CartOption>
          <ProfileOption>
            <AccountCircle style={{ color: "white", fontSize: 30 }} />
            <p>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Profile
              </Link>
            </p>
          </ProfileOption>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
