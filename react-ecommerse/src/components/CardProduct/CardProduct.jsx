import "./CardProduct.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProduct = ({ producto }) => {
    const { id, productImg, productTitle, productDescription, productPrice } = producto;
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="hidden"
                image={productImg}
                alt="comida"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {productTitle}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    {productDescription}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ marginTop: 3 }}>
                    {productPrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="small" color="secondary">
                Añadir al carrito
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardProduct;