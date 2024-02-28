import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
   return (
     <Box
       component="footer"
       sx={{
          py: 3, // Padding Y
          px: 2, // Padding X
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
       }}
     >
        <Container maxWidth="lg">
           <Typography variant="body1" color="inherit" align="center">
              © 2023 My Website
           </Typography>
        </Container>
     </Box>
   );
};

export default Footer;