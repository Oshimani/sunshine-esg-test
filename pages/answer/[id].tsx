import { NextPage, NextPageContext } from "next"
import { useRouter } from "next/router"
import Image from 'next/image'

import { Button, Card, MediaQuery, SimpleGrid, Text } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { QUESTIONS, Question, } from "../../config/questions"

export const getServerSideProps = (context: NextPageContext) => {
    const { id } = context.query
    return {
        props: {
            question: QUESTIONS[Number(id)]
        }
    }
}

interface IQuestionPageProps {
    question: Question
}

const QuestionPage: NextPage<IQuestionPageProps> = (props: IQuestionPageProps) => {
    const { question } = props

    const router = useRouter()
    const { id, score, correct } = router.query

    const goToNextQuestion = (scoreDiff: number) => {
        router.push(`/question/${Number(id) + 1}?score=${Number(score) + scoreDiff}`)
    }

    const handleOnClick = (scoreDiff: number) => {
        // go to next question
        if (QUESTIONS.length > Number(id) + 1) {
            goToNextQuestion(scoreDiff)
        } else {
            router.push(`/result?score=${score}`)
        }
    }

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
                <Card.Section p="lg" pb="xs" style={{ fontSize: 64, minHeight: 125, textAlign: "center" }}>
                    {question?.image ?
                        <Image src={`/${question.image}`} alt={question.imageAlt} height={160} width={160} />

                        :

                        <>
                            {question?.icon}
                        </>
                    }
                </Card.Section>

                {/* CORRECT */}
                <Card.Section p="lg" pt="xs" style={{ textAlign: "center" }}>
                    {correct === "true" ?
                        <Text size="xl">
                            ✔️ Richtig
                        </Text>
                        :
                        <Text size="xl">
                            ❌ Falsch
                        </Text>
                    }
                </Card.Section>

                {/* INFO */}
                {question?.info &&
                    <Card.Section p="lg" pt="xs" style={{ textAlign: "center" }}>
                        <Text size="xl">
                            {question.info}
                        </Text>
                    </Card.Section>
                }

                <div style={{ flexGrow: 1 }}></div>

                {/* BUTTONS */}
                <Card.Section p="lg">

                    <SimpleGrid cols={1}>
                        <Button
                            title="Stimme zu"
                            onClick={() => handleOnClick(0)}
                            variant="gradient"
                            gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                            Weiter
                            <FontAwesomeIcon style={{ marginLeft: 8, fontSize: 24 }} icon={faArrowRight} />
                        </Button>
                    </SimpleGrid>
                </Card.Section>

            </ Card>
        </MediaQuery>
    )
}

export default QuestionPage
