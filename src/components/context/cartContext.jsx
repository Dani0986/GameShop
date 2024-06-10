
//Dado un template de una tienda online con una serie de productos,
//necesitamos que estos productos puedan añadirse a nuestra cesta de la compra.
//Para ello vamos a utilizar el context, de esta manera 
//se compartirá la información de la cesta entre diferentes componentes


import { createContext, useContext, useReducer, useState } from "react";
import PropTypes from 'prop-types';
//con useContext+useReducer

//Paso 1: Crear un contexto para el carrito
//Paso 2: Definir una funcion reducer que añade nuevos productos
//oi los elimina de la cesta
//Paso 3: Crear el provider que contendra el estado y la función reductora

//Paso 1
 export const BasketContext = createContext();

//Paso 2
function BasketReducer(state, action) {
    switch (action.type) {
        case "add": {
            // Encuentra el índice del ítem en el carrito basado en el id del ítem
            const itemIndex = state.findIndex(item => item.id === action.item.id);

            if (itemIndex !== -1) {
                // Si el ítem ya está en el carrito, incrementa su cantidad
                const newState = [...state];
                newState[itemIndex] = {
                    ...newState[itemIndex],
                    cantidad: newState[itemIndex].cantidad + 1,
                };
                return newState;
            } else {
                // Si el ítem no está en el carrito, agrégalo con una cantidad de 1
                return [...state, { ...action.item, cantidad: 1 }];
            }
        }

        case "remove": {
            // Elimina el ítem del carrito basado en el id del ítem
            return state.filter(item => item.id !== action.item.id);
        }

        default:
            // Devuelve el estado actual para cualquier otro tipo de acción
            return state;
    }
}

//Paso 3:
export const CartProvider =({children}) => {
    //basket es el estado inicial , que es un array vacío

    const [basket,dispatch] = useReducer(BasketReducer,[]);
       return(
            <BasketContext.Provider value = {{basket,dispatch}}>
                {children}
            </BasketContext.Provider>
        )
}
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
