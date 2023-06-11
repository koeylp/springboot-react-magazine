import { Container, Grid } from "@mui/material";

export default function BannerAdding() {
  return (
    <section className="banner_adding">
      <Container>
        <Grid container spacing={1}>
          <Grid xs={12} md={7}>
            <h1>Adding news</h1>
            <p></p>
          </Grid>
          <Grid xs={12} md={5}></Grid>
        </Grid>
      </Container>
    </section>
  );
}
