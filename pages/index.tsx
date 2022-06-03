import type { NextPage } from 'next'
import Link from 'next/link'

import { Button, Text, Card, MediaQuery } from '@mantine/core'

const Home: NextPage = () => {
  return (
    <MediaQuery largerThan="md" styles={{ width: "60%", margin: "auto" }}>

      <Card style={{
        flexGrow: 1,
        backgroundColor: "rgba(255,255,255,0.7)",
        display: "flex",
        flexDirection: "column"
      }}
        shadow={"md"}
        radius="md">

        <Card.Section p="lg" style={{ textAlign: 'center' }}>
          <Text size='lg' mb="lg">
            Nimm an unserem ESG-Test teil und finde heraus, ob der <span style={{ fontWeight: 'bold' }}>Sunshine ESG Fund EUR</span> zu dir passt.
          </Text>

        </Card.Section>

        <div style={{ flexGrow: 1 }}></div>

        {/* START BUTTON */}
        <Link href={`/question/0?score=0`}>
          <Button variant='filled'>Start</Button>
        </Link>

      </Card>

    </MediaQuery>
  )
}

export default Home
