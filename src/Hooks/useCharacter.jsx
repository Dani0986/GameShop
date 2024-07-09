import { useContext } from "react";

import { Characterslist } from "../components/Character";
//* generamos un customhook para usar el context
export const useCharacters = () => useContext(Characterslist);