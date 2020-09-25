import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Copyright from "../components/Copyright";
import { useStyles } from "../styles/SignUp.styles";
import { withRouter } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  comfirmPassword: "",
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(4).required("Required"),
  lastName: Yup.string().min(4).required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(4).required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches("^[0-9]{10}$", "Must be a valid 10 digits phone number"),
  // comfirmPassword: Yup.string()
  //   .min(4)
  //   .oneOf([Yup.ref("password")], "Passwords do not match")
  //   .required("Required"),
});

const SignUp = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({});

  const handleRedirect = (pageUrl) => {
    const { history } = props;
    history.push(pageUrl);
  };

  const onSubmit = async (values) => {
    const urlPath = "/user";
    const body = values
    console.log(body);
    const response = await axios.post(urlPath, body);
    if (response.status && response.statusText === "OK") {
      setUser(response.data.user);
      handleRedirect("/login");
    } else {
      setUser(null);
    }
  };

  console.log(user);

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
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
          >
            {({
              errors,
              values,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              dirty,
              isValid,
            }) => {
              return (
                <Form
                  onSubmit={handleSubmit}
                  className={classes.form}
                  noValidate
                >
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        error={Boolean(touched.firstName && errors.firstName)}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        error={Boolean(touched.lastName && errors.lastName)}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={Boolean(touched.email && errors.email)}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={Boolean(touched.password && errors.password)}
                        helperText={<ErrorMessage name="password" />}
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
                      <Field
                        required
                        fullWidth
                        as={TextField}
                        name="comfirmPassword"
                        margin="normal"
                        variant="outlined"
                        label="Comfirm Password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comfirmPassword}
                        error={Boolean(
                          touched.comfirmPassword && errors.comfirmPassword
                        )}
                        helperText={<ErrorMessage name="comfirmPassword" />}
                      />
                    </Grid> */}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        error={Boolean(touched.phone && errors.phone)}
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
                      <Link
                        href=""
                        variant="body2"
                        onClick={() => handleRedirect("/login")}
                      >
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

export default withRouter(SignUp);
