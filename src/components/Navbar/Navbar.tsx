import { Button } from "@mui/material";
import { NavContainer } from "./NavbarStyled";

interface NavProps {
  handleLogout: () => void;
}

export default function Navbar({ handleLogout }: NavProps) {
  return (
    <NavContainer>
      <div>Aqui vai o ícone da growdev</div>
      <div>Página inicial</div>
      <div>Explorar</div>
      <div>Perfil</div>
      <Button variant="contained">Tweetar</Button>

      <div>Aqui vai o ícone do usuário logado - posicionar ao fim da tela</div>
      <Button onClick={handleLogout} variant="contained">
        Desconectar
      </Button>
    </NavContainer>
  );
}
