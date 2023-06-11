import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerNews from "../banner/BannerNews";

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user); 
    await axios.post("http://localhost:8080/bibon/login", user);
    navigate("/dashboard");
    
  };

  return (
    <div>
      <BannerNews />
      <div className="login">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          className="Auth-form"
        >
          <Grid md={12}>
            <h3 className="Auth-form-title">Sign In</h3>
          </Grid>
          <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "20vh" }}
          >
            <Grid md={2}>
              <label>Email address</label>
            </Grid>
            <Grid md={10} item>
              <TextField
                color="secondary"
                placeholder="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid md={2}>
              <label>Password</label>
            </Grid>

            <Grid md={10}>
              <TextField
                color="secondary"
                placeholder="Password"
                variant="outlined"
                fullWidth
                name="password"
                type="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>

          <Button type="submit" className="btn_login">
            <span>Log in</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
