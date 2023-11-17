import { useState } from "react";
import swapSvg from "../assets/swap.svg";

function FlashCard({ cardInformations }) {
    const [cardAnswer, setCardAnswer] = useState(false);
    const cardClick = () => {
        setCardAnswer(!cardAnswer);
    };
    return (
        <div className={cardAnswer ? "card-wrapper active" : "card-wrapper"}>
            <div className="card-body">
                <div className="card-front">
                    <p>{cardInformations.frontInfo}</p>
                    <img
                        src={swapSvg}
                        alt="swap"
                        width={30}
                        onClick={cardClick}
                    />
                </div>
                <div className="card-back">
                    <div className="svg-wrapper">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={150}
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6 3H8M18 3H16M16 3H8M16 3V8M8 3V8M8 8V17C8 19.2091 9.79086 21 12 21V21C14.2091 21 16 19.2091 16 17V8M8 8H16"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>
                                <path
                                    d="M13.0007 12.0007L13 12"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>
                                <path
                                    d="M11.0007 16.0007L11 16"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <p>{cardInformations.backInfo}</p>
                    <img
                        src={swapSvg}
                        alt="swap"
                        width={30}
                        onClick={cardClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default FlashCard;
