export type Answer = {
    text: string,
    score: number
}

export type Question = {
    icon?: string,
    image?: string, imageAlt?: string,
    question: string,
    info?: string,
    answers?: Answer[]
}


export const QUESTIONS: Question[] = [
    {
        image: "Elevator.svg",
        imageAlt: "Abbildung eines Fahrstuhls",
        question: "Wenn ich sehe, dass ich alleine im Aufzug fahren würde, nehme ich lieber die Treppe, denn das spart Strom."
    },
    {
        icon: "🍖",
        question: "In meiner alltäglichen Ernährung verzichte ich auf Fleisch. Im Restaurant frage ich nach der Fleischherkunft."
    },
    {
        icon: "🚬",
        question: "Wie wirkt sich das Rauchen auf die Lebenserwartung von Männern aus (>10 Zigaretten pro Tag)? Raucher leben im Schnitt...",
        info: "Der Konsum von mehr als zehn Zigaretten pro Tag raubt Männern im Schnitt 9,4 Lebensjahre. Das geht aus Berechnungen des Deutschen Krebsforschungszentrums hervor. Weiter ist die Produktion von Tabak schädlich für die Umwelt und sorgt für ungerechte Behandlung und Bezahlung der Menschen in den produzierenden Ländern.",
        answers: [
            {
                text: "... genau so lange wie Nichtraucher",
                score: -1
            },
            {
                text: "... 2 Jahre weniger als Nichtraucher",
                score: -1
            },
            {
                text: "... 5,5 Jahre weniger als Nichtraucher",
                score: -1
            },
            {
                text: "... 9,4 Jahre weniger als Nichtraucher",
                score: 1
            }
        ]
    },
    {
        icon: "🐰",
        question: "Wie viel Prozent der einheimischen Tierarten in Deutschland sind vom Aussterben bedroht?",
        info: "Von den einheimischen Tierarten in Deutschland sind 35 Prozent bestandsgefährdet, von den Pflanzenarten sind es 26 Prozent. Der Mensch ist auf die Vielfalt der Natur angewiesen. Ungefähr 70.000 Pflanzenarten werden zum Beispiel für medizinische Zwecke genutzt.",
        answers: [
            {
                text: "Rund 60%",
                score: -1
            },
            {
                text: "Rund 35%",
                score: 1
            },
            {
                text: "Rund 20%",
                score: -1
            },
            {
                text: "Rund 8%",
                score: -1
            }
        ]
    },
    {
        icon: "🛍️",
        question: "Auf Fast Fashion kann ich verzichten. Lieber kaufe ich mir hochwertige und regional produzierte Kleidung und trage sie so lange wie möglich."
    },
    {
        icon: "🚮",
        question: "Wie viel Prozent der weltweit produzierten Lebensmittel werden weggeworfen?",
        info: "Fast ein Drittel der Lebensmittel landen weltweit im Müll. Lebenswichtige Ressourcen wie Ackerflächen und Wasser werden unnötig verschwendet, vermeidbare Treibhausgase entstehen. Achten Sie auf die umweltverträgliche Herstellung Ihrer Lebensmittel. Agrarprodukte aus nachhaltiger Erzeugung sind nur auf den ersten Blick etwas teurer, denn umweltfreundliche Produkte wie zum Beispiel Bioprodukte zahlen sich durch geringere Umwelt- und Gesundheitskosten auf lange Sicht aus.",
        answers: [
            {
                text: "Ein Zehntel",
                score: -1
            },
            {
                text: "Ein Achtel",
                score: -1
            },
            {
                text: "Ein Viertel",
                score: -1
            },
            {
                text: "Ein Drittel",
                score: 1
            },

        ]
    }
]