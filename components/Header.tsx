import { Title, MediaQuery } from '@mantine/core'
import React from 'react'

const Header = () => {
  return (
    <MediaQuery largerThan="md" styles={{ textAlign: "center" }}>
      <Title style={{ marginBottom: 24 }}>🌞 Sunshine</Title>
    </MediaQuery>
  )
}

export default Header