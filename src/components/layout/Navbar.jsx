import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();


    const goToHome = () => {
      navigate('/');
    }
    const goToLogin = () => {
      navigate('/api/users/login');
    }
    const goToBoards = () => {
      navigate('/api/boards/main')
    }
    const goToRolling = () => {
      navigate('/api/rollingpapers/:id')
    }

  
  return (
    <NavBoxWrap>
      <FirstNavBox>
        <LogoBox onClick={goToHome}>
          <LogoImg src='img/logo.png'/>
        </LogoBox>
        <LoginBox onClick={goToLogin}>
          <div><FontAwesomeIcon icon={faUser} /></div>
          {/* <div>로그인</div> */}
        </LoginBox>
      </FirstNavBox>
      <NavArea>
        <NavBox>
            <NavList onClick={goToBoards}>정보방</NavList>
            <NavList onClick={goToRolling}>롤링페이퍼</NavList>
        </NavBox>
      </NavArea>
    </NavBoxWrap>
);
};

export default Navbar;

const LogoBox = styled.div`
  cursor: pointer;
`

const LogoImg = styled.img`
  width: 100px;
`

const FirstNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LoginBox = styled.div`
  display: flex;
  cursor: pointer;
`

const NavBox = styled.div`
  display: flex;
  list-style-type: none;
`

const NavList = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
    text-decoration-color:#8F1919;
  }
`

const NavArea = styled.div`
  display: flex;
  justify-content: flex-end;
  
`

const NavBoxWrap = styled.div`
  margin: 20px 10px;
`