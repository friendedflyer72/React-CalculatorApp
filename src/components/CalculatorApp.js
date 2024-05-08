import React, { useState } from "react";
import Container from "../components/Container";
import { Typography, TextField, Box, Grid, Button } from "@mui/material";

function CalculatorApp() {
  const [value, setValue] = useState("");
  return (
    <>
      <Typography
        variant="h2"
        fontFamily={"Segoe UI"}
        fontWeight={"400"}
        color={"#fff"}
        margin={2}
      >
        Calculator
      </Typography>
      <Container>
        <div>
          <TextField
            placeholder="Enter Number"
            value={value}
            variant="outlined"
            fullWidth
            onChange={(e) => {
              const newValue = e.target.value;
              // Remove non-numeric characters except allowed operators (+, -, /, *)
              const sanitizedValue = newValue.replace(/[^0-9+*/.-]/g, "");
              setValue(sanitizedValue);
            }}
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                fontWeight: "bold",
                backgroundColor: "#fff",
                padding: "2px",
                fontSize: "30px",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#000",
                  borderWidth: "1px",
                  padding: "20px",
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
                <Button
                  variant="contained"
                  fullWidth
                  sx={[
                    {
                      p: 1.5,
                      backgroundColor: "green",
                      fontSize: "16px",
                      fontWeight: "700",
                    },
                  ]}
                  onClick={(e) => setValue("")}
                >
                  AC
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={[
                    {
                      p: 1.5,
                      backgroundColor: "red",
                      fontSize: "16px",
                      fontWeight: "700",
                    },
                  ]}
                  onClick={() => {
                    if (typeof value === 'string' && value.length > 0) {
                        setValue(value.slice(0, -1))
                    }
                }}
                >
                  DEL
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="."
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  .
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="/"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  /
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="7"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  7
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="8"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  8
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="9"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  9
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="*"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  X
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="4"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  4
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="5"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  5
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="6"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  6
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="+"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  +
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="1"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  1
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="2"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  2
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="3"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  3
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="-"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  -
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="00"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  00
                </Button>
              </Grid>
              <Grid p xs={3}>
                <Button
                  variant="contained"
                  value="0"
                  fullWidth
                  sx={{ p: 1.5, fontSize: "16px", fontWeight: "700" }}
                  onClick={(e) => setValue(value + e.target.value)}
                >
                  0
                </Button>
              </Grid>
              <Grid p xs={6}>
                <Button
                  variant="contained"
                  value="="
                  fullWidth
                  sx={{
                    p: 1.5,
                    backgroundColor: "#06d6a0",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                  onClick={(e) => setValue(eval(value))}
                >
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
