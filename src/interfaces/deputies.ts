import { Links } from "./links"

export interface Deputies {
  id: number
  uri: string
  nome: string
  siglaPartido: string
  uriPartido: string
  siglaUf: string
  idLegislatura: number
  urlFoto: string
  email: string
}

export interface DeputiesReturn extends Links {
  dados: Deputies[]
}
