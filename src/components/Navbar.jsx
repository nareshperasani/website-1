import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
    cursor: pointer;cursor: pointer;
  `

  const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px){
    display: none;
  }
  `;
  const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  color: gray;
  cursor: pointer;

  &:hover{
      color: crimson;
      transition: 0.5s ease-in-out;
  }
  `;

  const Button = styled.button`
    border: 2px solid #fff;
    padding: 10px 15px;
    background-color: crimson;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  `

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Logo>Naresh</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
                </Left>
                <Button>
                    JOIN TODAY
                </Button>
        </Wrapper>
        </Container>
    )
}

export default Navbar;
