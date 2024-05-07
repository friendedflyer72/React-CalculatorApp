import Box from '@mui/material/Box';

const Container = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto', 
      padding: '40px 30px',
      backgroundColor: '#3e3636',
      border: '2px',
      borderRadius: '25px', 
    }}
  >
    {children}
  </Box>
);

export default Container;
