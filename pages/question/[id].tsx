import { NextPage, NextPageContext } from "next"
import { useRouter } from "next/router"
import Image from 'next/image'

import { Button, Card, MediaQuery, SimpleGrid, Text } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

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
    const { id, score } = router.query

    const goToNextQuestion = (scoreDiff: number) => {
        router.push(`/question/${Number(id) + 1}?score=${Number(score) + scoreDiff}`)
    }

    const goToAnswer = (scoreDiff: number) => {
        router.push(`/answer/${Number(id)}?score=${Number(score) + scoreDiff}&correct=${scoreDiff > 0}`)
    }

    const handleOnClick = (scoreDiff: number) => {
        if (question?.answers) {
            // handle mc question
            goToAnswer(scoreDiff)
        }
        // handle yes no question
        if (QUESTIONS.length > Number(id) + 1) {
            // go to next question
            goToNextQuestion(scoreDiff)
        } else {
            // go to results
            router.push(`/result?score=${score}`)
        }
        return

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

                {/* QUESTION */}
                <Card.Section p="lg" pt="xs" style={{ textAlign: "center" }}>
                    <Text size="xl">
                        <b>[{Number(id) + 1}/{QUESTIONS.length}]</b> {question?.question}
                    </Text>
                </Card.Section>

                <div style={{ flexGrow: 1 }}></div>

                {/* BUTTONS */}
                <Card.Section p="lg">

                    {question?.answers ?

                        // QUESTION WITH ANSWER OPTIONS
                        <SimpleGrid cols={1}>
                            {question.answers.map((answer, index) => (
                                <Button key={index}
                                    onClick={() => handleOnClick(answer.score)}
                                    variant="gradient">
                                    {answer.text}
                                </Button>
                            ))}
                        </SimpleGrid>

                        :

                        // YES NO QUESTION
                        <SimpleGrid cols={2}>
                            <Button
                                title="Stimme nicht zu"
                                style={{ fontSize: 24 }}
                                onClick={() => handleOnClick(-1)}
                                variant="gradient"
                                gradient={{ from: 'orange', to: 'red' }}>
                                <FontAwesomeIcon icon={faThumbsDown} />
                            </Button>

                            <Button
                                title="Stimme zu"
                                style={{ fontSize: 24 }}
                                onClick={() => handleOnClick(1)}
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </Button>
                        </SimpleGrid>
                    }
                </Card.Section>

            </ Card>
        </MediaQuery>
    )
}

export default QuestionPage
