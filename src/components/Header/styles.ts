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
  border: none;
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

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color:#FFFFFF;
  width:50%;
  margin: 10rem 0;
  gap: 1rem;

  h1 {
    font-size: 3.25rem;
    line-height: 31px;
    font-weight: 700;
  }

  p {
    font-size: 1.375rem;
    line-height: 26px;  
    font-weight: 700;  
  }

  button {
    width: 8.125rem;
    height: 3.188rem;
    gap: 0.625rem;
    padding: 1rem;
    background-color: ${props => props.theme.colors.primary};
    color: #f6f6f6;
    font-size: 1rem;
    line-height: 19px;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  `;