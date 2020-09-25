import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
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
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Copyright from "../components/Copyright";
import { useStyles } from "../styles/SignIn.tyles";
import { withRouter } from "react-router-dom";
import MyBackdrop from "../components/MyBackdrop";

const initialValues = {
  email: "",
  password: "",
};

const SigninSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(4).required("Required"),
});

const SignIn = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const handleRedirect = (pageUrl) => {
    const { history } = props;
    history.push(pageUrl);
  };

  const onSubmit = async (values) => {
    const urlPath = "/user/login";
    const body = values;


    setLoading(true);
    const response = await axios.post(urlPath, body);
    setLoading(false);
    if (response.status && response.statusText === "OK") {
      setUser(response.data);
      handleRedirect("/");
    } else {
      setUser(null);
    }
  };

  console.log(user);

  return (
    <Grid container component="main" className={classes.root}>
       <MyBackdrop loading={loading} />
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
            validationSchema={SigninSchema}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={Boolean(touched.email && errors.email)}
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
                    autoComplete="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={Boolean(touched.password && errors.password)}
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
                      <Link href="" variant="body2" onClick={() =>handleRedirect("/forgotpassword")}>
                        {"Forgot password?"}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="" variant="body2" onClick={() =>handleRedirect("/register")}>
                        {"Don't have an account? Sign Up"}
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

export default withRouter(SignIn);
