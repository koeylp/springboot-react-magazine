import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerNews from "./banner/BannerNews";
import Navigation from "./navigation/Navigation";
import axios from "axios";

export default function NewsPresentation() {
  const [magazines, setMagazines] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  useEffect(() => {
    loadMagazines();
  }, []);
  const loadMagazines = async () => {
    const result = await axios.get("http://localhost:8080/bibon/home");
    setMagazines(result.data);
  };

  const loadMore = () => {
    setItemsPerPage(itemsPerPage + 6);
  };

  return (
    <div>
      <Navigation />
      <BannerNews />
      <div className="news_presentation">
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
            {magazines.slice(0, itemsPerPage).map((data) => (
              <Grid className="grid_list_news" items sm={12} md={12}>
                <Card
                  className="component_news"
                  sx={{ display: "flex", maxHeight: "45vh" }}
                >
                  <CardMedia
                    component="img"
                    sx={{ maxWidth: "90vh" }}
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
                        variant="h7"
                      >
                        {data.date}
                      </Typography>
                      <Typography
                        sx={{ minHeight: "20vh" }}
                        className="title_news"
                        component="div"
                        variant="h5"
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

            {magazines?.length >= itemsPerPage ? (
              <Grid className="grid_button" items sm={12} md={12}>
                <Button onClick={() => loadMore()}>
                  <span>LOAD MORE</span>
                </Button>
              </Grid>
            ) : (
              <div id="empty"></div>
            )}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
