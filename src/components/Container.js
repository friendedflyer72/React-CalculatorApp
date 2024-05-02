import Box from '@mui/material/Box';

const Container = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto', 
      padding: '0 auto', 
    }}
  >
    {children}
  </Box>
);

export default Container;
