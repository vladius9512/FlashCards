import { useState } from "react";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";
import { Link } from "react-router-dom";
import FrequentQuestions from "./components/FrequentQuestions";

function App() {
    const [cardInfo, setCardInfo] = useState([
        {
            name: "frecventCancer",
            keywords: ["cancer", "femei", "frecvent"],
            frontInfo: "Care este cel mai frecvent cancer la femei?",
            backInfo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            imagesrc: "",
        },
    ]);
    return (
        <>
            <Link to="about">Despre</Link>
            <Navigation></Navigation>
            <FlashCard cardInformations={cardInfo[0]}></FlashCard>
            <FrequentQuestions></FrequentQuestions>
        </>
    );
}

export default App;
