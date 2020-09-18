import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Copyright from "../components/Copyright";
import { useStyles } from "../styles/SignInSide.style";

const SignInSide = () => {
  const classes = useStyles();

  const initializeformData = { email: "", password: "" };
  const [formData, setFormData] = useState(initializeformData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // const urlPath = "http://outset-v1.herokuapp.com/user/login";
    // let response = await sendPostRequest(urlPath, formData);

    // if (response.ok) {
    //   let res = await response.json();
    //   console.log(res);
    // } else {
    //   let res = await response.json();
    //   console.log(res);
    // }
    setFormData(initializeformData); //clear the form
  };

  // const sendPostRequest = async (url = "", data = {}) => {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response; // parses JSON response into native JavaScript objects
  // };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              required
              autoFocus
              fullWidth
              variant="outlined"
              margin="normal"
              name="email"
              label="Email Address"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              margin="normal"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  "Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
