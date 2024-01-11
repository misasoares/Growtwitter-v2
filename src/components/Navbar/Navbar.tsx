import { Button, Typography } from "@mui/material";
import { BottomSection, NavContainer, NavMain } from "./NavbarStyled";
import LogoGrowTweet from "../../images/logo_growtweet.svg";
import IconePaginaInicial from "../../images/icone_pagina inicial.svg";
import IconePaginaInicialSelecionado from "../../images/icone_pagina inicial_selecionado.svg";
import IconeExplorar from "../../images/icone_explorar.svg";
import IconeExplorarSelecionado from "../../images/icone_explorar_selecionado.svg";
import IconePerfil from "../../images/icone_perfil.svg";
import IconePerfilSelecionado from "../../images/icone_perfil_selecionado.svg";
import { useState } from "react";

interface NavProps {
  handleLogout: () => void;
}

export default function Navbar({ handleLogout }: NavProps) {
  const [page, setPage] = useState(0);

  return (
    <NavContainer>
      <NavMain>
        <div>
          <img src={LogoGrowTweet} />
        </div>
        <Typography sx={{ cursor: "pointer" }} fontWeight={page === 0 ? "bold" : ""} onClick={() => setPage(0)}>
          <img src={page === 0 ? IconePaginaInicialSelecionado : IconePaginaInicial} alt="Icone da página inicial" /> Página inicial
        </Typography>
        <Typography sx={{ cursor: "pointer" }} fontWeight={page === 1 ? "bold" : ""} onClick={() => setPage(1)}>
          <img src={page === 1 ? IconeExplorarSelecionado : IconeExplorar} /> Explorar
        </Typography>
        <Typography sx={{ cursor: "pointer" }} fontWeight={page === 2 ? "bold" : ""} onClick={() => setPage(2)}>
          <img src={page === 2 ? IconePerfilSelecionado : IconePerfil} /> Perfil
        </Typography>
        <Button variant="contained" sx={{ borderRadius: "30px", marginTop: "20px" }}>
          Tweetar
        </Button>

        <BottomSection>
          <div>Aqui vai o ícone do usuário logado - posicionar ao fim da tela, em baixo</div>
          <Button sx={{ borderRadius: "30px", backgroundColor: "red" }} onClick={handleLogout} variant="contained">
            Desconectar
          </Button>
        </BottomSection>
      </NavMain>
    </NavContainer>
  );
}
