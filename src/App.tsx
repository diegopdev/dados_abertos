import React from "react"
import { GlobalStyles } from "./styles/globalStyle"
import { DefaultTheme, ThemeProvider } from "styled-components"

import { lightTheme } from "./styles/themes/light"
import { darkTheme } from "./styles/themes/dark"

import HomeContainer from "./containers/HomeContainer"
import Header from "./components/Header"
import usePersistedState from "./hooks/usePersistedState"

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", lightTheme)

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <HomeContainer />
      </ThemeProvider>
    </>
  )
}

export default App
