import React from "react";
import { Link } from "react-router-dom";
import Pikachu from "../assets/pikachuu.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <PikaImg src={Pikachu} alt="Pikachu" />
      <StyledLink to="/dex">포켓몬 도감 시작하기</StyledLink>
    </Container>
  );
};

const PikaImg = styled.img`
  width: 300px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const StyledLink = styled(Link)`
  background-color: #ff4545;
  color: white;
  border-radius: 10px;
  border-style: none;
  padding: 10px;
  text-decoration: none;
  &:hover {
    background-color: #ff7575;
  }
`;
export default Home;
