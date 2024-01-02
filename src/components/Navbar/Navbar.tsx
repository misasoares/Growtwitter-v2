import { Button } from "@mui/material";
import { NavContainer } from "./NavbarStyled";

interface NavProps {
  handleLogout: () => void;
}

export default function Navbar({ handleLogout }: NavProps) {
  return (
    <NavContainer>
      <Button onClick={handleLogout} variant="contained">
        Desconectar
      </Button>
      <div>Aqui vai o ícone do usuário logado - posicionar ao fim da tela</div>
    </NavContainer>
  );
}
