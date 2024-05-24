import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const tools = [
  { title: "Mis Ahorros", genre: "Conoce cuánto dinero podrás acumular en un determinado plazo." },
  { title: "Mis objetivos", genre: "Conoce cuánto dinero deberás ahorrar para conseguir tus objetivos de capital." },
  { title: "Mi estado ahorro-inversión  ", genre: "Evalúa tu comportamiento respecto al ahorro y la inversión." },
  { title: "Mis Deudas", genre: "Calcula tu límite de endeudamiento con esta herramienta." },
  { title: "Mi presupuesto", genre: "Crea presupuestos que te permita llevar un control sobre tu dinero." },
  { title: "Mis caprichos", genre: "Conoce cuánto se puede ahorrar si eliminamos o reducimos gastos." },
];

const SegundoComponente = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{tool.title}</Typography>
                <Typography variant="body2" color="text.secondary">{tool.genre}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SegundoComponente;
