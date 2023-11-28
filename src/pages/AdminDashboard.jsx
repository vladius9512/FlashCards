import { useState } from "react";
import FlashCardInputForm from "../components/FlashCardInputForm";
import database from "../utils/Firebase";
import { ref, set, child, push } from "firebase/database";

const AdminDashboard = () => {
    const [name, setName] = useState("");
    const [keywords, setKeywords] = useState("");
    const [frontInfo, setFrontInfo] = useState("");
    const [backInfo, setBackInfo] = useState("");
    const [category, setCategory] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleKeywordsChange = (e) => {
        setKeywords(e.target.value);
    };

    const handleFrontInfoChange = (e) => {
        setFrontInfo(e.target.value);
    };

    const handleBackInfoChange = (e) => {
        setBackInfo(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const pushToDatabase = (name, keywords, frontInfo, backInfo, category) => {
        const newKey = push(child(ref(database), "flashCards")).key;
        set(ref(database, `flashCards/${newKey}`), {
            name: name,
            keywords: keywords,
            frontInfo: frontInfo,
            backInfo: backInfo,
            category: category,
        }).catch(alert);
    };
    return (
        <>
            <FlashCardInputForm
                name={name}
                keywords={keywords}
                frontInfo={frontInfo}
                backInfo={backInfo}
                category={category}
                pushToDatabase={pushToDatabase}
                handleBackInfoChange={handleBackInfoChange}
                handleCategoryChange={handleCategoryChange}
                handleFrontInfoChange={handleFrontInfoChange}
                handleKeywordsChange={handleKeywordsChange}
                handleNameChange={handleNameChange}
            />
        </>
    );
};

export default AdminDashboard;
