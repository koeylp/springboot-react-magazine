import { async } from "@firebase/util";
import {
  Button,
  Container,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BannerUpdate from "../banner/BannerUpdate";
import NavbarAdmin from "../navigation/NavbarAdmin";

export default function Update() {
  let navigate = useNavigate();

  const {id} = useParams();

  const [magazine, setMagazine] = useState({
    title: "",
    img: "",
    content: "",
  });

  const { title, img, content } = magazine;

  const onInputChange = (e) => {
    setMagazine({ ...magazine, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadMagazine();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/dashboard/${id}`, magazine);
    navigate("/dashboard");
  };

  const loadMagazine = async (e) => {
        const result = await axios.get(`http://localhost:8080/bibon/home/${id}`);
        setMagazine(result.data);
  };

  return (
    <div>
      <NavbarAdmin />
      <BannerUpdate />
      <div className="contact">
        <Container className="">
          <Grid container spacing={2}>
            <Grid xs={12} md={12}>
              <form onSubmit={(e) => onSubmit(e)}>
                <Grid container spacing={1}>
                  {/* Title */}
                  <Grid xs={12} sm={12} item>
                    <TextField
                      color="secondary"
                      label="Title"
                      variant="outlined"
                      fullWidth
                      name="title"
                      value={title}
                      onChange={(e) => onInputChange(e)}
                    />
                    
                  </Grid>
                  {/* Image */}
                  <Grid item xs={12}>
                    <TextField
                      margin="dense"
                      name="img"
                      label="URL of image"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={img}
                      onChange={(e) => onInputChange(e)}
                    />
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
                    
                    <Button
                      variant="contained"
                      size="small"
                      type="submit"
                    >
                      Save
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
