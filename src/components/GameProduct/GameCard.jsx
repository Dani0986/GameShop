import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import { CharactersContext } from "../../context/CharacterContext";

const GameCard = ({ game }) => {
  const characters = useContext(CharactersContext);
  const [showCharacters, setShowCharacters] = useState(false);
  const [gameCharacters, setGameCharacters] = useState([]);
  const [imageLoading, setImageLoading] = useState(true); // Estado para manejar la carga de la imagen

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersDetails = await Promise.all(
          game.characters.map(async (characterId) => {
            const response = await fetch(`/api/characters/${characterId}`);
            if (!response.ok) {
              throw new Error(`Error al obtener detalles del personaje con ID: ${characterId}`);
            }
            return await response.json();
          })
        );
        setGameCharacters(charactersDetails);
      } catch (error) {
        console.error("Error al obtener los detalles de los personajes:", error.message);
      }
    };

    if (showCharacters && game.characters.length > 0) {
      fetchCharacters();
    } else {
      setGameCharacters([]); // Resetear los personajes si showCharacters es falso
    }
  }, [showCharacters, game.characters]);

  const handleToggleCharacters = () => {
    setShowCharacters(!showCharacters);
  };

  const handleImageLoaded = () => {
    setImageLoading(false); // Cuando la imagen se carga correctamente
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
      <CardActionArea onClick={handleToggleCharacters}>
        {/* Renderizar CardMedia solo si game.image tiene una URL */}
        {game.image && (
          <CardMedia
            component="img"
            height="200"
            image={game.image} // Asegúrate de que game.image contenga la URL correcta
            alt={game.name}
            onLoad={handleImageLoaded} // Manejar la carga de la imagen
            sx={{
              objectFit: "cover",
              borderRadius: "20px 20px 0 0",
              display: imageLoading ? "none" : "block", // Ocultar hasta que la imagen se cargue
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
          {game.price && (
            <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
              ${game.price}
            </Typography>
          )}
          {showCharacters && (
            <div>
              <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
                Personajes:
              </Typography>
              <ul>
                {characters
                  .filter((character) => game.characters.includes(character._id))
                  .map((character) => (
                    <li key={character._id}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={character.image} // Asegúrate de que character.image contenga la URL correcta
                        alt={character.name}
                        sx={{
                          objectFit: "cover",
                          borderRadius: "10px",
                          marginRight: "10px",
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
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px" }}
          onClick={() => console.log(`Juego añadido al carrito: ${game.name}`)}
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
