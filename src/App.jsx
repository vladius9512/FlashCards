import { useState } from "react";
import FlashCard from "./components/FlashCard";
import FrequentQuestions from "./components/FrequentQuestions";
import style from "./styles/buttons.module.css";
import image from "./assets/doctor.svg";
import Firebase from "./components/Firebase";

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
            <div className="title-image-container">
                <div className="left-side-container">
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                    </h1>
                    <button className={style.primaryBtn}>Incepe acum</button>
                </div>
                <div className="right-side-wrapper">
                    <img src={image}></img>
                </div>
            </div>
            <FlashCard cardInformations={cardInfo[0]}></FlashCard>
            <FrequentQuestions></FrequentQuestions>
            <Firebase></Firebase>
        </>
    );
}

export default App;
