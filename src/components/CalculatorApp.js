import React, { useState } from "react";
import Container from "../components/Container";
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import { green } from "@mui/material/colors";

function CalculatorApp() {
 const[buttonBaseClasses, setButton] = useState();
  return (
    <>
      <Typography variant="h4" color={"black"} margin={2}>
        CalculatorApp
      </Typography>
      <Container>
        <div>
          <TextField
            placeholder="Enter Number"
            variant="outlined"
            fullWidth
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                fontWeight: "bold",
                backgroundColor: "#fff",
                padding: "5px",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#000",
                  borderWidth: "1px",
                  padding:'30px',
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#000",
                fontWeight: "900",
              },
            }}
          />
          <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container>
            <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={[{p: 1.5, backgroundColor: 'green', fontSize: '16px' , fontWeight:'700'}]}>
                  AC
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={[{p: 1.5, backgroundColor: 'red', fontSize: '16px' , fontWeight:'700'}]}>
                  DEL
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  .
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  /
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  7
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  8
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  9
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  X
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  4
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  5
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  6
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  +
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  1
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  2
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  3
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  -
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  00
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth sx={{p: 1.5, fontSize: '16px' , fontWeight:'700'}}>
                  0
                </Button>
              </Grid>
              {/* <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  -
                </Button>
              </Grid> */}
              <Grid p xs={6}>
                <Button variant="contained" fullWidth sx={{p: 1.5, backgroundColor: '#06d6a0', fontSize: '16px' , fontWeight:'700'}}>
                  =
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default CalculatorApp;
