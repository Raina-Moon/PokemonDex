import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../src/data/MOCK_DATA";
import styled from "styled-components";

const PokemonList = () => {

  return (
    <div>
      <Title>Pokemon List</Title>
      <GridCard>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </GridCard>
    </div>
  );
};

const Title = styled.h2`
  text-align: center;
`;

const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`

export default PokemonList;
