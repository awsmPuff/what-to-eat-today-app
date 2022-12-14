import React, { useEffect, useState } from "react";
import DishDetails from "../components/DishDetails";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Dish(props) {
  const { id } = useParams();
  const [dish, setDish] = useState([]);
  const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    fetch(idUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDish(data.meals[0]);
      });
  }, [idUrl]);

  const Arr = Object.entries(dish);
  const ingredientsArr = Arr.filter(
    ([key, value]) => key.includes("strIngredient") && value !== ""
  );
  const measuresArr = Arr.filter(
    ([key, value]) => key.includes("strMeasure") && value !== ""
  );

  const tags = String(dish.strTags).replaceAll(",", ", ");

  return (
    <Container className="Dish">
      <DishDetails
        img={dish.strMealThumb}
        name={dish.strMeal}
        ingredients={ingredientsArr.map((i, index) => (
          <li key={index}>{i[1]}</li>
        ))}
        measures={measuresArr.map((m, index) => (
          <li key={index}>{m[1]}</li>
        ))}
        area={dish.strArea}
        category={dish.strCategory}
        tags={dish.strTags ? <span>{tags}</span> : ""}
        youtube={dish.strYoutube}
        instructions={dish.strInstructions}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 10%;
`;
