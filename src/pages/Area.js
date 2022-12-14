import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Choose from '../components/Choose'
import DishCard from '../components/DishCard';

export default function Area() {
  const [areas, setAreas] = useState([]);
  const [value, setValue] = useState('')
  const [dishes, setDishes] = useState([]);
  const [count, setCount] = useState(0);

  const areaUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  useEffect(() => {
    fetch(areaUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.meals);
        setAreas(data.meals)
    })
  }, [])

  const handleClick = (e) => {
    setValue(e.target.innerHTML)
    setCount(count + 1);
  }

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDishes(data.meals);
        console.log(data.meals);
        console.log(dishes);
      })
      .catch((err) => console.log(err));
  }, [count, dishes, url]);
  
  return (
    <Container className="Area flex-column">
      <Choose
        type="area"
        value={value}
        property={areas.map((area, index) => (
          <p key={index} onClick={handleClick}>
            {area.strArea}
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
              area={value}
              displayCategory="none"
              displayArea="block"
            />
          ))}
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  
`;