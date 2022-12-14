import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function DishCard(props) {
  return (
    <Container className="DishCard flex-row">
      <Link to={props.link}>
        <img src={props.img} alt="dish" />
      </Link>
      <div className="preview flex-column">
        <h1>{props.name}</h1>
        <div className="line flex-row">
          <p style={{ display: `${props.displayCategory}` }}>
            Category: <span>{props.category}</span>
          </p>
          <p style={{ display: `${props.displayArea}` }}>
            Area: <span>{props.area}</span>
          </p>
        </div>
        <p>{props.tags}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  gap: 2rem;
  width: 90%;
  height: 10rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in;
  box-shadow: 0 0 10px 6px rgba(240, 240, 240, 0.5);
  &:hover {
    transform: scale(1.1);
  }
  a {
    img {
      width: 10rem;
      height: 10rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: 0.3s ease-in;
      &:hover {
        box-shadow: 0 0 0 5px var(--yellow);
      }
    }
  }

  .preview {
    height: max-content;
    padding-right: 2rem;
    width: 65%;
    margin: auto 0;
    gap: 1.5rem;
    justify-content: center;
    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      color: black;
      overflow:hidden;
      text-overflow: ellipsis;
      max-height: 4rem;
    }
    .line {
      justify-content: space-between;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 1.5rem;
    height: 9rem;
    &:hover {
      transform: scale(1.05);
    }
    a {
      img {
        width: 9rem;
        height: 9rem;
        &:hover {
          box-shadow: 0 0 0 3px var(--yellow);
        }
      }
    }
    .preview {
      height: 100%;
      padding-right: 1rem;
      width: 100%;
      gap: 1.2rem;
      h1 {
        font-size: 1.4rem;
      }
      .line {
        font-size: 0.9rem;
      }
    }
  }
`;
