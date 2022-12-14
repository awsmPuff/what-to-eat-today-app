import React from 'react'
import styled from 'styled-components'

export default function SearchBar(props) {
  return (
    <Container className="SearchBar flex-row">
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="Type your favorite ingredients here..."
        />
        <button className="btn outline-btn">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
    </Container>
  );
}

const Container = styled.div`
  height: 3rem;
  input {
    width: 50%;
    height: 100%;
    font-size: 1rem;
    border: none;
    outline: none;
    border-bottom: solid 2px black;
  }
  button {
    height: 100%;
    width: 3rem;
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    input {
      width: calc(100% - 3rem);
    }
  }
`;
