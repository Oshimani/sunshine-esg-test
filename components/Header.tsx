import { Title, MediaQuery } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <MediaQuery largerThan="md" styles={{ textAlign: 'center' }}>

      <Title style={{ marginBottom: 24 }}><Link href="/">🌞 Sunshine</Link></Title>

    </MediaQuery>
  )
}

export default Header