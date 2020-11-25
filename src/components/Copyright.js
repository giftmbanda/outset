import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://giftmbanda.com/" target="_blank">
        Gift Banda
      </Link>{" "}
      {new Date().getFullYear()}{" "}
    </Typography>
  );
};

export default Copyright;
