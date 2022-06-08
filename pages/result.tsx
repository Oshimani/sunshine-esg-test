import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button, Text, Card, MediaQuery, Center, useMantineTheme } from '@mantine/core'
import Image from 'next/image'

const Home: NextPage = () => {

    const theme = useMantineTheme()

    const router = useRouter()
    let { score: scoreQuery } = router.query
    const score = Number(scoreQuery)

    return (
        <MediaQuery largerThan="md" styles={{ width: "60%", margin: "auto" }}>
            <Card style={{
                flexGrow: 1,
                backgroundColor: "rgba(255,255,255,0.7)",
                display: "flex",
                flexDirection: "column",
                overflowY: 'auto'
            }}
                shadow={"md"}
                radius="md">

                {/* ICON */}
                <Card.Section p="lg" style={{ fontSize: 80, textAlign: "center" }}>{score > 0 ? "💚" : "😈"}</Card.Section>

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

                {/* QR CODE */}
                <Card.Section p="lg" style={{ flexGrow: 1 }}>
                    <Center style={{ height: "100%", textAlign: 'center' }}>
                        <div style={{
                            display: 'flex',
                            gap: 8,
                            flexDirection: "column"
                        }}>
                            <Link href={"https://startpage.com"}>
                                <Image src="/qr_code.png" alt="link to factsheet" height={160} width={160} layout="fixed" />
                            </Link>
                            <Link href={"https://startpage.com"}>
                                <Button variant='gradient'
                                    style={{ borderRadius: 6, backgroundColor: theme.white }}
                                    px={12} py={6}>
                                    Scan for Factsheet
                                </Button>
                            </Link>
                        </div>
                    </Center>
                </Card.Section>

                {/* GO AGAIN BUTTON */}
                <Link href={`/question/0?score=0`}>
                    <Button style={{ minHeight: 36 }} variant='gradient'>Go again</Button>
                </Link>


            </ Card>
        </MediaQuery >
    )
}

export default Home
