//ESte es un componente a reutilizar en las pagina basicas.

export const BasicPage = ({ title, description }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  };