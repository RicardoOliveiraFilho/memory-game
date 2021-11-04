import styled from 'styled-components';

export const Container = styled.div`
  max-width: 860px;
  margin: 40px auto;

  button {
    background: none;
    border: 2px solid #FFFFFF;
    padding: 6px 12px;
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: bold;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      background: #C23866;
      color: #FFFFFF;
    }
  }
`;

export const CardGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;