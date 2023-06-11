import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import BannerNews from "./banner/BannerNews";
import Navigation from "./navigation/Navigation";
import axios from "axios";
export default function NewsDetail() {
  const [magazine, setMagazine] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadMagazine();
  }, []);
  const loadMagazine = async () => {
    const result = await axios.get(`http://localhost:8080/bibon/home/${id}`);
    setMagazine(result.data);
  };

  return (
    <div>
      <Navigation />
      <BannerNews />
      <div className="news_detail">
        <Container className="container_news">
          <Grid className="grid_container_news" container spacing={1}>
            <Typography className="h5_news" component="div" variant="h5">
              NEWS
            </Typography>
            <Grid className="grid_h1_news" items sm={12} md={12}>
              <Typography
                id="news"
                className="h1_news"
                component="div"
                variant="h1"
              >
                {magazine.title}
              </Typography>
            </Grid>

            <Grid
              className="grid_img component_content_news"
              container
              sm={12}
              md={12}
            >
              <img src={magazine.img} />
            </Grid>
            <Grid className="grid_img" container sm={12} md={12}>
              {magazine.date}
            </Grid>
            
            <Grid className="component_content_news" container sm={12} md={12}>
              <Grid
                className="grid_img component_content_news"
                container
                sm={12}
                md={12}
              >
                {magazine.content}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
