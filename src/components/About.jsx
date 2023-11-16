import { useParams } from "react-router-dom";
const About = () => {
    const { name } = useParams();
    return (
        <>
            <h1>You made it here! Work still in progress.</h1>
            {name === "more" ? <More /> : <Default />}
        </>
    );
};

export default About;
