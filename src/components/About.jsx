import { useParams } from "react-router-dom";
import More from "./More";
import DefaultPg from "./DefaultPg";
const About = () => {
    const { name } = useParams();
    return (
        <>
            <h1>You made it here! Work still in progress.</h1>
            {name === "more" ? <More /> : <DefaultPg />}
        </>
    );
};

export default About;
