import { Container, Grid } from "@mui/material";

export default function Banner() {
  return (
    <section className="banner">
      <Container>
        <Grid container spacing={1}>
          <Grid xs={12} md={7}>
            <h1>TAKE ALL YOUR SOULS TO DRIVE</h1>
            <p></p>
          </Grid>
          <Grid xs={12} md={5}></Grid>
        </Grid>
      </Container>
    </section>
  );
}
