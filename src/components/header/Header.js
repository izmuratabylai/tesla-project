import React,{useState} from "react";
import styled from "styled-components";

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);
  

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
      <CustomMenu onClick={()=>setBurgerStatus(true)}>
        <img src="https://www.svgrepo.com/show/22896/menu.svg" alt="menu" />
      </CustomMenu>
      <BurgerNav show={burgerStatus}>
        <CustomCloseBtn onClick={()=>setBurgerStatus(false)}>
          <img src="https://www.svgrepo.com/show/156979/close.svg" alt="close__btn" />
        </CustomCloseBtn>
        <li>
          <a href="#">Existin Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Taraz Supercar</a>
        </li>
        <li>
          <a href="#">Korday Sportcar</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
  

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

const BurgerNav = styled.div`
  position:  fixed;
  top:0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  text-align: start;
  flex-direction: column;
  
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  
  transition: .2s ease-in-out;
  li{
    padding: 15px 0 ;
    border-bottom: 1px solid rgba(0,0,0, 0.2);
    a{
      font-weight: 600;

    }
  }
 
`

const CustomCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  img {
    width: 20px;
  }
`;