import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Search = styled.input`
  text-align: start;
  width: 493px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 20px;
  border: none;
  padding: 8px 16px;
  gap: 8px;
`;