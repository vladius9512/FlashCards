const FlashCardInputForm = ({
    name,
    keywords,
    frontInfo,
    backInfo,
    category,
    pushToDatabase,
    handleNameChange,
    handleKeywordsChange,
    handleFrontInfoChange,
    handleBackInfoChange,
    handleCategoryChange,
}) => {
    const clickHandler = () => {
        pushToDatabase(
            name,
            keywords.split(" "),
            frontInfo,
            backInfo,
            category.split(" ")
        );
    };
    return (
        <>
            <input
                placeholder="Enter flashcard Name"
                value={name}
                onChange={handleNameChange}
                name="name"
            />
            <input
                placeholder="Enter flashcard keywords"
                value={keywords}
                onChange={handleKeywordsChange}
                name="keywords"
            />
            <input
                placeholder="Enter flashcard front information"
                value={frontInfo}
                onChange={handleFrontInfoChange}
                name="frontInfo"
            />
            <input
                placeholder="Enter flashcard back information"
                value={backInfo}
                onChange={handleBackInfoChange}
                name="backInfo"
            />
            <input
                placeholder="Enter flashcard category"
                value={category}
                onChange={handleCategoryChange}
                name="category"
            />
            <button onClick={clickHandler}>Create FlashCard</button>
        </>
    );
};

export default FlashCardInputForm;
