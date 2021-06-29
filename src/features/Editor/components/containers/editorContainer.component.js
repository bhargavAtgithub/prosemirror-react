import styled from "styled-components/macro";

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
  height: 10rem;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.ui.primary};
`;
