import React, { useEffect, useState } from "react";

import { TextField, Button, Box, Typography, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";

import { useLoginMutation } from "../../redux/queries/Auth";

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [fetch, { data, isError }] = useLoginMutation();
  const login = () => {
    fetch({
      phoneNumber: number,
      password: password,
    });
  };

  useEffect(() => {
    const setToken = (token) => {
      if (token !== undefined) {
        cookies.set("token", token, { path: "/" });

        navigate("/");
      }
    };

    setToken(data?.data?.token);
  }, [data]);

  const isThereError = isError && (
    <>
      <Box
        sx={{
          background: "red",
          padding: "10px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          There is error, please check and try again
        </Typography>
      </Box>
    </>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "25%",
            background: "white",
            textAlign: "center",
            borderRadius: "5px",
            padding: "30px",
          }}
        >
          {isThereError}
          <Paper sx={{padding:'20px'}} elevation={3} >

          <Typography
            sx={{
              color: "black",
              fontSize: "25px",
              fontWeight: "bold",
              paddingBottom: "25px",
            }}
          >
            Login
          </Typography>
          <Box>
            <TextField
              id="e-mail"
              label="Phone-number"
              type="email"
              variant="standard"
              sx={{
                width: "100%",
                paddingBottom: "15px",
              }}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="standard"
              sx={{
                width: "100%",
                paddingBottom: "35px",
              }}
              defaultValue="cityslicka"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button onClick={login} variant="contained">
            Send
          </Button>
          <Box>
            <Typography
              sx={{
                paddingTop: "20px",
                fontSize: "13px",
                color: "#1769aa",
              }}
            ></Typography>
          </Box>
          </Paper>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#9e9e9e",
              fontSize: "15px",
              marginTop: "35px",
            }}
          ></Typography>
        </Box>
      </Box>
    </>
  );
};
export default Login;
