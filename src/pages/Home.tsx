import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/modules/user/userSlice";
import TimeLine from "../components/TimeLine";
import { BodyContainer } from "../components/HomeStyled";
import Navbar from "../components/Navbar/Navbar";

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

  function handleLogout() {
    dispatch(logout());
  }

  useEffect(() => {
    console.log(userLogadoRedux.loading, "---");
  }, [userLogadoRedux.loading]);

  return (
    <BodyContainer>
      <div>
        <Navbar />
        <Typography variant="h2" component="h1">
          Home
        </Typography>

        <Button onClick={handleLogout} variant="contained">
          Desconectar
        </Button>
      </div>

      <TimeLine />
    </BodyContainer>
  );
}
