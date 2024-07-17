import React from "react";
import { Modal, Typography, Button } from "@mui/material";
import { useCart } from "../context/cartContext";

const styles = {
  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "80%",
    minWidth: "300px",
    textAlign: "center",
  },
};

export const PaymentModal = ({ open, onClose }) => {
  const { cartItems, pay } = useCart();

  const handlePayment = () => {
    pay();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={styles.modalContent}>
        <Typography variant="h5" gutterBottom>
          Resumen de Compra
        </Typography>
        <Typography variant="body1" component="div">
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.score} Euros</p>
            </div>
          ))}
        </Typography>
        <Button
          onClick={handlePayment}
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Confirmar Pago
        </Button>
      </div>
    </Modal>
  );
};

export default PaymentModal;
