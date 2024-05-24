import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Icon from './icon'
const pages = ['Inicio', 'Herramientas', 'Cursos', 'Temas'];
const botones = ['Registrarse', 'Iniciar sesión']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return (
      <>
      <AppBar position="static" sx={{backgroundColor: 'transparent', color: 'black', boxShadow: 'none'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml:7 }} >
            <Icon />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 3,
                mr: 6,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'poppins, sans-serif',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Educación Financiera
            </Typography>
  
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: 'blue' }}>
                    <Typography textAlign="center"  sx={{ color: 'black' }}>{page}</Typography>
                  </MenuItem>
                ))}
                {botones.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: 'blue' }}>
                    <Typography textAlign="center"  sx={{ color: 'black' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* //Responsive */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <Icon />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 500,
                fontSize: '15px',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Educación Financiera
            </Typography>
            {/* web */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', mr: 4, fontWeight:700 }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {botones.map((pa) => (
              <Button
                variant="contained"
                key={pa}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  mr: 1,
                  fontWeight: 550,
                  borderRadius: 4,
                  backgroundColor: '#F5F6FB',
                  boxShadow: 'none',
                  ':hover': {
                    backgroundColor: '#DFE0E1',
                    boxShadow:'none'
                  },
                }}
              >
                {pa}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </>
    );
}
    export default ResponsiveAppBar;