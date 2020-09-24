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
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useStyles } from "../styles/SignIn.tyles";

const initialValues = {
  email: "",
  password: "",
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

const handleSubmit = (values) => {
  console.log(values.email);
};

const SignIn = () => {
  const classes = useStyles();

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

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
          >
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <Field
                    autoFocus
                    required
                    fullWidth
                    as={TextField}
                    name="email"
                    margin="normal"
                    variant="outlined"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    value={Formik.email}
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    required
                    fullWidth
                    as={TextField}
                    name="password"
                    margin="normal"
                    variant="outlined"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={Formik.password}
                    helperText={<ErrorMessage name="password" />}
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
                    disabled={!dirty || !isValid}
                  >
                    {"Sign In"}
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/ForgotPassword" variant="body2">
                        {"Forgot password?"}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
