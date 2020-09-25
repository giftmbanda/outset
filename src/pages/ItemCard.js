import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Copyright from "../components/Copyright";
import { useStyles } from "../styles/ItemCard.style";

const ItemCard = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const url = "/product/show";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}`);
      if (response.status && response.statusText === "OK") {
        setProduct(response.data.products);
      } else {
        setProduct(null);
      }
    }
    fetchData();
  }, [url]);

  console.log(product);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              {"All about the beginings!"}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={1}>
            {product.map((prod) => (
              <Grid item key={prod._id} xs={6} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={prod.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6">
                      {`R ${prod.price}`}
                    </Typography>
                    <Typography>{prod.name}</Typography>
                    <Typography>
                      <strong>{prod.category.name}</strong>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton color="inherit">
                      <AddShoppingCartSharpIcon />
                    </IconButton>
                    <IconButton color="inherit">
                      <VisibilityIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default ItemCard;
