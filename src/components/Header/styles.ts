import styled from "styled-components";
import backGround from '../../assets/Hero.svg'; // Importando imagem da pasta assets

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

export const Login = styled.button`
  width: 132px;
  height: 51px;
  padding: 16px;
  gap: 10px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 20px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`;

export const Banner = styled.div`
  width: 100vw;
  height: 22rem;
  max-height: 22rem;
  padding: 2rem;
  gap: 1rem;

  background: url(${backGround}); //passando imagem para background
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  `;