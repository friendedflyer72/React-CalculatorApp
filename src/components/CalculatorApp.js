import React from "react";
import Container from "../components/Container";
import { Typography, TextField, Box, Grid, Button } from "@mui/material";

function CalculatorApp() {
  return (
    <>
      <Typography variant="h4" color={"black"} margin={2}>
        CalculatorApp
      </Typography>
      <Container>
        <div>
          <TextField
            label="Enter Number"
            variant="outlined"
            fullWidth
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "#000",
                fontWeight: "bold",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2e2e2e",
                  borderWidth: "2px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#2e2e2e",
                fontWeight: "bold",
              },
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  7
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  8
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  9
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  %
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  4
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  5
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  6
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  X
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  3
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  2
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  1
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  +
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  Del
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  .
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
                  -
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button variant="contained" fullWidth>
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
