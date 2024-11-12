import React from "react";
import Pokeball from "../src/assets/pokemonball.jpg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemon } from "../module/store";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { selectedPokemons } = useSelector((state) => state.selectedPokemons);

    const displayedPokemons = [
    ...selectedPokemons,
    ...Array(6 - selectedPokemons.length).fill(null),
  ];

  return (
    <Container>
      <Title>My Pokemons In My Pocket</Title>
      <div>
        <ImgRow>
          {displayedPokemons.map((pokemon, index) =>
            pokemon ? (
              <SavedCard key={pokemon.id}>
                <img src={pokemon.img_url} alt={pokemon.korean_name} />
                <h3>{pokemon.korean_name}</h3>
                <Button onClick={() => dispatch(deletePokemon(pokemon))}>삭제</Button>
              </SavedCard>
            ) : (
              <StyledImg
                key={`empty-${index}`}
                src={Pokeball}
                alt="Empty Pokeball"
              />
            )
          )}
        </ImgRow>
      </div>
    </Container>
  );
};

const ImgRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledImg = styled.img`
  width: 100px;
  border-radius: 15px;
  border: 5px dotted #7c7c7c;
  margin: 20px;
`;

const Container = styled.div`
  padding: 20px;
  background-color: white;
  height: 300px;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

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

const SavedCard = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default Dashboard;
