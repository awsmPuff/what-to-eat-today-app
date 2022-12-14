import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Choose from "../components/Choose";
import DishCard from "../components/DishCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const [dishes, setDishes] = useState([]);
  const [count, setCount] = useState(0);

  const categoriesUrl =
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  useEffect(() => {
    fetch(categoriesUrl)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.meals);
        console.log(categories);
      })
      .catch((err) => console.log(err));
  }, [categories]);

  const handleClick = (e) => {
    setValue(e.target.innerHTML);
    setCount(count + 1);
  };

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDishes(data.meals);
        console.log(data.meals);
        console.log(dishes);
      })
      .catch((err) => console.log(err));
  }, [count, url]);

  return (
    <Container className="Categories flex-column">
      <Choose
        type="category"
        value={value}
        property={categories.map((category, index) => (
          <p key={index} onClick={handleClick}>
            {category.strCategory}
          </p>
        ))}
      />
      {dishes === null ? (
        ""
      ) : (
        <div className="dish-list">
          {dishes.map((dish) => (
            <DishCard
              key={dish.idMeal}
              link={`/dish/${dish.idMeal}`}
              img={dish.strMealThumb}
              name={dish.strMeal}
              displayCategory="block"
              displayArea="none"
              category={value}
            />
          ))}
        </div>
      )}
    </Container>
  );
}

const Container = styled.div``;
