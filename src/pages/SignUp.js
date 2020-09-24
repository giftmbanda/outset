import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
// require('yup-phone');
import Copyright from "../components/Copyright";
// import axios from "axios";
// const urlPath = "http://outset-v1.herokuapp.com/user";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//+27 72 943 3017
const phoneRegExp = "^[0-9]{10}$";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(4).required(),
  lastName: Yup.string().min(4).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
  phone: Yup.string()
    .required()
    .matches(phoneRegExp, "Must be a valid 10 digits phone number"),
});

const handleSubmit = (values) => {
  console.log(values);
};

const SignUp = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {"Sign Up"}
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
          >
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        autoFocus
                        required
                        fullWidth
                        as={TextField}
                        name="firstName"
                        margin="normal"
                        variant="outlined"
                        label="First Name"
                        type="text"
                        value={Formik.firstName}
                        helperText={<ErrorMessage name="firstName" />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        required
                        fullWidth
                        as={TextField}
                        name="lastName"
                        margin="normal"
                        variant="outlined"
                        label="Last Name"
                        type="text"
                        value={Formik.lastName}
                        helperText={<ErrorMessage name="lastName" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
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
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        required
                        fullWidth
                        as={TextField}
                        name="password"
                        margin="normal"
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={Formik.password}
                        helperText={<ErrorMessage name="password" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        required
                        fullWidth
                        as={TextField}
                        name="phone"
                        margin="normal"
                        variant="outlined"
                        label="Phone"
                        type="text"
                        value={Formik.phone}
                        helperText={<ErrorMessage name="phone" />}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={classes.submit}
                    disabled={!dirty || !isValid}
                  >
                    {"Sign Up"}
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        {"Already have an account? Sign in"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
