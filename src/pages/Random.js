import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DishDetails from "../components/DishDetails";

export default function Random() {
  const [recipe, setRecipe] = useState({});
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("no");
  const [show, setShow] = useState(true);
  const [hint, setHint] = useState("flex");
  // Must add 'https://' prefix
  const randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    fetch(randomUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipe(data.meals[0]);
      });
  }, [count]);

  console.log(recipe);

  const Arr = Object.entries(recipe);
  const ingredientsArr = Arr.filter(
    ([key, value]) => key.includes("strIngredient") && value !== ""
  );
  const measuresArr = Arr.filter(
    ([key, value]) => key.includes("strMeasure") && value !== ""
  );

  const chooseRandom = () => {
    setCount(count + 1);
    setDisplay("yes");
    setShow(false);
  };

  const hideHint = () => {
    setHint("none");
  };

  const tags = String(recipe.strTags).replaceAll(",", ", ");

  return (
    <Container className="Random">
      {show ? (
        <div className="headings flex-column">
          <h1>Have difficulty choosing what to eat?</h1>
          <h2>Click the dice to make a decision!</h2>
        </div>
      ) : (
        ""
      )}

      <div className="hint absolute flex-row" style={{ display: `${hint}` }}>
        <p>Continue click dice to change.</p>
        <svg
          onClick={hideHint}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
        </svg>
      </div>

      <div className="change absolute" onClick={chooseRandom}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="2.8em"
          width="2.8em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
            fill="currentColor"
          ></path>
          <path
            d="M16.9451 14.8921C15.8405 14.8921 14.9451 15.7875 14.9451 16.8921C14.9451 17.9967 15.8405 18.8921 16.9451 18.8921C18.0496 18.8921 18.9451 17.9967 18.9451 16.8921C18.9451 15.7875 18.0496 14.8921 16.9451 14.8921Z"
            fill="currentColor"
          ></path>
          <path
            d="M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {display === "yes" ? (
        <DishDetails
          img={recipe.strMealThumb}
          name={recipe.strMeal}
          ingredients={ingredientsArr.map((i, index) => (
            <li key={index}>{i[1]}</li>
          ))}
          measures={measuresArr.map((m, index) => (
            <li key={index}>{m[1]}</li>
          ))}
          area={recipe.strArea}
          category={recipe.strCategory}
          tags={recipe.strTags ? <span>{tags}</span> : ""}
          youtube={recipe.strYoutube}
          instructions={recipe.strInstructions}
        />
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  position: relative;
  padding: 3rem 10% 5rem;
  .headings {
    margin-top: 8rem;
    gap: 2rem;
    h1 {
      font-size: 3rem;
    }
  }
  .hint {
    color: gray;
    right: 15%;
    top: 9rem;
    width: 16rem;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    gap: 0.8rem;
    border: solid 1px gray;
    padding: 0.3rem 0.5rem;
    border-radius: 1rem;
    animation: expand 0.3s linear;
    svg {
      cursor: pointer;
      width: 1rem;
      height: 1rem;
      padding: 1%;
      border-radius: 50%;
      &:hover {
        border: solid 1px var(--light-gray);
        color: var(--light-gray);
      }
    }
  }
  .change {
    right: 10%;
    top: 8.5rem;
    cursor: pointer;
    animation: spin 2s infinite linear;
    &:hover {
      animation-play-state: paused;
    }
  }
  .DishDetails {
    margin-top: 8rem;
  }

  @media (max-width: 480px) {
    height: max-content;
    .headings {
      margin-top: 14rem;
      gap: 2rem;
      h1 {
        font-size: 3rem;
      }
    }
    .hint {
      right: 0;
      left: 0;
      margin: auto;
      top: 13rem;
      gap: 0.8rem;
    }
    .change {
      right: 0;
      left: 0;
      text-align: center;
      margin: auto;
      top: 8.3rem;
    }
    .DishDetails {
      margin-top: 8rem;
    }
  }
`;
