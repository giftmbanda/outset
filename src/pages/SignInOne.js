import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { useStyles } from "../styles/SignIn.tyles";

import { useFormik } from "formik";
//import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  //console.log("form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.name = " Required";
  }
  if (!values.password) {
    errors.password = " Required";
  }
  return errors;
};

const SignIn = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("form data", formik.errors);

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
            {"Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
            <TextField
              autoFocus
              required
              fullWidth
              variant="outlined"
              margin="normal"
              label="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              margin="normal"
              name="password"
              label="Password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
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
            >
              {"Sign In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  {"Forgot password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
