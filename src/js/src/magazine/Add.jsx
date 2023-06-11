import {
  Button,
  Container,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerAdding from "../banner/BannerAdding";
import NavbarAdmin from "../navigation/NavbarAdmin";

export default function Add() {

  let navigate = useNavigate();

  const [magazine, setMagazie] = useState({
    title: "",
    img: "",
    date: "",
    content: "",
  });

  const { title, img, content } = magazine;

  const onInputChange = (e) => {
    setMagazie({ ...magazine, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/bibon/magazine", magazine);
    navigate("/dashboard");
  };

  return (
    <div>
      <NavbarAdmin />
      <BannerAdding />
      <div className="contact">
        <Container className="">
          <Grid container spacing={2}>
            <Grid xs={12} md={12}>
              <form
                onSubmit={(e) => {
                  onSubmit(e);
                }}
              >
                <Grid container spacing={1}>
                  {/* Title */}
                  <Grid xs={12} sm={12} item>
                    <TextField
                      color="secondary"
                      placeholder="Title"
                      label="Title"
                      variant="outlined"
                      fullWidth
                      name="title"
                      value={title}
                      onChange={(e) => onInputChange(e)}
                    />
                    <br />
                  </Grid>
                  {/* Image */}
                  <Grid item xs={12}>
                    <TextField
                      color="secondary"
                      placeholder="URL of image"
                      name="img"
                      label="URL of image"
                      fullWidth
                      variant="outlined"
                      value={img}
                      onChange={(e) => onInputChange(e)}
                    />

                    <br />
                  </Grid>
                  
                  {/* Content */}
                  <Grid item xs={12}>
                    <TextField
                      color="warning"
                      label="Content"
                      multiline
                      placeholder="Type your content here"
                      variant="outlined"
                      fullWidth
                      name="content"
                      rows={4}
                      value={content}
                      onChange={(e) => onInputChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch />}
                      label="Agree to terms and conditions."
                      name="agree"
                    />       
                    <Button variant="contained" size="small" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
