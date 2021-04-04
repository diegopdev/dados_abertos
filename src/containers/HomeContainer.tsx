import React from "react"
import { Deputies } from "../interfaces/deputies"
import HomeView from "../pages/HomeView"

import DeputiesService from "../services/deputies"

const HomeContainer: React.FC = () => {
  const [deputies, setDeputies] = React.useState<Deputies[]>([])

  React.useEffect(() => {
    DeputiesService.getDeputies().then((resp) => setDeputies(resp?.data?.dados))
  }, [])

  return <HomeView data={deputies} />
}

export default HomeContainer
