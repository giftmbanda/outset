import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
import Copyright from "../components/Copyright";
import { useStyles } from "../styles/SignUp.styles";

const initialValues = {
  password: "",
  comfirmPassword: "",
};

const EmailSchema = Yup.object().shape({
  password: Yup.string().min(4).required("Required"),
  comfirmPassword: Yup.string()
    .min(4)
    .oneOf([Yup.ref("password")], 'Passwords do not match')
    .required("Required"),
});

const ResetPassword = (props) => {
  const classes = useStyles();

  const handleRedirect = (pageUrl) => {
    const { history } = props;
    history.push(pageUrl);
  };

  const onSubmit = async (values) => {
    console.log(values);
    // const urlPath = "/user/forgotpassword";
    // const body = values;
    // const response = await axios.post(urlPath, body);

    // if (response.status && response.statusText === "OK") {
    //   setUser(response.data);
    //   handleRedirect("/login")
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
                      required
                      fullWidth
                      as={TextField}
                      name="password"
                      margin="normal"
                      variant="outlined"
                      label="New Password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      helperText={<ErrorMessage name="password" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      required
                      fullWidth
                      as={TextField}
                      name="comfirmPassword"
                      margin="normal"
                      variant="outlined"
                      label="Comfirm New Password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.comfirmPassword}
                      error={Boolean(
                        touched.comfirmPassword && errors.comfirmPassword
                      )}
                      helperText={<ErrorMessage name="comfirmPassword" />}
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
                  {"Reset Password"}
                </Button>
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

export default withRouter(ResetPassword);
