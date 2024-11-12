import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../module/store";

const PokemonCard = ({ pokemon}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Link to={`/pokemonDetail/${pokemon.id}`}>
          <img src={pokemon.img_url} alt={pokemon.korean_name} />
          <h3>{pokemon.korean_name}</h3>
          <p>No.{pokemon.id}</p>
        </Link>
        <Button onClick={() => dispatch(addPokemon(pokemon))}>추가</Button>
      </Container>
    </div>
  );
};

const Button = styled.button`
  background-color: #ff4545;
  color: white;
  border-radius: 10px;
  border-style: none;
  padding: 5px;

  &:hover {
    background-color: #ff7575;
  }
`;

const Container = styled.div`
  background-color: white;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(37, 37, 37, 0.4);

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 8px 12px rgba(37, 37, 37, 0.4);
  }
`;

export default PokemonCard;
