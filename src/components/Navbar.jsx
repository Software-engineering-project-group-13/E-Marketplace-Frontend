import { HomeOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
    height: 50px;
    background-color: #1e285e;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    allign-items: center;
`;

// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
//     display: flex;
// `
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    allign-items: center;
    margin-left: 25px;
    background-color: white;
    // padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    
`;

const Cart = styled.div`
    flex: 1;
    text-align: center;
    allign-items: center;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <HomeOutlined style={{ color: "white", fontSize:35}}/>
                <SearchContainer>
                    <Search/>
                    <Input/>
                </SearchContainer>
            </Left>
            <Center>center</Center>
            <Right>
                <ShoppingCartOutlined style={{ color: "white", fontSize:35}}/>
                <Cart>cart</Cart>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
