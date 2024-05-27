// components/Form.jsx

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };



  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Validamos que onSubmit sea una función requerida
};
export default Form;
