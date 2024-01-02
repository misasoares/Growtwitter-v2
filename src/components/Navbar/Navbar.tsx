import { Button, Typography } from "@mui/material";
import { BottomSection, NavContainer, NavMain } from "./NavbarStyled";

interface NavProps {
  handleLogout: () => void;
}

export default function Navbar({ handleLogout }: NavProps) {
  return (
    <NavContainer>
      <NavMain>
        <div>Aqui vai o ícone da growdev</div>
        <Typography fontWeight="bold">Página inicial</Typography>
        <Typography fontWeight="bold">Explorar</Typography>
        <Typography fontWeight="bold">Perfil</Typography>
        <Button variant="contained">Tweetar</Button>

        <BottomSection>
          <div>Aqui vai o ícone do usuário logado - posicionar ao fim da tela, em baixo</div>
          <Button onClick={handleLogout} variant="contained">
            Desconectar
          </Button>
        </BottomSection>
      </NavMain>
    </NavContainer>
  );
}
