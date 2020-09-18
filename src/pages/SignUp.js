import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Copyright from "../components/Copyright";
import useStyles from "../styles/SignUp.style";
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'; //fovalidators

const SignUp = () => {
  const classes = useStyles(); //css styles

  const initializeFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initializeFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // const urlPath = "http://outset-v1.herokuapp.com/user";
    // let response = await sendPostRequest(urlPath, formData);

    // if (response.ok) {
    //   let res = await response.json();
    //   console.log(res);
    // } else {
    //   let res = await response.json();
    //   console.log(res);
    // }
    setFormData(initializeFormData); //clear the form
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
            Sign Up for <strong>OutSet</strong>
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  variant="outlined"
                  name="firstName"
                  label="First Name"
                  autoComplete="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  name="lastName"
                  label="Last Name"
                  autoComplete="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  name="comfirmPassword"
                  label="Comfirm Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  name="phone"
                  label="Phone Number"
                  autoComplete="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account with? Sign in
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

export default SignUp;
