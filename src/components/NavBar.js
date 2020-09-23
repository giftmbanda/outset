import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    const { history } = props;
    history.push(pageUrl);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => handleMenuClick("/")}
          >
            OutSet
          </Typography>

          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={handleMenu}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleMenuClick("/login")}>
                Login
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/register")}>
                Register
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/forgotpassword")}>
                Forgot Password
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/checkout")}>
                Checkout
              </MenuItem>
            </Menu>
          </div>
          {/* <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
          <Button color="inherit">Checkout</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);
