import { Container, Grid } from '@mui/material';
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Grid container spacing={1} className="align-item-center">
                    <Grid xs={12} md={5} className="text-center text-sm-end">
                        <div className="social-icon">
                            
                        </div>
                        <p>CopyRight 2022</p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
