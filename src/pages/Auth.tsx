import { Alert, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BodyAuth, ContainerAuth, SectionStyled, SectionStyledTwo, SignStyledForm } from "../components/Auth.Styled";
import { createUserDTO } from "../config/services/user.service";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginThunk } from "../store/modules/user/userSlice";
import { createNewUser, getUsers } from "../store/modules/users/usersSlice";

export default function Auth() {
  const dispatch = useAppDispatch();
  const userLogadoRedux = useAppSelector((state) => state.user);
  const usersRedux = useAppSelector((state) => state.users);
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);
  const navigate = useNavigate();

  //atualiza a lista do usersRedux com os usuários existentes no banco de dados
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  //cria msg de erro
  useEffect(() => {
    if (userLogadoRedux.res.code === 404) {
      setErrorLogin(true);

      setTimeout(() => {
        setErrorLogin(false);
      }, 3000);
    } else {
      if (userLogadoRedux.res.code === 200) {
        setSuccessLogin(true);
        setErrorLogin(false);
      }
      setTimeout(() => {
        setSuccessLogin(false);
      }, 3000);
    }
  }, [userLogadoRedux]);

  //verifica se existe algum userlogado
  useEffect(() => {
    if (userLogadoRedux.token !== "") {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [userLogadoRedux]);

  //signup ou login
  async function handleSubmit() {
    if (signup) {
      //fazer cadastro
      const signupUser: createUserDTO = {
        name,
        email,
        username,
        password,
      };

      dispatch(createNewUser(signupUser));
      //atualiza a lista do usersRedux com os usuários existentes no banco de dados
      dispatch(getUsers());
      //volta layout para login
      setSignup(false);
    } else {
      //fazer login
      const loginUser = {
        username,
        password,
      };

      dispatch(loginThunk(loginUser));
    }

    clearStates();
  }

  //limpa os estados
  function clearStates() {
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
  }

  return (
    <BodyAuth>
      <ContainerAuth>
        <SectionStyled style={{ borderRadius: "15px 0 0 15px" }}>
          <Typography variant="h3" component="h2" fontWeight="bold">
            Growtwitter
          </Typography>
          <Typography>
            O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter, comunidade que valoriza a
            liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
          </Typography>
        </SectionStyled>
        <SectionStyledTwo style={{ borderRadius: "0 15px 15px 0" }}>
          <SignStyledForm>
            <Typography variant="h4" component="h2" margin={1} fontWeight="bold">
              {signup ? "Cadastre-se aqui" : "Entrar no Growtwitter"}
            </Typography>
            {signup && (
              <>
                <TextField value={name} label="Nome" fullWidth sx={{ margin: 1 }} onChange={(e) => setName(e.target.value)} />
                <TextField value={email} label="Email" fullWidth sx={{ margin: 1 }} onChange={(e) => setEmail(e.target.value)} />
              </>
            )}
            <TextField value={username} label="Username" fullWidth sx={{ margin: 1 }} onChange={(e) => setUsername(e.target.value)} />
            <TextField value={password} label="Password" type="password" fullWidth sx={{ margin: 1 }} onChange={(e) => setPassword(e.target.value)} />
            <Typography>
              {signup ? "Já tem conta?" : "Não tem conta?"}{" "}
              <span onClick={() => setSignup(!signup)} style={{ color: "blue" }}>
                <u>{signup ? "Entrar" : "Cadastre-se"}</u>
              </span>
            </Typography>
            <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ margin: 1, backgroundColor: "#1d9bf0" }}>
              {usersRedux.loading === true ? <CircularProgress color="inherit" /> : userLogadoRedux.loading === true ? <CircularProgress color="inherit" /> : signup ? "Cadastrar" : "Entrar"}
            </Button>
          </SignStyledForm>
        </SectionStyledTwo>
      </ContainerAuth>
      <div style={{ position: "absolute", left: "60%", top: "68%" }}>{errorLogin && <Alert severity="error">Falha ao fazer login, revise seus dados.</Alert>}</div>
      <div style={{ position: "absolute", left: "65%", top: "68%" }}>{successLogin && <Alert severity="success">Login com sucesso.</Alert>}</div>
    </BodyAuth>
  );
}
