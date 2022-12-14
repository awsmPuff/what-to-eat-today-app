import styled from "styled-components";
import Weather from "./Weather";
import { useState } from "react";

export default function Today({ weatherData }) {
  const [time, setTime] = useState("");
  var hello = "what would you like to eat?";
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = week[new Date().getDay()];
  const day = new Date().getDate();
  const month = months[new Date().getMonth()];
  const year = new Date().getFullYear();
  let mealTime;
  const now = new Date().getHours();
  const minutes = new Date().getMinutes();
  if (now >= 6 && now < 9) {
    mealTime = "breakfast";
  }
  if (now >= 9 && now < 12) {
    mealTime = "brunch";
  }
  if (now >= 12 && now < 14) {
    mealTime = "lunch";
  }
  if (now >= 14 && now < 17) {
    mealTime = "tea";
  }
  if (now >= 17 && now < 22) {
    mealTime = "dinner";
  }
  if (now >= 22 && now < 24) {
    mealTime = "sleep";
    hello = "let's have a rest.";
  }
  if (now >= 0 && now < 6) {
    mealTime = "sleep";
    hello = "let's have a rest.";
  }

  const displayTime = () => {
    setTime(
      new Date().toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
  };

  setInterval(() => {
    displayTime();
  }, 1000);

  const refresh = () => {
    window.location.reload();
  };

  return (
    <Container className="flex-row">
      <div>
        <p>
          {month} {day}, {year}
        </p>
        <button onClick={refresh} className="absolute">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 11H7.101c0-.003 0-.006.001-.009.065-.319.163-.634.291-.937.126-.297.281-.583.461-.85.178-.264.384-.513.61-.74C8.691 8.238 8.94 8.032 9.206 7.853c.266-.18.551-.334.848-.46.302-.128.617-.226.938-.291.658-.135 1.357-.135 2.018 0 .318.065.634.163.937.291.296.125.581.281.85.461.266.179.514.384.738.609l1.416-1.412c-.314-.316-.664-.604-1.036-.855-.373-.252-.773-.47-1.188-.646-.425-.18-.868-.317-1.315-.408-.923-.189-1.899-.189-2.819 0-.449.092-.892.229-1.316.409C8.858 5.727 8.458 5.944 8.086 6.196 7.716 6.445 7.368 6.733 7.05 7.05S6.445 7.716 6.197 8.085c-.252.373-.47.773-.646 1.19-.18.424-.317.867-.408 1.315C5.115 10.725 5.1 10.863 5.08 11H2l4 4L10 11zM14 13h2.899c-.001.003 0 .006-.001.008-.066.324-.164.639-.292.938-.123.293-.278.579-.459.848-.179.264-.385.514-.613.742-.225.225-.473.43-.739.61-.268.18-.553.335-.849.461-.303.128-.618.226-.938.291-.657.135-1.357.135-2.017 0-.319-.065-.634-.163-.937-.291-.297-.126-.583-.281-.85-.461-.264-.178-.513-.384-.74-.61L7.05 16.95c.317.317.666.605 1.035.854.373.252.773.47 1.19.646.424.18.867.317 1.315.408C11.051 18.952 11.525 19 12 19s.949-.048 1.408-.142c.449-.091.893-.229 1.317-.409.415-.176.815-.393 1.188-.645.372-.251.722-.54 1.035-.854.317-.317.605-.666.855-1.037.254-.377.472-.777.645-1.187.178-.42.315-.863.408-1.316.027-.135.043-.273.063-.41H22l-4-4L14 13z"></path>
          </svg>
        </button>
        <Weather
          city={weatherData.name}
          weather={
            weatherData &&
            weatherData.weather &&
            weatherData.weather[0] &&
            weatherData.weather[0].main
          }
          icon={`http://openweathermap.org/img/wn/${
            weatherData &&
            weatherData.weather &&
            weatherData.weather[0] &&
            weatherData.weather[0].icon
          }.png`}
        />
        <div className="clock">{time}</div>
      </div>
      <h1>
        It's your <span>{mealTime} time</span> on {weekday}, {hello}
      </h1>
    </Container>
  );
}

const Container = styled.div`
  gap: 7rem;
  .clock {
    font-size: 5.5rem;
    width: 100%;
  }
  div {
    position: relative;
    width: 20%;
    button {
      top: 0;
      right: 0;
      border: none;
      background: none;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: gray;
        transition: 0.3s ease-in;
        &:hover {
          color: black;
        }
      }
    }
  }
  h1 {
    margin-top: 2rem;
    width: 60%;
    color: black;
    span {
      color: var(--yellow);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
    div {
      order: 1;
      width: 100%;
    }
    h1 {
      width: 100%;
    }
  }
`;
