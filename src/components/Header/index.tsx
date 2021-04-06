import React from "react"
import Switch from "react-switch"

import { ThemeContext } from "styled-components"

import { Container } from "./styles"

type ChildProps = {
  toggleTheme: () => void
}

const Header: React.FC<ChildProps> = ({ toggleTheme }) => {
  const { colors, title } = React.useContext(ThemeContext)

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark" ? true : false}
        // checkedIcon={false}
        // uncheckedIcon={false}
        offColor={colors.toggleBorder}
        onColor={colors.background}
      />
    </Container>
  )
}

export default Header
