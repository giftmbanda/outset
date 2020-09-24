import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Copyright from "../components/Copyright";
import { useStyles } from "../styles/SignUp.styles";


const initialValues = {
  email: "",
};

const EmailSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
});

const ForgotPassword = () => {
  const classes = useStyles();

  const onSubmit = async (values) => {
    console.log(values);
    // const urlPath = "/user/forgotpassword";
    // const body = values;
    // const response = await axios.post(urlPath, body);
    
    // if (response.status && response.statusText === "OK") {
    //   setUser(response.data);
    // } else {
    //   setUser(null);
    // }
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MailOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {"Forgot Password"}
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={EmailSchema}
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
              <Form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
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
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!dirty || !isValid}
                >
                  {"Send Email"}
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"You know your passowrd? Sign in"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default ForgotPassword;
