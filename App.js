import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, Image, ImageBackground} from 'react-native';
import { TouchableOpacity} from 'react-native';

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [meowIn, setMeowIn] = useState(false);
    const [quotes, setQuotes] = useState([
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
        "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't. - Rikki Rogers",
        "You are braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne",
        "Your present circumstances don't determine where you can go; they merely determine where you start. - Nido Qubein",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "You are enough just as you are. - Meghan Markle",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Difficult roads often lead to beautiful destinations.",
        "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
        "Don't wait for the perfect moment. Take the moment and make it perfect.",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "You are the only one who can limit your greatness.",
        "Fall seven times, stand up eight. - Japanese Proverb",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
        "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "You are stronger than you know, braver than you believe, and smarter than you think. - Christopher Robin",
        "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
        "The comeback is always stronger than the setback.",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
        "You are confined only by the walls you build yourself.",
        "Self-care is giving the world the best of you, instead of what's left of you.",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
        "Your mental health is more important than the test, the interview, the lunch date, the meeting, the family dinner, and the grocery-run.",
        "Every day may not be good, but there's something good in every day.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    ]);
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };
    const handleLogin = () => {
        if (username.length > 3 && password.length > 8) {
            setLoggedIn(true);
            Alert.alert('Logged in successfully!');
        } else {
            Alert.alert('Please enter username and password.');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground>
                {loggedIn ? (
                    <HomePage
                        username={username}
                        currentQuote={currentQuote}
                        changeQuote={changeQuote}
                    />
                ) : (
                    <View>
                        <Image
                            style={styles.image}
                            source={require('C:\\Code\\Health2\\assets\\Adobe_Express_20240309_0036590_1.png')}
                        />
                        <TextInput
                            style={styles.input}
                            textAlign={"center"}
                            placeholder="Username"
                            placeholderTextColor='grey'
                            value={username}
                            onChangeText={setUsername}
                        />
                        <TextInput
                            style={styles.input}
                            textAlign={"center"}
                            placeholder="Password"
                            placeholderTextColor='grey'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <LoginButton title="Login" onPress={handleLogin} />
                    </View>
                )}
            </ImageBackground>
        </View>
    );
}

function HomePage({ username, currentQuote, changeQuote }) {
    const handleChat = () => {
        if (setMeowIn=false) {
            setMeowIn(true);
            Alert.alert('Logged in successfully!');
        } else {
            Alert.alert('Please enter username and password.');
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <Image
                    style={styles.userIcon}
                    source={require('C:\\Code\\Health2\\assets\\user-icon.png')}
                />
                <Image
                    style={styles.logo}
                    source={require('C:\\Code\\Health2\\assets\\Adobe_Express_20240309_0036590_1.png')}
                />

            </View>
            {/*<Image*/}
            {/*    style={styles.centeredImage}*/}
            {/*    source={require('C:\\Code\\Health2\\assets\\Adobe_Express_20240308_2347100_1.png')}*/}
            {/*/>*/}
            <View style={styles.quotecontainer}>
                <Text style={styles.quote}>{currentQuote}</Text>
                <QuoteButton title="Change Quote" onPress={changeQuote} />
                <ChatButton title="Meow" onPress={handleChat}
                />
            </View>
        </View>
    )
}

const ImageButton = ({ onPress, source }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={source} style={{ width: 100, height: 100 }} />
        </TouchableOpacity>
    );
};

const LoginButton = ({ onPress, title }) => {
    return (
        <View style={styles.containerbutton}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const QuoteButton = ({ onPress, title }) => {
    return (
        <View style={styles.containerbutton}>
            <TouchableOpacity style={styles.buttonquote} onPress={onPress}>
                <Text style={styles.buttonTextquote}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};
const ChatButton = ({ onPress, title }) => {
    return (
        <View style={styles.containerbuttonchat}>
            <TouchableOpacity style={styles.chatbuttonstyle} onPress={onPress}>
                <Text style={styles.buttonquote}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {//login page
        flex: 1,
        backgroundColor: '#260235',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    container2: {//homepage
        flex: 0.1,
        backgroundColor: 'black',
    },
    input: {//username & password
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom:10,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
    },
    image: {//logo login page
        height: 100,
        width: 200,
        marginBottom: 50,
        marginLeft:7,
    },
    containerbutton: {//login button
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:15,
    },
    containerbuttonchat: {//login button
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:5,
    },
    button: {//login button
        backgroundColor: 'darkgrey',
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 5,
    },
    buttonText: {//login button
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonTextquote: {//login button
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    buttonquote: {//login button
        backgroundColor: 'darkgrey',
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 5,
    },
    logo: {//icon top left corner
        position: 'absolute',
        top: -50,
        left: -180,
        width: 70,
        height: 40,
    },
    userIcon: {//icon top right corner
        position: 'absolute',
        top: -50,
        right: -180,
        width: 40,
        height: 40,
    },
    centeredImage: {//style for api with steps
        width: 200,
        height: 200,
    },
    quotecontainer: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quote: {
        margin: 10,
        color: 'grey',
        fontSize: 20,
        textAlign: 'center',
    },
    boxContainer:{
        height:200,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    chatbuttonstyle: {
        marginBottom: 100,
        textAlign: 'left',
    }
});