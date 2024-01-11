import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/modules/user/userSlice";
import TimeLine from "../components/Timeline/TimeLine";
import { BodyContainer, HomeMain } from "../components/HomeStyled";
import Navbar from "../components/Navbar/Navbar";
import { getTweets } from "../config/services/tweet.service";


export default function Home() {
  const userLogadoRedux = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //valida se existe algum user logado
  useEffect(() => {
    if (userLogadoRedux.token === "") {
      navigate("/auth");
    }
  }, [userLogadoRedux]);

  //pega tweets
  useEffect(() => {
    getTweets();
  }, []);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <BodyContainer>
      <Navbar handleLogout={handleLogout} />
      <HomeMain>
        <TimeLine tweets={["tweets"]} users={["users"]} />

        <Typography variant="h2" component="h1">
          Aqui vai alguma coisa
        </Typography>
      </HomeMain>
    </BodyContainer>
  );
}
