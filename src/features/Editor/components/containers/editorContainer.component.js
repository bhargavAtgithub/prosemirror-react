import styled from "styled-components/macro";

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
  height: 20rem;

  padding: 0rem;

  border: 0px solid ${({ theme }) => theme.colors.ui.secondary};

  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;

  /* &::-webkit-scrollbar {
    width: 0.1rem;
    margin-right: 0.2rem;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.ui.primary};
    border-radius: 0%.2rem;
  } */

  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
`;
