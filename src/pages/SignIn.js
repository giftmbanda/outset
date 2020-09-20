import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"; //fovalidators
import Copyright from "../components/Copyright";

// import axios from "axios";
// const urlPath = "http://outset-v1.herokuapp.com/user";

const useStyles = (theme) => ({
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
});

class SignIn extends Component {
  state = {
    formData: {
      email: "",
      password: "",
    },
    submitted: false,
  };

  handleChange = (e) => {
    const { formData } = this.state;
    formData[e.target.name] = e.target.value.trim();
    this.setState({ formData });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { formData } = this.state;
    console.log(formData);

    // let res = await this.sendPostRequest(urlPath, formData);

    // if (res.status === 200 && res.ok) {
    //   const response = await res.json();
    //   // parses JSON response into native JavaScript objects
    //   console.log(response);
    // } else {
    //   const response = await res.json();
    //   console.log(response);
    // }

    // this.setState({ formData: "" }); // clear the form
  };

  // sendPostRequest = async (url = "", data = {}) => {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response;
  // };

  render() {
    const { classes } = this.props; //destructer classes from props
    const { formData } = this.state; //destructer formData from state
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
              Sign In
            </Typography>
            <ValidatorForm
              className={classes.form}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    variant="outlined"
                    name="email"
                    label="Email Address"
                    autoComplete="email"
                    value={formData.email || ""}
                    onChange={this.handleChange}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    variant="outlined"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={formData.password || ""}
                    onChange={this.handleChange}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
                className={classes.submit}
                //disabled={submitted.disabled}
              >
                Sign In
              </Button>
              <Grid container justify="flex-end">
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </ValidatorForm>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SignIn);
