import {BasketContext} from "../context/cartContext"
import { useContext } from "react";


export const useCart = () => useContext(BasketContext);
