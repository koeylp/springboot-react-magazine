import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner/Banner";
import Navigation from "./navigation/Navigation";
import VideoCard from "./VideoCard";

export default function News() {
  const [magazines, setMagazines] = useState([]);
  useEffect(() => {
    loadMagazines();
  }, []);
  const loadMagazines = async () => {
    const result = await axios.get("http://localhost:8080/bibon/home");
    setMagazines(result.data);
    console.log(result.data)
  };

  return (
    <div className="home">
      <Navigation />
      <Banner />
      <VideoCard />
      <div className="news">
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
                THE WORLD OF CARS
              </Typography>
            </Grid>

            {magazines.slice(0, 3).map((data) => (
              <Grid className="grid_list_news" items sm={12} md={12}>
                <Card className="component_news" sx={{ display: "flex", minHeight:"40vh" }}>
                  <CardMedia
                    component="img"
                    sx={{ maxWidth: "95vh" }}
                    image={data.img}
                  />
                  <Box
                    className="component_content_news"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        className="date_news"
                        component="div"
                        variant="h6"
                      >
                        {data.date}
                      </Typography>
                      <Typography
                        className="title_news"
                        component="div"
                        variant="h4"
                        sx={{minHeight:"25vh"}}
                      >
                        {data.title}
                      </Typography>
                      <Button type="button">
                        <Link
                          className="link_button"
                          to={`/news_detail/${data.id}`}
                        >
                          <span>Read More</span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}

            <Grid className="grid_button" items sm={12} md={12}>
              <Button>
                <Link className="link_button" to="/news_presentation">
                  <span>SEE ALL</span>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
