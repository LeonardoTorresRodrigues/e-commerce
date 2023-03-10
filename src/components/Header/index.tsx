import { shade } from 'polished';
import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container, Search, Login, Banner, BannerText } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <h1>E-Shop</h1>
        <Search
          placeholder={'O que deseja procurar?'}
        />
        <Login>Login</Login>
        < ReactSwitch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secondary}
        />
      </Container>
      <Banner>
        <BannerText>
          <h1>Promoção</h1>
          <p>Produtos selecionados com 33% de desconto</p>
          <button>Ver Produtos</button> 
        </BannerText>
      </Banner>
    </>
  );
};

export default Header;