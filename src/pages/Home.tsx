import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BodyContainer, HomeMain } from "../components/HomeStyled";
import Navbar from "../components/Navbar/Navbar";
import TimeLine from "../components/Timeline/TimeLine";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getTweetThunk } from "../store/modules/tweets/tweetsSlice";
import { logout } from "../store/modules/user/userSlice";
import { getUsersThunk } from "../store/modules/users/usersSlice";

export default function Home() {
  const userLogadoRedux = useAppSelector((state) => state.user);
  const usersRedux = useAppSelector((state) => state.users);
  const tweetsRedux = useAppSelector((state) => state.tweets);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //pega tweets e usuários
  useEffect(() => {
    dispatch(getTweetThunk());
    dispatch(getUsersThunk());
  }, []);

  useEffect(() => {
    console.log(usersRedux);
  }, [usersRedux]);

  //valida se existe algum user logado
  useEffect(() => {
    if (userLogadoRedux.token === "") {
      navigate("/auth");
    }
  }, [userLogadoRedux]);

  function handleLogout() {
    localStorage.removeItem("token");
    dispatch(logout());
  }

  return (
    <BodyContainer>
      <Navbar handleLogout={handleLogout} />
      <HomeMain>
        <TimeLine tweets={tweetsRedux.tweets} />

        <Typography variant="h2" component="h1">
          Aqui vai alguma coisa
        </Typography>
      </HomeMain>
    </BodyContainer>
  );
}
