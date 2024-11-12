import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import MOCK_DATA from "../src/data/MOCK_DATA";
import { addPokemon, deletePokemon } from "../module/store";
import { useDispatch } from "react-redux";

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // console.log("ID =>", id);

  const pokemon = MOCK_DATA.find((e) => e.id == Number(id));

  return (
    <Container>
      <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <Name>{pokemon.korean_name}</Name>
      <h3>타입 : {pokemon.types.join(",")}</h3>
      <p>{pokemon.description}</p>
      <ButtonContainer>
      <Button onClick={() => dispatch(addPokemon(pokemon))}>추가</Button>
      <Button onClick={() => dispatch(deletePokemon(pokemon))}>삭제</Button>
      </ButtonContainer>
      <StyledLink to="/dex">뒤로가기</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #ff4545;
  color: white;
  border: none;
  padding: 9px;
  border-radius: 10px;
  &:hover {
    background-color: #ff7575;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`

const StyledLink = styled(Link)`
  background-color: #ff4545;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  text-decoration: none;
  &:hover {
    background-color: #ff7575;
  }
`;

const DetailImg = styled.img`
  height: 200px;
`;

const Name = styled.h1`
  color: #fc1c1c;
`;

export default PokemonDetail;
