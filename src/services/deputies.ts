import { AxiosResponse } from "axios"
import { API } from "../api"
import { DeputiesReturn } from "../interfaces/deputies"

class DeputiesService {
  getDeputies(): Promise<AxiosResponse<DeputiesReturn>> {
    return API.get("deputados?ordem=ASC&ordenarPor=nome")
  }
}

export default new DeputiesService()
