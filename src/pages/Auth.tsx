import { Button, TextField, Typography } from "@mui/material";
import { BodyAuth, ContainerAuth, SectionStyled, SignStyledForm } from "../components/Auth.Styled";


export default function Auth() {

  return (
    <BodyAuth>
      <ContainerAuth>

        <SectionStyled>
          <Typography variant="h4" component='h2'>Growtwitter</Typography>
          <Typography>O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter,
            comunidade que valoriza a liberdade de expressão, a conexão com pessoas de todo
            o mundo e a disseminação de ideias.
          </Typography>
        </SectionStyled>
        <SectionStyled>
          <SignStyledForm>
            <Typography variant="h4" component='h2'>Entrar no Growtwitter</Typography>
            <TextField label="Username" />
            <TextField label="Password" type="password" />
            <Button variant="contained">Entrar</Button>
          </SignStyledForm>
        </SectionStyled>

      </ContainerAuth>
    </BodyAuth>
  );
}
