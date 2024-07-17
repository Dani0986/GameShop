import React, { useState, useContext } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from '@mui/material';
import { CharactersContext } from '../../context/CharacterContext';
import { useCart } from '../../context/cartContext';

const GameCard = ({ game, addToCart, user }) => {
  const characters = useContext(CharactersContext);
  const { addToCart: addToCartContext } = useCart(); // Renombrar la función para evitar conflictos de nombres

  const [showCharacters, setShowCharacters] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleToggleCharacters = () => {
    setShowCharacters(!showCharacters);
  };

  const handleImageLoaded = () => {
    setImageLoading(false);
  };

  const handleAddToCart = () => {
    if (!user) {
      alert('Debes iniciar sesión para añadir juegos al carrito.');
      return;
    }
    addToCartContext(game); // Llama a la función addToCart del contexto solo si el usuario está autenticado
    console.log(`Juego añadido al carrito: ${game.name}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        borderRadius: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: '0.3s ease-in-out',
        '&:hover': { boxShadow: '0 5px 15px rgba(0,0,0,0.2)' },
      }}
    >
      <CardActionArea onClick={handleToggleCharacters}>
        {game.image && (
          <CardMedia
            component="img"
            height="200"
            image={game.image}
            alt={game.name}
            onLoad={handleImageLoaded}
            sx={{
              objectFit: 'cover',
              borderRadius: '20px 20px 0 0',
              display: imageLoading ? 'none' : 'block',
            }}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {game.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Año: {game.year}
          </Typography>
          {game.score !== undefined ? (
            <Typography variant="h6" component="div" sx={{ paddingTop: '8px' }}>
              Precio: {game.score} Euros
            </Typography>
          ) : (
            <Typography variant="h6" component="div" sx={{ paddingTop: '8px' }}>
              Precio no disponible
            </Typography>
          )}
          {showCharacters && (
            <div>
              <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
                Mejores Personajes:
              </Typography>
              <ul>
                {characters
                  .filter(character => game.characters.includes(character._id))
                  .map(character => (
                    <li key={character._id}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={character.image}
                        alt={character.name}
                        sx={{
                          objectFit: 'cover',
                          borderRadius: '10px',
                          marginRight: '10px',
                        }}
                      />
                      <Typography variant="body2">{character.name}</Typography>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '20px' }}
          onClick={handleAddToCart} // Manejar la función de añadir al carrito
        >
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;






/*import React, { useState } from "react";
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
  const [showDescription, setShowDescription] = useState(false);

  // Verifica si el objeto game está definido y tiene las propiedades necesarias
  if (!game || !game.name || !game.year || !game.image) {
    console.error("Juego no válido:", game);
    return null;
  }

  const handleAddToCart = () => {
    console.log(`Juego añadido al carrito: ${game.name}`);
    // Aquí puedes agregar la lógica para añadir el juego al carrito
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
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
      <CardActionArea onClick={toggleDescription}>
        {/* Imagen del juego }
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
          {/* Título del juego }
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {game.name}
          </Typography>
          {/* Descripción del juego (mostrada si showDescription es true) }
          {showDescription && (
            <Typography variant="body2" color="text.secondary">
              {game.description}
            </Typography>
          )}
          {/* Año del juego }
          <Typography variant="body2" color="text.secondary">
            Año: {game.year}
          </Typography>
          {/* Precio del juego (si aplica) }
          {game.price && (
            <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
              ${game.price}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        {/* Botón para añadir al carrito }
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
*/
