import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DishCard from "../components/DishCard";
import SearchBar from "../components/SearchBar";

export default function Ingredients() {
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [input, url]);

  console.log(recipe);

  if (loaded) {
    if (recipe) {
      return (
        <Container className="Ingredients flex-column">
          <SearchBar value={input} onChange={handleChange} />
          <div className="dish-list">
            {recipe.map((r) => (
              <DishCard
                key={r.idMeal}
                link={`/dish/${r.idMeal}`}
                img={r.strMealThumb}
                name={r.strMeal}
                displayCategory="block"
                displayArea="block"
                category={r.strCategory}
                area={r.strArea}
              />
            ))}
          </div>
        </Container>
      );
    } else {
      return (
        <Container className="Ingredients flex-column">
          <SearchBar value={input} onChange={handleChange} />
          <h1 className="error">Sorry, your recipe is not found...</h1>
        </Container>
      );
    }
    
  
  } else {
    return (
      <Container className="flex-column">
        <SearchBar value={input} onChange={handleChange} />
        <h1 className="loading">Recipe is loaing now...</h1>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 8rem 10%;
  gap: 3.5rem;
  align-items: flex-start;
  .loading {
    margin-top: 6rem;
  }
  .SearchBar {
    width: 100%;
  }

   @media (max-width: 480px) {
    padding: 9rem 10%;
   }
`;
