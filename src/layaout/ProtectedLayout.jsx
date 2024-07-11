//* si hay usuario mostramso ela página con el outlet, si no, no
import { Navigate, useOutlet } from "react-router-dom";

//* improtamos el contexto, para saber si hay o no usuario, para saber si es portegido 
import { useAuth } from "../hooks/useAuth";



export const ProtectedLayout = () =>{
  //*extraemos el usuario del contexto authcontext
const {user} = useAuth()
//*lanzamos el outlet
const outlet = useOutlet()

//* si no hay usuario, ve al inicio '/', si hay usuario, a la ruta que 
//* marque el outlet
if (!user) {
  return <Navigate to='/' />
}
return (
  <div>
{outlet}
  </div>
)

}