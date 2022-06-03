import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button, Text, Card, MediaQuery } from '@mantine/core'

const Home: NextPage = () => {

    const router = useRouter()
    let { score: scoreQuery } = router.query
    const score = Number(scoreQuery)

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

                {/* ICON */}
                <Card.Section p="lg" style={{ fontSize: 128, minHeight: 125, textAlign: "center" }}>{score > 0 ? "💚" : "😈"}</Card.Section>

                {score >= 0 ?
                    <Card.Section p="lg" style={{ textAlign: 'center' }}>
                        <Text size='lg' mb="lg">
                            Du hast ein grünes Herz.<br />
                            Warum nicht auch nachhaltig investieren?
                        </Text>
                        <Text>
                            Informiere dich über den <span style={{ fontWeight: 'bold' }}>Sunshine ESG Fund EUR</span> und investiere in 20 besonders nachhaltige und sozial verantwortliche Unternehmen.
                        </Text>
                    </Card.Section>

                    :

                    <Card.Section p="lg" style={{ textAlign: 'center' }}>
                        <Text size='lg' mb="lg">
                            Keine besonders ökologische Einstellung.<br />
                            Warum nicht zum Ausgleich nachhaltig investieren?
                        </Text>
                        <Text>
                            Informiere dich über den <span style={{ fontWeight: 'bold' }}>Sunshine ESG Fund EUR</span> und erleichtere dein Gewissen durch ein besonders nachhaltiges Investment.
                        </Text>
                    </Card.Section>
                }

                <div style={{ flexGrow: 1 }}></div>

                {/* GO AGAIN BUTTON */}
                <Link href={`/question/0?score=0`}>
                    <Button variant='filled'>Go again</Button>
                </Link>


            </ Card>
        </MediaQuery >
    )
}

export default Home
