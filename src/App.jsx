import { useState } from "react";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";

function App() {
    const [cardInfo, setCardInfo] = useState([
        {
            frontInfo: "Care este cel mai frecvent cancer la femei?",
            backInfo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
    ]);
    return (
        <>
            <Navigation></Navigation>
            <FlashCard cardInformations={cardInfo[0]}></FlashCard>
        </>
    );
}

export default App;
