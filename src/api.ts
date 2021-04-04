import axios from "axios"

export const API = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2",
})
