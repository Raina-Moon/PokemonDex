import React from "react";
import PokemonList from "../../components/PokemonList";
import Dashboard from "../../components/Dashboard";
import styled from "styled-components";

const Dex = () => {
  return (
    <Container>
      <Dashboard />
      <PokemonList />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f8ff37;
  padding: 10px;
`;

export default Dex;
