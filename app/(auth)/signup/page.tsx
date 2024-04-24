"use client";

import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Glue
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const router = useRouter();

  const getOTP = async (email: string) => {
    try {
      const res = await fetch(
        "https://api.glue.pitetris.com/margaret/v1/user/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      if (res.status === 201) {
        return true;
      }
      console.log("otp", res);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const signup = async (obj) => {
    try {
      const res = await fetch(
        "https://api.glue.pitetris.com/margaret/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: obj,
        }
      );
      if (res.status === 201) {
        alert("Successfully Signed Up");
        console.log(res);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const otp = await getOTP(data.get("email"));
      const obj = JSON.stringify({
        name: data.get("name"),
        phone: data.get("phone"),
        email: data.get("email"),
        password: data.get("password"),
        otp: otp ? "0000" : null,
        active: true,
      });
      await signup(obj);

      //   const res = await fetch(
      //     "https://api.glue.pitetris.com/margaret/v1/user/signin",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         user_id: data.get("email"),
      //         password: data.get("password"),
      //       }),
      //     }
      //   );
      //   console.log(res);
      // console.log({
      //   email: data.get("email"),
      //   password: data.get("password"),
      // });

      //   router.push("/");
      // Handle successful response (e.g., redirect to protected area)
    } catch (error) {
      console.error("Error logging in:", error);

      // Handle login errors (e.g., display an error message)
    }
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/glue.png"
          height={150}
          width={150}
          priority={true}
          className="md:block"
          alt="Glue logo"
        />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    // </ThemeProvider>
  );
}
