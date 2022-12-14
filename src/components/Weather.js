import React from "react";
import styled from "styled-components";

export default function Weather(props) {
  return (
    <Container className="Weather flex-row">
      <p>{props.city},</p>
      <span>{props.weather}</span>
      <img src={props.icon} alt="weather-icon" />
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  gap: 1rem;
  img {
    margin-left: -1rem;
  }
 
`;
