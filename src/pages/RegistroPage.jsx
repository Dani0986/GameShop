import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  background-color: grey; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #45a049;
  }
`;

export const RegistroPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm(); // Agregamos setValue para manejar la imagen
  const [image, setImage] = useState(null);

  const onSubmitCustom = async (data) => {
    try {
     

    
      console.log(data)
      // Enviar FormData al servidor utilizando axios
      await axios.post('http://localhost:8080/api/v1/user/registerLargo', data, {
        headers: {
          
        }
      });

      // Navegar a la página de login después de registrar
      navigate('/login');
    } catch (error) {
      // Manejar errores de axios
      if (error.response) {
        console.error('Respuesta del servidor con estado:', error.response.status);
        console.error('Mensaje del servidor:', error.response.data);
      } else if (error.request) {
        console.error('No se recibió respuesta del servidor:', error.request);
      } else {
        console.error('Error al procesar la solicitud:', error.message);
      }
      console.error('Error completo:', error);
    }
  };

  // Manejar el cambio de la imagen seleccionada
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit(onSubmitCustom)}>
        <div className="form-group">
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" id="Nombre" {...register("name", { required: 'Nombre obligatorio' })} />
          {errors.Nombre && <p>{errors.Nombre.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Genero">Género</label>
          <input type="text" id="Genero" {...register("gender", { required: 'Género obligatorio' })} />
          {errors.Genero && <p>{errors.Genero.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Rol">Rol Admin o User</label>
          <input type="text" id="Rol" {...register("Rol", { required: 'Rol obligatorio' })} />
          {errors.Rol && <p>{errors.Rol.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Email">Correo</label>
          <input type="text" id="Email" {...register("email", { required: 'Email obligatorio' })} />
          {errors.Email && <p>{errors.Email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Contrasena">Contraseña</label>
          <input type="password" id="Contrasena" {...register("password", { required: 'Contraseña obligatoria' })} />
          {errors.Contrasena && <p>{errors.Contrasena.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Nacimiento">Fecha de Nacimiento</label>
          <input type="date" id="Nacimiento" {...register("FechaNacimiento", { required: 'Fecha de Nacimiento obligatoria' })} />
          {errors.Nacimiento && <p>{errors.Nacimiento.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Imagen">Imagen</label>
          <input type="file" id="Imagen" onChange={handleImageChange} />
        </div>
        <Button type="submit">Regístrate</Button>
      </form>
    </div>
  );
};

export default RegistroPage;



/*import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  background-color: grey; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #45a049;
  }
`;

export const RegistroPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  const onSubmitCustom = async (data) => {
    try {
      const formData = new FormData();
      formData.append('Nombre', data.Nombre);
      formData.append('Localidad', data.Localidad);
      formData.append('Genero', data.Genero);
      formData.append('Email', data.Email);
      formData.append('Rol', data.Rol);
      formData.append('Contrasena', data.Contrasena);
      formData.append('Imagen', image);
      formData.append('Nacimiento', data.Nacimiento);
      console.log(formData)
      await axios.post('http://localhost:8080/api/v1/user/registerLargo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      navigate('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit(onSubmitCustom)}>
        <div className="form-group">
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" id="Nombre" {...register("Nombre", { required: 'Nombre obligatorio' })} />
          {errors.Nombre && <p>{errors.Nombre.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Localidad">Localidad</label>
          <input type="text" id="Localidad" {...register("Localidad", { required: 'Localidad obligatoria' })} />
          {errors.Localidad && <p>{errors.Localidad.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Genero">Género</label>
          <input type="text" id="Genero" {...register("Genero", { required: 'Género obligatorio' })} />
          {errors.Genero && <p>{errors.Genero.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Rol">Rol Admin o User</label>
          <input type="text" id="Rol" {...register("Rol", { required: 'Rol obligatorio' })} />
          {errors.Rol && <p>{errors.Rol.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Email">Correo</label>
          <input type="text" id="Email" {...register("Email", { required: 'Email obligatorio' })} />
          {errors.Email && <p>{errors.Email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Contrasena">Contraseña</label>
          <input type="password" id="Contrasena" {...register("Contrasena", { required: 'Contraseña obligatoria' })} />
          {errors.Contrasena && <p>{errors.Contrasena.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Nacimiento">Fecha de Nacimiento</label>
          <input type="date" id="Nacimiento" {...register("Nacimiento", { required: 'Fecha de Nacimiento obligatoria' })} />
          {errors.Nacimiento && <p>{errors.Nacimiento.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Imagen">Imagen</label>
          <input type="file" id="Imagen" onChange={handleImageChange} />
        </div>
        <Button type="submit">Regístrate</Button>
      </form>
    </div>
  );
};

export default RegistroPage;

*/
