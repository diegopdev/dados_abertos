import React, { ReactElement } from "react"
import { Deputies } from "../interfaces/deputies"

// import { Container } from './styles';

type ChildProps = {
  data: Deputies[]
}

const HomeView: React.FC<ChildProps> = ({ data }): ReactElement => {
  return <h1>{data[0]?.email}</h1>
}

export default HomeView
