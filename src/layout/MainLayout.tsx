import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const MainLayout = () => {
   return (
     <>
        <Header />
        <Box
          component="main"
          sx={{
             flexGrow: 1,
             py: 8, // Padding top & bottom
          }}
        >
           <Container maxWidth="lg">
              <Outlet />
           </Container>
        </Box>
        <Footer />
     </>
   );
};

export default MainLayout;