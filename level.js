// scripts.js
let currentExercise = null; 
let currentExerciseList = []; 
let currentExerciseIndex = 0; 
let exerciseCount = 1; 

function formatExplanation(explanation) {
    return explanation.replace(/\n/g, "<br>"); 
}

function shuffleExercises(exercises) {
    const shuffled = exercises.slice(); 
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Puntos de nivel A1 y sus explicaciones
const levelA1Content = {
    to_be: {
        exercises: [
            { question: "________ a dog in the yard.", correctAnswer: "There is" },
            { question: "________ five apples in the basket.", correctAnswer: "There are" },
            { question: "________ a car outside?", correctAnswer: "Is there" },
            { question: "________ many students in the classroom.", correctAnswer: "There are" },
            { question: "________ milk in the fridge?", correctAnswer: "Is there" },
            { question: "________ a lot of traffic today.", correctAnswer: "There is" },
            { question: "________ some interesting places to visit here.", correctAnswer: "There are" },
            { question: "________ a cat under the chair.", correctAnswer: "There is" },
            { question: "________ three options to choose from.", correctAnswer: "There are" },
            { question: "________ enough time to finish?", correctAnswer: "Is there" },
            { question: "________ a problem with the computer.", correctAnswer: "There is" },
            { question: "________ two sandwiches in the bag.", correctAnswer: "There are" },
            { question: "________ anyone at home?", correctAnswer: "Is there" },
            { question: "________ only one chair available.", correctAnswer: "There is" },
            { question: "________ lots of birds in the trees.", correctAnswer: "There are" },
            { question: "________ an error in the code?", correctAnswer: "Is there" },
            { question: "________ enough chairs for everyone.", correctAnswer: "There are" },
            { question: "________ a solution to this problem.", correctAnswer: "There is" },
            { question: "________ any shops open?", correctAnswer: "Are there" },
            { question: "________ two cars in the garage.", correctAnswer: "There are" },
            { question: "________ a bus stop nearby.", correctAnswer: "There is" },
            { question: "________ any questions?", correctAnswer: "Are there" },
            { question: "________ too much noise here.", correctAnswer: "There is" },
            { question: "________ several things I need to buy.", correctAnswer: "There are" },
            { question: "________ a chance to win?", correctAnswer: "Is there" },
            { question: "________ water in the bottle.", correctAnswer: "There is" },
            { question: "________ too many people in the room.", correctAnswer: "There are" },
            { question: "________ a strange noise outside.", correctAnswer: "There is" },
            { question: "________ four chairs around the table.", correctAnswer: "There are" },
            { question: "________ anyone waiting outside?", correctAnswer: "Is there" },
            { question: "________ a picture on the wall.", correctAnswer: "There is" },
            { question: "________ a few errors in the report.", correctAnswer: "There are" },
            { question: "________ time for a quick break?", correctAnswer: "Is there" },
            { question: "________ a spider on the ceiling.", correctAnswer: "There is" },
            { question: "________ two children playing in the yard.", correctAnswer: "There are" },
            { question: "________ enough space in the car?", correctAnswer: "Is there" },
            { question: "________ one more spot available.", correctAnswer: "There is" },
            { question: "________ many parks in this area.", correctAnswer: "There are" },
            { question: "________ a good movie on tonight.", correctAnswer: "There is" },
            { question: "________ three cups on the table.", correctAnswer: "There are" },
            { question: "________ someone knocking on the door?", correctAnswer: "Is there" },
            { question: "________ a new teacher this year.", correctAnswer: "There is" },
            { question: "________ several books on the shelf.", correctAnswer: "There are" },
            { question: "________ an emergency?", correctAnswer: "Is there" },
            { question: "________ some mistakes in the document.", correctAnswer: "There are" },
            { question: "________ an old photo in the album.", correctAnswer: "There is" },
            { question: "________ many different colors to choose from.", correctAnswer: "There are" },
            { question: "________ a phone on the desk.", correctAnswer: "There is" },
            { question: "________ a couple of reasons to be careful.", correctAnswer: "There are" },
            { question: "________ a plan for tomorrow?", correctAnswer: "Is there" },
            { question: "________ a pen in your bag?", correctAnswer: "Is there" }
        ]
    },
    present_continuous: {
        exercises: [
            { question: "Translate 'three' to English", correctAnswer: "Three" },
            { question: "Translate 'five' to English", correctAnswer: "Five" },
            { question: "Translate 'ten' to English", correctAnswer: "Ten" }
        ]
    },
    articles: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    prepositions_: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    wh_questions: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    much_vs_many: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    some_vs_any: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    since_vs_for: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    do_vs_make: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    will_vs_going_to: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    comparatives_and_superlatives: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    a_vs_an: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    prepositions_of_place: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    can_vs_could: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    few_vs_little: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    too_vs_enough: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    somebody_vs_anybody: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    definite_and_indefinite_articles: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    personal_pronouns: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    to_be_and_to_have: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },

    //A2
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },
    irregular_plurals: {
        exercises: [
            { question: "How do you say 'madre' in English?", correctAnswer: "Mother" },
            { question: "How do you say 'padre' in English?", correctAnswer: "Father" },
            { question: "How do you say 'hermano' in English?", correctAnswer: "Brother" }
        ]
    },

    
};

// Muestra la explicación de un punto
// Objeto para manejar las traducciones (ejemplo básico)
const translations = {
    to_be: {
        en: "The verb 'to be' is used to describe states or characteristics.\n It changes based on the subject:I am, You are, He/She/It is, We are, They are.\n For example: 'I am a teacher'",
        es: "El verbo 'ser' se utiliza para describir estados o características.\n Cambia según el sujeto: Yo soy, Tú eres, Él/Ella/Eso es, Nosotros somos, Ellos son.\n Por ejemplo: 'Yo soy profesor'"
    },
    present_continuous: {
        en: "The present continuous tense is used to describe actions happening at the moment of speaking or ongoing actions.\n\n It is formed with the present tense of 'to be' (am/is/are) + the base verb + -ing. \n This tense is often accompanied by time expressions like right now, at the moment, or currently.\n\nExamples:\n - I am eating (Yo estoy comiendo).\n - She is reading a book (Ella está leyendo un libro).\n - They are playing football (Ellos están jugando al fútbol).",
        es: "El presente continuo se usa para describir acciones que están ocurriendo en este momento o que son continuas. \n\n Se forma con el presente del verbo 'to be' (am/is/are) + el verbo base + -ing. \nEste tiempo se usa a menudo con expresiones de tiempo como ahora mismo, en este momento o actualmente.\n\nEjemplos: \n- Yo estoy comiendo (I am eating). \n- Ella está leyendo un libro (She is reading a book). \n- Ellos están jugando al fútbol (They are playing football).'."
    },
    articles: {
        en: `A is used with consonant sounds, an with vowel sounds, and the is used for specific things or previously mentioned items. 
        
        - A is used before words that start with a consonant sound (e.g., "a dog," "a car").
        - An is used before words that start with a vowel sound (e.g., "an apple," "an hour").
        - The is used for specific nouns or things that both the speaker and listener are familiar with (e.g., "the book on the table").

        Examples:
        - I have a dog. (Tengo un perro.)
        - She bought an umbrella. (Ella compró un paraguas.)
        - The movie we saw was great. (La película que vimos fue genial.)`,
        
        es: `'A' se usa con palabras que comienzan con sonido de consonante, 'an' con sonidos de vocal, y 'the' se usa para cosas específicas o ya mencionadas. 

        - 'A' se usa antes de palabras que comienzan con sonido de consonante (ej., "a dog" = un perro, "a car" = un coche).
        - 'An' se usa antes de palabras que comienzan con sonido de vocal (ej., "an apple" = una manzana, "an hour" = una hora).
        - 'The' se usa para sustantivos específicos o cosas que tanto el hablante como el oyente conocen (ej., "the book on the table" = el libro en la mesa).
        
        Ejemplos:
        - I have a dog. (Tengo un perro.)
        - She bought an umbrella. (Ella compró un paraguas.)
        - The movie we saw was great. (La película que vimos fue genial.)`
    },
    prepositions_: {
        en: `Prepositions of place indicate where something is located in relation to other objects. 

        Some common prepositions are:

        - 'in': used when something is inside (e.g., "The keys are in the drawer").

        - 'on': used when something is on top of a surface (e.g., "The book is on the table").

        - 'under': used when something is below something else (e.g., "The cat is under the chair").

        - 'next to': used for something beside or close to something else (e.g., "She is sitting next to her friend").
        
        - 'behind': used when something is at the back of something else (e.g., "The car is behind the building").
        
        Examples:
        - The cat is on the chair. (El gato está sobre la silla.)
        - The book is in the backpack. (El libro está en la mochila.)`,
        
        es: `Las preposiciones de lugar indican dónde está algo en relación con otros objetos.
        Algunas comunes son:

        - 'in': se usa cuando algo está dentro de algo (ej., "The keys are in the drawer" = "Las llaves están en el cajón").

        - 'on': se usa cuando algo está sobre una superficie (ej., "The book is on the table" = "El libro está sobre la mesa").

        - 'under': se usa cuando algo está debajo de otra cosa (ej., "The cat is under the chair" = "El gato está debajo de la silla").

        - 'next to': se usa cuando algo está al lado de otra cosa (ej., "She is sitting next to her friend" = "Ella está sentada junto a su amiga").

        - 'behind': se usa cuando algo está detrás de otra cosa (ej., "The car is behind the building" = "El coche está detrás del edificio").
        
        Ejemplos:
        - The cat is on the chair. (El gato está sobre la silla.)
        - The book is in the backpack. (El libro está en la mochila.)`
    },
    wh_questions: {
        en: `'Wh-questions' are used to ask for specific information and often start with question words beginning with 'Wh'. Common 'Wh' words include:

        - 'What': used to ask about things or information (e.g., "What is your favorite color?").
        - 'Where': used to ask about places or locations (e.g., "Where do you live?").
        - 'When': used to ask about time (e.g., "When is the meeting?").
        - 'Who': used to ask about people (e.g., "Who is your teacher?").
        - 'Why': used to ask about reasons or causes (e.g., "Why are you late?").
        
        Examples:
        - "Where are you going?"
        - "What time is it?"
        - "Who is that person?"`,
        
        es: `Las preguntas 'Wh-' se usan para pedir información específica y suelen comenzar con palabras interrogativas que empiezan con 'Wh'. Algunas comunes son:

        - 'What': se usa para preguntar sobre cosas o información (ej., ¿Cuál es tu color favorito?).
        - 'Where': se usa para preguntar sobre lugares o ubicaciones (ej., ¿Dónde vives?).
        - 'When': se usa para preguntar sobre el tiempo (ej., ¿Cuándo es la reunión?).
        - 'Who': se usa para preguntar sobre personas (ej., ¿Quién es tu profesor?).
        - 'Why': se usa para preguntar sobre razones o causas (ej., ¿Por qué llegas tarde?).
        
        Ejemplos:
        - "Where are you going?" (¿A dónde vas?)
        - "What time is it?" (¿Qué hora es?)
        - "Who is that person?" (¿Quién es esa persona?)`
    },
    
    much_vs_many: {
        en: `'Much' is used with uncountable nouns, which are things that cannot be counted individually (e.g. water, time, sand).
        'Many' is used with countable nouns, which are things that can be counted individually (e.g. apples, books, cars).
        
        Examples:
        - How much water is in the glass? (Uncountable noun: water)
        - How many apples do you have? (Countable noun: apples)
        
        It is important to remember that some nouns can be both countable and uncountable depending on the context:
        - "I have much fun" (uncountable noun - referring to enjoyment, not a specific number).
        - "I have many friends" (countable noun - referring to individual people).`,
        
        es: `'Much' se usa con sustantivos incontables, que son cosas que no se pueden contar individualmente (ej. agua, tiempo, arena).
        'Many' se usa con sustantivos contables, que son cosas que se pueden contar individualmente (ej. manzanas, libros, coches).
        
        Ejemplos:
        - How much water is in the glass? (Sustantivo incontable: agua)
        - How many apples do you have? (Sustantivo contable: manzanas)
        
        Es importante recordar que algunos sustantivos pueden ser tanto contables como incontables dependiendo del contexto:
        - "I have much fun" (sustantivo incontable - refiriéndose a disfrute, no a un número específico).
        - "I have many friends" (sustantivo contable - refiriéndose a personas individuales).`
    },

    some_vs_any: {
        en: `'Some' is used in affirmative sentences, especially with uncountable nouns or to offer/ask for something.
        Example: 
        I have some money. 
        Would you like some water?

        'Any' is used in negative sentences and in general questions, particularly when we don't know if the answer will be yes or no.
        Example:
        I don’t have any money. 
        Do you have any questions?

        It is important to note that 'some' can also be used in questions when offering or requesting something:
        - Would you like some tea? (Here, 'some' is used in a question offering something.)

        **Remember**:
        - 'Some' = affirmative or offer/request
        - 'Any' = negative or general question`,

        es: `'Some' se usa en oraciones afirmativas, especialmente con sustantivos incontables o para ofrecer/pedir algo.
        Ejemplo: 
        I have some money.  (Tengo algo de dinero.) 
        Would you like some water?  (¿Te gustaría algo de agua?)

        'Any' se usa en oraciones negativas y en preguntas generales, particularmente cuando no sabemos si la respuesta será sí o no.
        Ejemplo:
        I don’t have any money.  (No tengo dinero. )
        Do you have any questions?   (¿Tienes alguna pregunta?)

        Es importante notar que 'some' también puede usarse en preguntas cuando se ofrece o se solicita algo:
        - Would you like some tea? (Aquí, 'some' se usa en una pregunta ofreciendo algo.)

        **Recuerda**:
        - 'Some' = afirmativa o ofrecer/pedir
        - 'Any' = negativa o pregunta general`
    },
    since_vs_for: {
        en: `'Since' is used for a specific point in time (e.g. a year, a day), and 'for' is used for a period of time (e.g. days, months, years).

        Examples:
        - Since: I’ve lived here since 2010. (specific point in time)
        - For: She has worked in this company for five years. (period of time)

        **Note**:
        - 'Since' is followed by a specific time or date (e.g. since Monday, since 1999).
        - 'For' is followed by a duration or period of time (e.g. for two hours, for five years).

        **Remember**:
        - 'Since' = specific point in time
        - 'For' = period of time`,

        es: `'Since' se usa para un momento específico en el tiempo (por ejemplo, un año, un día), y 'for' se usa para un período de tiempo (por ejemplo, días, meses, años).

        Ejemplos:
        - Since: Vivo aquí desde 2010. (punto específico en el tiempo)
        - For: Ella ha trabajado en esta empresa durante cinco años. (período de tiempo)

        **Nota**:
        - 'Since' va seguido de un tiempo o fecha específicos (por ejemplo, desde el lunes, desde 1999).
        - 'For' va seguido de una duración o período de tiempo (por ejemplo, durante dos horas, durante cinco años).

        **Recuerda**:
        - 'Since' = punto específico en el tiempo
        - 'For' = período de tiempo`
    },

    do_vs_make: {
        en: `'Do' is used for activities, tasks, and work that doesn't result in a physical object. 
        'Make' is used for creating, producing, or building something, typically something physical or tangible.

        Examples:
        - Do: I need to do my homework. (activities or tasks)
        - Make: She is going to make a cake. (creating or producing something)

        **Note**:
        - 'Do' is often used with tasks, work, or actions that are non-specific.
        - 'Make' is used when producing something tangible or specific.

        **Remember**:
        - 'Do' = doing an activity or task
        - 'Make' = creating or making something tangible`,

        es: `'Do' se utiliza para actividades, tareas y trabajos que no resultan en un objeto físico.
        'Make' se utiliza para crear, producir o construir algo, generalmente algo físico o tangible.

        Ejemplos:
        - Do: Necesito hacer mi tarea. (actividades o tareas)
        - Make: Ella va a hacer un pastel. (crear o producir algo)

        **Nota**:
        - 'Do' se usa a menudo con tareas, trabajos o acciones que no son específicas.
        - 'Make' se usa cuando se produce algo tangible o específico.

        **Recuerda**:
        - 'Do' = hacer una actividad o tarea
        - 'Make' = hacer o crear algo tangible`
    },
    will_vs_going_to: {
        en: `'Will' is used for spontaneous decisions, promises, or predictions based on feelings or beliefs.
        
        Example: I will help you with your homework. (spontaneous decision)

        'Going to' is used for planned actions or intentions, often when you already have decided to do something. 
        Example: I am going to visit my grandmother tomorrow. (planned action)

        **Remember**:
        - 'Will' = for spontaneous decisions, promises, or predictions.
        - 'Going to' = for planned actions or intentions.

        **Note**:
        'Will' is used for situations where no prior decision has been made, and the decision is made at the moment of speaking.
        'Going to' is used when there is already an intention or plan to do something.`,

        es: `'Will' se utiliza para decisiones espontáneas, promesas o predicciones basadas en sentimientos o creencias.

        Ejemplo: Ayudaré con tu tarea. (decisión espontánea)

        'Going to' se utiliza para acciones planeadas o intenciones, cuando ya has decidido hacer algo.
        Ejemplo: Voy a visitar a mi abuela mañana. (acción planeada)

        **Recuerda**:
        - 'Will' = para decisiones espontáneas, promesas o predicciones.
        - 'Going to' = para acciones planeadas o intenciones.

        **Nota**:
        'Will' se usa para situaciones en las que no has tomado una decisión previamente, sino que la tomas en el momento de hablar.
        'Going to' se usa cuando ya tienes la intención o plan para hacer algo.`
    },
    comparatives_and_superlatives: {
        en: `Comparatives are used to compare two things. They are formed by adding "-er" to the adjective or using "more" or "less" for longer adjectives.

        Example: John is taller than Mark. (taller is the comparative of tall)

        Superlatives are used to talk about the most or the least in a group. They are formed by adding "-est" to the adjective or using "most" or "least" for longer adjectives.
        Example: John is the tallest person in the class. (tallest is the superlative of tall)

        **Remember**:
        - Comparative: Used to compare two things. Example: taller, faster.
        - Superlative: Used to talk about the most or the least in a group. Example: the tallest, the fastest.

        **Rules**:
        - Short adjectives (one syllable): add "-er" (tall → taller).
        - Long adjectives (two or more syllables): use "more" or "less" (beautiful → more beautiful).
        - Superlative: add "-est" or use "most" or "least" depending on the length of the adjective.`,

        es: `Los comparativos se usan para comparar dos cosas. Se forman añadiendo "-er" al adjetivo o utilizando "more" o "less" para adjetivos más largos.

        Ejemplo: John es más alto que Mark. ("taller" es el comparativo de "tall").

        Los superlativos se usan para hablar sobre lo más o lo menos en un grupo. Se forman añadiendo "-est" al adjetivo o utilizando "most" o "least" para adjetivos más largos.
        Ejemplo: John es la persona más alta de la clase. ("tallest" es el superlativo de "tall").

        **Recuerda**:
        - Comparativo: Para comparar dos cosas. Ejemplo: más alto, más rápido.
        - Superlativo: Para hablar de lo más o lo menos en un grupo. Ejemplo: el más alto, el más rápido.

        **Reglas**:
        - Adjetivos cortos (con una sílaba): añadir "-er" (tall → taller).
        - Adjetivos largos (con dos o más sílabas): usar "more" o "less" (beautiful → more beautiful).
        - Superlativo: añadir "-est" o usar "most" o "least" dependiendo de la longitud del adjetivo.`
    },

    a_vs_an: {
        en: `'A' is used before words that start with a consonant sound (e.g., a car, a book).
        'An' is used before words that start with a vowel sound (e.g., an apple, an hour).

        **Note**: It is not about the letter itself, but about the sound. For example:
        - 'a university' (university begins with a "ju" sound, a consonant sound),
        - 'an hour' (hour begins with an "aw" sound, a vowel sound).

        **Remember**:
        - 'A' is used before words that begin with a consonant sound.
        - 'An' is used before words that begin with a vowel sound.`,

        es: `'A' se usa antes de palabras que comienzan con un sonido consonante (por ejemplo, a car, a book).
        'An' se usa antes de palabras que comienzan con un sonido vocal (por ejemplo, an apple, an hour).

        **Nota**: No se trata de la letra en sí, sino del sonido. Por ejemplo:
        - 'a university' (university comienza con un sonido "ju", que es un sonido consonante),
        - 'an hour' (hour comienza con un sonido "aw", que es un sonido vocal).

        **Recuerda**:
        - 'A' se usa cuando la palabra siguiente comienza con un sonido consonante.
        - 'An' se usa cuando la palabra siguiente comienza con un sonido vocal.`
    },

    prepositions_of_place: {
        en: `'In' is used for large spaces (countries, cities, rooms), 
        'On' is used for surfaces (tables, walls), and 'At' is used for specific places (addresses, events).

        **Remember**:
        - 'In' is used for large places or areas.
        - 'On' is used for surfaces.
        - 'At' is used for specific places or events at a particular point.

        **Examples**:
        - 'In' example: I live **in** Spain.
        - 'On' example: The book is **on** the table.
        - 'At' example: I will meet you **at** the park.`,

        es: `'In' se utiliza para espacios grandes (países, ciudades, habitaciones).
        'On' se utiliza para superficies (mesas, paredes).
        'At' se utiliza para lugares específicos (direcciones, eventos).

        **Recuerda**:
        - 'In' se usa cuando hablamos de lugares grandes o áreas.
        - 'On' se usa para indicar algo sobre una superficie.
        - 'At' se usa cuando nos referimos a un lugar específico o un evento en un punto determinado.

        **Ejemplos**:
        - Ejemplo de 'In': Vivo **en** España.
        - Ejemplo de 'On': El libro está **sobre** la mesa.
        - Ejemplo de 'At': Te encontraré **en** el parque.`
    },

    can_vs_could: {
        en: `'Can' is used for present ability or permission, 
        while 'Could' is used for past ability or to make polite requests.

        **Remember**:
        - 'Can' is used to talk about present abilities or permissions.
        - 'Could' is used to refer to past abilities or make requests more politely.

        **Examples**:
        - 'Can' example: I **can** swim.
        - 'Could' example: I **could** swim when I was younger.

        **Polite Requests**:
        - 'Could' is often used to make requests more polite: 
        "Could you help me?"`,

        es: `'Can' se utiliza para hablar de habilidades o permisos en el presente.
        'Could' se usa para hablar de habilidades en el pasado o para hacer solicitudes educadas.

        **Recuerda**:
        - 'Can' se usa para hablar de lo que podemos hacer en este momento o cuando tenemos permiso para hacerlo.
        - 'Could' se utiliza para referirse a habilidades pasadas o para hacer solicitudes de manera más educada.

        **Ejemplos**:
        - Ejemplo de 'Can': Yo **puedo** nadar.
        - Ejemplo de 'Could': Yo **podía** nadar cuando era más joven.

        **Solicitudes Educadas**:
        - 'Could' se usa a menudo para hacer solicitudes más educadas: 
        "¿Podrías ayudarme?"`
    },
    few_vs_little: {
        en: `'Few' is used with countable nouns (e.g., people, books), and 'Little' is used with uncountable nouns (e.g., water, time).

        **Key difference**:
        - Use 'few' when talking about things you can count.
        - Use 'little' when talking about things you cannot count.

        **Examples**:
        - 'Few' example: I have **few** friends.
        - 'Little' example: There is **little** milk.`,

        es: `'Few' se utiliza con sustantivos contables (como personas, libros) para hablar de una cantidad pequeña pero contable.
        'Little' se utiliza con sustantivos incontables (como agua, tiempo) para hablar de una pequeña cantidad que no se puede contar.

        **Diferencia clave**:
        - Usa 'few' cuando hables de cosas que puedes contar.
        - Usa 'little' cuando hables de cosas que no puedes contar.

        **Ejemplos**:
        - Ejemplo de 'Few': Tengo **pocos** amigos.
        - Ejemplo de 'Little': Hay **poca** leche.`
    },

    too_vs_enough: {
        en: `'Too' means "more than necessary" and is used for excessive amounts, 
        while 'Enough' means "sufficient" and is used when something is adequate.

        **Key difference**:
        - Use 'too' to indicate that something exceeds a limit or is excessive.
        - Use 'enough' to show that something is adequate or sufficient.

        **Examples**:
        - 'Too' example: The coffee is **too** hot to drink.
        - 'Enough' example: I don’t have **enough** time to finish the project.`,

        es: `'Too' significa "más de lo necesario" y se usa para cantidades excesivas.
        'Enough' significa "suficiente" y se utiliza cuando algo es adecuado o suficiente.

        **Diferencia clave**:
        - Usa 'too' para indicar que algo excede un límite o es excesivo.
        - Usa 'enough' para mostrar que algo es adecuado o suficiente.

        **Ejemplos**:
        - Ejemplo de 'Too': El café está **demasiado** caliente para beberlo.
        - Ejemplo de 'Enough': No tengo **suficiente** tiempo para terminar el proyecto.`
    },
    somebody_vs_anybody: {
        en: `'Somebody' is used in affirmative sentences, offers, or requests, 
        and 'Anybody' is used in questions and negative sentences.

        **Key difference**:
        - Use 'somebody' in positive sentences, offers, or requests when referring to an unknown person.
        - Use 'anybody' in questions or negative sentences when referring to any person, without specifying anyone in particular.

        **Examples**:
        - 'Somebody' example: **Somebody** is knocking at the door.
        - 'Anybody' example: Is there **anybody** who can help me with my homework?`,

        es: `'Somebody' se utiliza en oraciones afirmativas, ofertas o peticiones, 
        y 'Anybody' se usa en preguntas y oraciones negativas.

        **Diferencia clave**:
        - Usa 'somebody' en oraciones afirmativas, ofertas o peticiones cuando te refieres a una persona desconocida.
        - Usa 'anybody' en preguntas o oraciones negativas cuando te refieres a cualquier persona, sin especificar a alguien en particular.

        **Ejemplos**:
        - Ejemplo de 'Somebody': **Alguien** está tocando la puerta.
        - Ejemplo de 'Anybody': ¿Hay **alguien** que pueda ayudarme con mi tarea?`
    },

    definite_and_indefinite_articles: {
        en: `'The' is used for specific or known things, while 'a' and 'an' are used for general or non-specific things. 
        - 'The' is used when referring to something specific or something that has already been mentioned or is understood.
        - 'A' and 'an' are used for non-specific items, where the speaker is not referring to any particular thing.

        **Key difference**:
        - 'A' is used before words that begin with a consonant sound.
        - 'An' is used before words that begin with a vowel sound.

        **Examples**:
        - 'The' example: **The** book on the table is mine.
        - 'A' example: I saw **a** cat in the garden.
        - 'An' example: I want **an** orange for breakfast.`,

        es: `'The' se utiliza para cosas específicas o conocidas, mientras que 'a' y 'an' se utilizan para cosas generales o no específicas. 
        - 'The' se utiliza cuando nos referimos a algo específico o algo que ya ha sido mencionado o es entendido.
        - 'A' y 'an' se utilizan para elementos no específicos, donde el hablante no se refiere a ninguna cosa en particular.

        **Diferencia clave**:
        - 'A' se usa antes de palabras que comienzan con un sonido consonántico.
        - 'An' se usa antes de palabras que comienzan con un sonido vocal.

        **Ejemplos**:
        - Ejemplo de 'The': **The** libro sobre la mesa es mío.
        - Ejemplo de 'A': Vi **un** gato en el jardín.
        - Ejemplo de 'An': Quiero **una** naranja para el desayuno.`
    },

    personal_pronouns: {
        en: `Personal pronouns refer to people or things. 'I' refers to the speaker, 
        'you' refers to the person spoken to, and 'he', 'she', 'it' refer to third persons or things.

        **Personal pronouns** are used to avoid repetition and make sentences more fluid. Here's a breakdown:
        
        - **I**: used by the speaker (e.g., **I** am going to the store).
        - **You**: used when addressing someone (e.g., **You** are my friend).
        - **He**: used for a male person or a male animal (e.g., **He** is my brother).
        - **She**: used for a female person or a female animal (e.g., **She** is my sister).
        - **It**: used for things, animals, or concepts (e.g., **It** is raining).
        - **We**: used for a group including the speaker (e.g., **We** are going to the park).
        - **They**: used for a group of people or things (e.g., **They** are my friends).`,

        es: `Los pronombres personales se refieren a personas o cosas. 'I' se refiere al hablante, 
        'you' se refiere a la persona a la que se habla, y 'he', 'she', 'it' se refieren a terceras personas o cosas.

        **Los pronombres personales** se usan para evitar la repetición y hacer las oraciones más fluidas. Aquí tienes una descripción:
        
        - **I**: usado por el hablante (ej., **I** voy a la tienda).
        - **You**: usado cuando se habla con alguien (ej., **You** eres mi amigo).
        - **He**: usado para una persona masculina o un animal masculino (ej., **He** es mi hermano).
        - **She**: usado para una persona femenina o un animal femenino (ej., **She** es mi hermana).
        - **It**: usado para cosas, animales o conceptos (ej., **It** está lloviendo).
        - **We**: usado para un grupo que incluye al hablante (ej., **We** vamos al parque).
        - **They**: usado para un grupo de personas o cosas (ej., **They** son mis amigos).`
    },

    to_be_and_to_have: {
        en: `The verb 'to be' is used to describe states, conditions, or situations. It is often used for identity, age, weather, and feelings. For example, "She is happy" or "It is cold."
        
        The verb 'to have' is used to express possession, experiences, or characteristics. For example, "I have a car" or "They have seen that movie."
        
        **Examples**:
        - 'to be' is used for describing the subject's condition or identity (e.g., "She is tired" or "I am a student").
        - 'to have' is used for expressing possession, experiences, or actions (e.g., "I have a book" or "They have visited that place").
        
        In short, 'to be' is often used to indicate a state of being, while 'to have' is typically used to express what someone owns or has experienced.`,

        es: `El verbo 'to be' se utiliza para describir estados, condiciones o situaciones. Se usa comúnmente para hablar de la identidad, la edad, el clima o los sentimientos. Por ejemplo, "She is happy" (Ella está feliz) o "It is cold" (Hace frío).
        
        El verbo 'to have' se usa para expresar posesión, experiencias o características. Por ejemplo, "I have a car" (Tengo un coche) o "They have seen that movie" (Ellos han visto esa película).
        
        **Ejemplos**:
        - 'to be' se usa para describir el estado o la identidad del sujeto (por ejemplo, "She is tired" (Ella está cansada) o "I am a student" (Soy estudiante)).
        - 'to have' se usa para expresar posesión, experiencias o acciones (por ejemplo, "I have a book" (Tengo un libro) o "They have visited that place" (Ellos han visitado ese lugar)).
        
        En resumen, 'to be' se usa principalmente para indicar un estado o condición, mientras que 'to have' se usa para expresar lo que alguien posee o ha experimentado.`
    },


    //A2
    irregular_plurals: {
        en: `Irregular plurals are nouns that do not follow the standard rule of adding "-s" or "-es" to form the plural. Instead, they change spelling or remain the same.
    
        **Examples of irregular plurals**:
        - **Man → Men**: One man, two men.
        - **Woman → Women**: One woman, three women.
        - **Child → Children**: One child, four children.
        - **Foot → Feet**: One foot, two feet.
        - **Tooth → Teeth**: One tooth, many teeth.
        - **Mouse → Mice**: One mouse, several mice.
        - **Sheep → Sheep**: One sheep, ten sheep (no change).
        - **Deer → Deer**: One deer, five deer (no change).
    
        **Key takeaway**: Irregular plurals must be memorized because they do not follow a predictable pattern.`,
        
        es: `Los plurales irregulares son sustantivos que no siguen la regla estándar de agregar "-s" o "-es" para formar el plural. En su lugar, cambian de ortografía o permanecen iguales.
    
        **Ejemplos de plurales irregulares**:
        - **Man → Men**: Un hombre, dos hombres.
        - **Woman → Women**: Una mujer, tres mujeres.
        - **Child → Children**: Un niño, cuatro niños.
        - **Foot → Feet**: Un pie, dos pies.
        - **Tooth → Teeth**: Un diente, muchos dientes.
        - **Mouse → Mice**: Un ratón, varios ratones.
        - **Sheep → Sheep**: Una oveja, diez ovejas (sin cambio).
        - **Deer → Deer**: Un ciervo, cinco ciervos (sin cambio).
    
        **Punto clave**: Los plurales irregulares deben memorizarse porque no siguen un patrón predecible.`
    },
    
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },prepositions: {
        
    },
    prepositions: {
        
    },prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    prepositions: {
        
    },
    
};

// Variable para el idioma actual
let currentLanguage = "en";

// Muestra la explicación de un punto y prepara los ejercicios
function showExplanation(point) {
    const content = levelA1Content[point];
    if (!content) {
        console.error(`No se encontró contenido para el punto: ${point}`);
        return;
    }
    
    const explanation = translations[point]?.[currentLanguage] || content.explanation;

    if (!explanation) {
        console.error(`No se encontró explicación para el punto: ${point}`);
        return;
    }

    // Cambiar _ por espacio en el título y poner la primera letra en mayúscula
    const formattedPoint = point.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

    // Configurar el contenido del pop-up
    document.getElementById('popup-title').textContent = formattedPoint;
    document.getElementById('popup-description').innerHTML = formatExplanation(explanation);
    document.getElementById('go-to-exercises').style.display = 'block';
    document.getElementById('exercise-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';

    // Configurar el botón de traducción y ejercicios
    updateTranslateButton();
    currentExerciseList = shuffleExercises(content.exercises || []);
    currentExerciseIndex = 0;
    currentExercise = currentExerciseList[currentExerciseIndex];
    exerciseCount = 1; // Reiniciar el contador de ejercicios al cargar un nuevo punto
    document.getElementById('total-questions').textContent = currentExerciseList.length;
    document.getElementById('current-question').textContent = exerciseCount;
}
// Actualizar el texto del botón de traducción
function updateTranslateButton() {
    const translateButton = document.getElementById('translate-button');
    translateButton.textContent = currentLanguage === "en" ? "Translate to Spanish" : "Traducir a Inglés";
}

// Función para traducir el texto de la explicación
function translateText() {
    const point = document.getElementById('popup-title').textContent.toLowerCase().replace(/\s+/g, '_');
    if (translations[point]) {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        const translatedText = translations[point][currentLanguage];
        document.getElementById('popup-description').innerHTML = formatExplanation(translatedText);
        updateTranslateButton();
    }
}

// Reinicia la interfaz para los ejercicios
function resetExerciseView() {
    document.getElementById('exercise-container').style.display = 'block'; 
    document.getElementById('exercise-question').textContent = currentExercise.question; 
    document.getElementById('go-to-exercises').style.display = 'none'; 
    document.getElementById('correctness').textContent = ''; 
    document.getElementById('exercise-solution').style.display = 'none'; 
    document.getElementById('exercise-answer').value = ''; 
}

// Comienza el ejercicio
function startExercise() {
    resetExerciseView(); // Resetea la vista del ejercicio
}

// Cierra el pop-up
// Cierra el pop-up y reinicia variables de estado
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('go-to-exercises').style.display = 'block'; // Mostrar botón de inicio en el próximo punto
    currentExerciseIndex = 0; // Reiniciar el índice de ejercicios
    currentExerciseList = []; // Vaciar la lista de ejercicios
    currentLanguage = "en"; // Reiniciar el idioma al cerrar
    exerciseCount = 1; // Reiniciar el contador de ejercicios
    document.getElementById('current-question').textContent = exerciseCount; // Actualizar el contador mostrado
}

// Revisa la respuesta del ejercicio
function checkAnswer() {
    const userAnswer = document.getElementById('exercise-answer').value.trim().toLowerCase();
    const solution = currentExercise.correctAnswer.toLowerCase();
    const correctnessElement = document.getElementById('correctness');
    const solutionElement = document.getElementById('exercise-solution');

    if (userAnswer === solution) {
        correctnessElement.textContent = "Correcto!";
        correctnessElement.style.color = "green";
    } else {
        correctnessElement.textContent = "Incorrecto.";
        correctnessElement.style.color = "red";
    }

    solutionElement.textContent = "La solución es: " + currentExercise.correctAnswer;
    solutionElement.style.display = 'block';

    // Avanzar al siguiente ejercicio
    currentExerciseIndex++;
    
    if (currentExerciseIndex < currentExerciseList.length) {
        // Cargar el siguiente ejercicio con un retraso
        setTimeout(function() {
            currentExercise = currentExerciseList[currentExerciseIndex]; // Actualizar con el siguiente ejercicio aleatorio
            startExercise(); // Iniciar el siguiente ejercicio
            // Incrementar el contador de ejercicios y actualizar el contador
            exerciseCount++;
            document.getElementById('current-question').textContent = exerciseCount;
        }, 2000);
    } else {
        setTimeout(function() {
            // Mostrar un mensaje indicando que se han completado todos los ejercicios
            document.getElementById('exercise-container').style.display = 'none';
            document.getElementById('exercise-question').textContent = '';
            document.getElementById('correctness').textContent = '';
            document.getElementById('exercise-solution').style.display = 'none';
            alert("¡Has completado todos los ejercicios de este tema!");
            closePopup(); // Cierra el pop-up y reinicia la interfaz
        }, 2000);
    }
}

