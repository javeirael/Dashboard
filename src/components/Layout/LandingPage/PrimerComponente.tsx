import React from 'react';
import { Container, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import image from '../../../assets/image_hero.jpg';


const component = () => {
    return (
        <Container>
            <Grid container>
                <Grid item lg={6} md={12} xs={12}>
                    <p><strong style={{margin:0, fontSize: '32px' }}>Empodera Tu </strong></p>
                    <p><strong style={{margin:0, fontSize: '32px' }}>Futuro Financiero</strong></p>
                    <p style={{margin:0, fontSize: 'px' }}>Descubre herramientas, consejos y recursos para tomar el control de tus finanzas personales y alcanzar tus metas.</p>
                </Grid>
                
                <Grid item lg={6} md={12} xs={12} bgcolor={""} style={{ position: 'relative' }}>
                    <img src={image} alt="Descripción de la imagen" style={{ width: '100%', height: 'auto', borderRadius: '5%' }} />
                    <Card style={{
                        position: 'absolute', 
                        top: '60%', 
                        right: '-20', 
                        borderRadius: '5%',
                        transform: 'translate(-30%, -0%)', 
                        width: '200px'
                    }}>
                        <CardContent >
                            <Typography variant="h6">yooo</Typography>
                            <Typography variant="body2">siuuu.</Typography>
                        </CardContent>
                    </Card>

                    <Card style={{
                        position: 'absolute',
                        top: '25%',
                        right: '12%', 
                        transform: 'translate(50%, -50%)',
                        width: '200px'
                    }}>
                        <CardContent>
                        <Typography variant="h6">yooo</Typography>
                        <Typography variant="body2">siuuu.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}





export default component;
