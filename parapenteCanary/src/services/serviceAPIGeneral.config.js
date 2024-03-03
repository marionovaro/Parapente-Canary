import axios from "axios"

export const extraConfig = () => {
  return (axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 60000,
  }))
}