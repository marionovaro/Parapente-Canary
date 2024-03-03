import { extraConfig } from "./serviceAPIGeneral.config"

//! ---------- CREATE ORDER ---------
export const createOrder = async (formData) => {
  console.log(formData)
  const APIGeneral = extraConfig();
  return APIGeneral.post("orders/", formData)
    .then((res) => res)
    .catch((error) => error)
}

//! ---------- DELETE ORDER ---------
export const deleteOrder = async (orderId) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete(`/orders/${orderId}`)
    .then((res) => res)
    .catch((error) => error);
}

//! ---------- GET ALL ORDERS ---------
export const getAllOrders = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/orders/`)
    .then((res) => res)
    .catch((error) => error);
}