// translations.js

const translations = {
    en: {
        title: "Welcome to the Game Where You Will Learn English!",
        description: "Improve your English in a fun and interactive way. Select a level and start practicing!",
        startButton: "Start",
        popupTitle: "Select Your Level",
        levelA1: {
            title: "Level A1",
            description: "Welcome to the A1 level! Let's start learning some basic English.",
            popupTitle: "Level A1 Description",
            levelDescription: "This level covers basic English topics. You'll learn greetings, introductions, and essential vocabulary.",
            buttonText: "A1"
        },
        levelA2: {
            title: "Level A2",
            description: "Welcome to the A2 level! Let's improve your English skills.",
            popupTitle: "Level A2 Description",
            levelDescription: "This level covers more complex topics. You'll expand your vocabulary and improve your grammar.",
            buttonText: "A2"
        },
        levelB1: {
            title: "Level B1",
            description: "Welcome to the B1 level! Prepare to engage in more conversations in English.",
            popupTitle: "Level B1 Description",
            levelDescription: "This level focuses on intermediate English. You'll improve your reading, writing, and speaking skills.",
            buttonText: "B1"
        },
        levelB2: {
            title: "Level B2",
            description: "Welcome to the B2 level! Let's enhance your communication in English.",
            popupTitle: "Level B2 Description",
            levelDescription: "At this level, you will learn advanced English grammar and vocabulary.",
            buttonText: "B2"
        },
        levelC1: {
            title: "Level C1",
            description: "Welcome to the C1 level! Let's work on your proficiency in English.",
            popupTitle: "Level C1 Description",
            levelDescription: "This level covers advanced topics and helps you refine your speaking and writing skills.",
            buttonText: "C1"
        },
        levelC2: {
            title: "Level C2",
            description: "Welcome to the C2 level! Master English at the highest level.",
            popupTitle: "Level C2 Description",
            levelDescription: "This level is for near-native proficiency, helping you become fluent in all aspects of English.",
            buttonText: "C2"
        }
    },
    es: {
        title: "¡Bienvenido al Juego Donde Aprenderás Inglés!",
        description: "Mejora tu inglés de una manera divertida e interactiva. ¡Selecciona un nivel y comienza a practicar!",
        startButton: "Comenzar",
        popupTitle: "Selecciona Tu Nivel",
        levelA1: {
            title: "Nivel A1",
            description: "¡Bienvenido al nivel A1! Comencemos a aprender inglés básico.",
            popupTitle: "Descripción del Nivel A1",
            levelDescription: "Este nivel cubre temas básicos de inglés. Aprenderás saludos, presentaciones y vocabulario esencial.",
            buttonText: "A1"
        },
        levelA2: {
            title: "Nivel A2",
            description: "¡Bienvenido al nivel A2! Mejoremos tus habilidades en inglés.",
            popupTitle: "Descripción del Nivel A2",
            levelDescription: "Este nivel cubre temas más complejos. Expandirás tu vocabulario y mejorarás tu gramática.",
            buttonText: "A2"
        },
        levelB1: {
            title: "Nivel B1",
            description: "¡Bienvenido al nivel B1! Prepárate para participar más en conversaciones en inglés.",
            popupTitle: "Descripción del Nivel B1",
            levelDescription: "Este nivel se centra en inglés intermedio. Mejorarás tus habilidades de lectura, escritura y expresión oral.",
            buttonText: "B1"
        },
        levelB2: {
            title: "Nivel B2",
            description: "¡Bienvenido al nivel B2! Mejoraremos tu comunicación en inglés.",
            popupTitle: "Descripción del Nivel B2",
            levelDescription: "En este nivel, aprenderás gramática y vocabulario avanzado en inglés.",
            buttonText: "B2"
        },
        levelC1: {
            title: "Nivel C1",
            description: "¡Bienvenido al nivel C1! Trabajemos en tu dominio del inglés.",
            popupTitle: "Descripción del Nivel C1",
            levelDescription: "Este nivel cubre temas avanzados y te ayuda a perfeccionar tus habilidades orales y escritas.",
            buttonText: "C1"
        },
        levelC2: {
            title: "Nivel C2",
            description: "¡Bienvenido al nivel C2! Domina el inglés al más alto nivel.",
            popupTitle: "Descripción del Nivel C2",
            levelDescription: "Este nivel está orientado a un dominio casi nativo, ayudándote a ser fluido en todos los aspectos del inglés.",
            buttonText: "C2"
        }
    }
};

// Default language
let currentLanguage = 'en'; // Default language is English

// Function to change the language of the page content
function changeLanguage(lang) {
    currentLanguage = lang;

    // Update all text content based on the selected language
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('description').textContent = translations[lang].description;
    document.getElementById('start-button').textContent = translations[lang].startButton;
    document.getElementById('popup-title').textContent = translations[lang].popupTitle;

    // Update the buttons for level selection
    document.getElementById('levelA1').textContent = translations[lang].levelA1.buttonText;
    document.getElementById('levelA2').textContent = translations[lang].levelA2.buttonText;
    document.getElementById('levelB1').textContent = translations[lang].levelB1.buttonText;
    document.getElementById('levelB2').textContent = translations[lang].levelB2.buttonText;
    document.getElementById('levelC1').textContent = translations[lang].levelC1.buttonText;
    document.getElementById('levelC2').textContent = translations[lang].levelC2.buttonText;
    
    // Update the level content if on a level page
    if (document.getElementById('level-description')) {
        document.getElementById('level-description').textContent = translations[lang].levelA1.levelDescription;
        document.getElementById('title').textContent = translations[lang].levelA1.title;
        document.getElementById('popup-title').textContent = translations[lang].levelA1.popupTitle;
        document.getElementById('description').textContent = translations[lang].levelA1.description;
    }
}
