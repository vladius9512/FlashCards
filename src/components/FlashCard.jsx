function FlashCard() {
    return (
        <div className="card-wrapper">
            <div className="card-body">
                <div className="card-front">
                    <p>Care este cel mai frecvent cancer la femei?</p>
                </div>
                <div className="card-back">
                    <div className="svg-wrapper">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={150}
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6 3H8M18 3H16M16 3H8M16 3V8M8 3V8M8 8V17C8 19.2091 9.79086 21 12 21V21C14.2091 21 16 19.2091 16 17V8M8 8H16"
                                    stroke="#000000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                                <path
                                    d="M13.0007 12.0007L13 12"
                                    stroke="#000000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                                <path
                                    d="M11.0007 16.0007L11 16"
                                    stroke="#000000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FlashCard;
