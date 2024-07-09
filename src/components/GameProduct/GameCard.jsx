import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

const GameCard = ({ game }) => {
  if (!game || !game.name || !game.year || !game.image) {
    console.error("Juego no válido:", game);
    return null;
  }

  const handleAddToCart = () => {
    console.log(`Juego añadido al carrito: ${game.name}`);
    // Aquí puedes agregar la lógica para añadir el juego al carrito
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s ease-in-out",
        "&:hover": { boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
      }}
    >
      <CardActionArea>
        {/* Imagen del juego */}
        <CardMedia
          component="img"
          height="200"
          image={game.image}
          alt={game.name}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <CardContent>
          {/* Título del juego */}
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {game.name}
          </Typography>
          {/* Descripción del juego */}
          <Typography variant="body2" color="text.secondary">
            {game.year}
          </Typography>
          {/* Precio del juego (si aplica) */}
          {game.price && (
            <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
              ${game.price}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        {/* Botón para añadir al carrito */}
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px" }}
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
