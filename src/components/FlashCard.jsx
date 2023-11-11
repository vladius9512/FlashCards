import { useState } from "react";

function FlashCard() {
    const [cardAnswer, setCardAnswer] = useState(false);
    const cardClick = () => {
        setCardAnswer(!cardAnswer);
    };
    return (
        <div className={cardAnswer ? "card-wrapper active" : "card-wrapper"}>
            <div className="card-body">
                <div className="card-front">
                    <p>Care este cel mai frecvent cancer la femei?</p>
                    <svg
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        width={50}
                        onClick={cardClick}
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="matrix(0 1 -1 0 18.5 2.5)"
                            >
                                {" "}
                                <g transform="matrix(0 -1 1 0 .5 16.5)">
                                    {" "}
                                    <path
                                        d="m16 0v5h-5"
                                        transform="matrix(0 1 1 0 11 -11)"
                                    ></path>{" "}
                                    <path d="m16 5c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3"></path>{" "}
                                </g>{" "}
                                <g transform="matrix(0 1 -1 0 14 1)">
                                    {" "}
                                    <path
                                        d="m16 0v5h-5"
                                        transform="matrix(0 1 1 0 11 -11)"
                                    ></path>{" "}
                                    <path d="m16 5c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3"></path>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                    <svg
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        width={100}
                        onClick={cardClick}
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="matrix(0 1 -1 0 18.5 2.5)"
                            >
                                {" "}
                                <g transform="matrix(0 -1 1 0 .5 16.5)">
                                    {" "}
                                    <path
                                        d="m16 0v5h-5"
                                        transform="matrix(0 1 1 0 11 -11)"
                                    ></path>{" "}
                                    <path d="m16 5c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3"></path>{" "}
                                </g>{" "}
                                <g transform="matrix(0 1 -1 0 14 1)">
                                    {" "}
                                    <path
                                        d="m16 0v5h-5"
                                        transform="matrix(0 1 1 0 11 -11)"
                                    ></path>{" "}
                                    <path d="m16 5c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3"></path>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default FlashCard;
