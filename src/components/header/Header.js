import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu>
        <img src="https://www.svgrepo.com/show/22896/menu.svg" alt="menu" />
      </CustomMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top:0;
  left:0;
  right: 0;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex: 1;

@media (max-width:768px) {
  display: none;
}
p{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
`;
const RightMenu = styled.div`
  a{
      font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  }
  display: flex;
  align-items: center;

`

const CustomMenu = styled.div`
cursor: pointer;
width: 20px;

`