import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Button, Text, Card, MediaQuery, Center, useMantineTheme } from '@mantine/core'

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
                <Card.Section p="lg">
                    <Center>
                        {score > 0 ?
                            <Image src={`/Happy.png`} alt="Abbildung einer glücklichen Biene." width={180} height={180} />
                            :
                            <Image src={`/Sad.png`} alt="Abbildung einer traurigen Biene." width={180} height={180} />

                        }
                    </Center>
                </Card.Section>

                {score > 0 ?
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
                            Du könntest etwas Nachhilfe zum Thema Nachhaltigkeit gebrauchen.
                        </Text>
                        <Text>
                            Informiere dich über den <span style={{ fontWeight: 'bold' }}>Sunshine ESG Fund EUR</span> und starte mit einem Investment in Unternehmen, die auf dem Gebiet der Nachhaltigkeit Branchenleader sind.
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
                                    Factsheet
                                </Button>
                            </Link>
                        </div>
                    </Center>
                </Card.Section>

                {/* GO AGAIN BUTTON */}
                <Link href={`/question/0?score=0`}>
                    <Button style={{ minHeight: 36 }} variant='gradient'>Nochmal versuchen</Button>
                </Link>


            </ Card>
        </MediaQuery >
    )
}

export default Home
