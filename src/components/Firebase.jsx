// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConnection = () => {
    

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    function writeUserData(userId, name, email, imageUrl) {
        set(ref(database, "users/" + userId), {
            username: name,
            email: email,
            profile_picture: imageUrl,
        });
    }

    const handleClick = (e) => {
        writeUserData(123, "abc", "test@mail", "D:/images");
        console.log("face ceva");
    };
    const analytics = getAnalytics(app);
    return (
        <>
            <button onClick={handleClick}>Apasa</button>
        </>
    );
};

export default firebaseConnection;
