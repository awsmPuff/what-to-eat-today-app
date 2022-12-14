import React from "react";
import styled from "styled-components";

export default function DishDetails(props) {
  return (
    <Container className="DishDetails flex-row">
      <div className="left flex-column">
        <img src={props.img} alt="meal" />
      </div>

      <div className="right flex-column">
        <h3>{props.name}</h3>
        <h4>Ingredients needed: </h4>
        <div className="ingredirents-needed flex-row">
          <ul className="flex-column">{props.ingredients}</ul>
          <ul className="flex-column">{props.measures}</ul>
        </div>
      </div>

      <div className="side-info flex-row absolute">
        <div className="tags flex-row">
          <span>{props.area}</span>
          <span>{props.category}</span>
          {props.tags}
        </div>
        <a
          className="video flex-row"
          href={props.youtube}
          target="_blank"
          rel="noreferrer"
        >
          More on Youtube
        </a>
      </div>

      <div className="instructions flex-column absolute">
        <h4>Instructions: </h4>
        <p className="inst">{props.instructions}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 1rem;
  left: 0;
  right: 0;
  margin: 3rem auto 5rem;
  gap: 5rem;
  height: 63rem;
  .left {
    width: 30rem;
    height: 30rem;
    gap: 1.5rem;
    img {
      width: 30rem;
      height: 28rem;
      border-radius: 0.3rem;
    }
  }
  .right {
    gap: 1.5rem;
    width: 100%;
    height: 28rem;
    .ingredirents-needed {
      width: 100%;
      height: 20rem;
      justify-content: flex-start;
      gap: 5rem;
      overflow: auto;
      ul {
        gap: 0.5rem;
        height: 100%;
      }
    }
  }
  .side-info {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 30rem;
    .tags {
      margin: 0.6rem 0;
      gap: 2rem;
      min-height: 2rem;
      span {
        border: solid 2px gray;
        border-radius: 0.3rem;
        padding: 0.3rem 0.8rem;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
      }
    }
    a {
      padding: 0.8rem 1.5rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      font-weight: 500;
      transition: 0.3s ease-in;
      color: var(--red);
      border: solid 2px var(--red);
      &:hover {
        background-color: var(--red);
        color: white;
        transform: scale(1.03);
      }
    }
  }
  .instructions {
    gap: 1rem;
    top: 34rem;
    height: 30rem;
    p {
      white-space: break-spaces;
      line-height: 1.5;
      letter-spacing: 0.05rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    top: 2rem;
    margin: none;
    gap: 3rem;
    height: max-content;
    .left {
      width: 100%;
      min-height: 23rem;
      height: 23rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
    .right {
      height: 24rem;
      .ingredirents-needed {
        height: 16rem;
        gap: 2rem;
        ul {
          width: 100%;
        }
      }
    }
    .side-info {
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      margin-top: -1rem;
      top: 0;
      .tags {
        gap: 0.5rem;
      }
      a {
        padding: 0.5rem 0.9rem;
        &:hover {
          transform: scale(1.02);
        }
      }
    }
    .instructions {
      position: relative;
      top: 0;
      margin-top: -1rem;
      height: max-content;
    }
  }
`;
