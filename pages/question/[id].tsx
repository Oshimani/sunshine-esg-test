import { NextPage, NextPageContext } from "next"
import { useRouter } from "next/router"

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
                flexDirection: "column"
            }}
                shadow={"md"}
                radius="md">

                {/* ICON */}
                <Card.Section p="lg" style={{ fontSize: 64, minHeight: 125, textAlign: "center" }}>{question?.icon}</Card.Section>

                {/* QUESTION */}
                <Card.Section p="lg" style={{ textAlign: "center" }}>
                    <Text size="xl">
                        {question?.question}
                    </Text>
                </Card.Section>

                <div style={{ flexGrow: 1 }}></div>

                {/* BUTTONS */}
                <Card.Section p="lg">
                    <SimpleGrid cols={2}>

                        <Button
                            title="Stimme nicht zu"
                            style={{ fontSize: 24 }}
                            onClick={() => handleOnClick(1)}
                            variant="gradient"
                            gradient={{ from: 'orange', to: 'red' }}>
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </Button>

                        <Button
                            title="Stimme zu"
                            style={{ fontSize: 24 }}
                            onClick={() => handleOnClick(-1)}
                            variant="gradient"
                            gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </Button>
                    </SimpleGrid>
                </Card.Section>

            </ Card>
        </MediaQuery>
    )
}

export default QuestionPage
