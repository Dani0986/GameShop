// Formulario.js
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = (data) => {
    console.log("data", data);
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 2,
              message: "El nombre debe tener al menos dos caracteres",
            },
          })}
          placeholder="Nombre"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="surname">Apellidos</label>
        <input
          type="text"
          id="surname"
          {...register("surname", {
            required: "El apellido es obligatorio",
            minLength: {
              value: 2,
              message: "El apellido debe tener al menos dos caracteres",
            },
          })}
          placeholder="Apellidos"
        />
        {errors.surname && <p>{errors.surname.message}</p>}
      </div>

      <div>
        <label htmlFor="birth">Fecha de nacimiento</label>
        <input
          type="text"
          id="birth"
          {...register("birth", {
            valueAsDate: true,
          })}
          placeholder="Fecha de nacimiento"
        />
        {errors.birth && <p>{errors.birth.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", {
            required: "El correo electronico es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de correo electrónico no válido",
            },
          })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: "Contraseña no válida",
            },
          })}
          placeholder="Contraseña"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Formulario;
