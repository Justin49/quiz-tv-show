// Création d'une classe Question
class Question {
    // le constructeur de la classe question prend 3 paramètres (le texte de la question, les 4 choix contenu dans choices et la bonne réponse)
    constructor(text, choices, answer) {
        // ce qui sera passé en paramètre de text on le stockera dans this.text et pareil pour les autres
        this.text === text;
        this.choices === choices;
        this.answer === answer;
    }

    // fonction qui va contrôler si la réponse de l'utilisateur est bonne
    isCorrectAnswer(choices) {
        // si le paramètre que nous passera l'utilisateur est égal à la réponse alors sa renvoie true
        return this.answer === choices;
    }
}

// tableau regroupant le quiz qui sont des objet de la classe Question, pour chaque nouvelle question on instancie avec le mot-clé new une nouvelle question, chaque objet question contient la question, les choix possibles et la réponse
let questions = [
    new Question("Quel est le premier personnage que Negan tue avec sa batte de baseball ?", ["Eugène", "Abraham", "Glenn", "Rosita"], "Abraham"),
    new Question("Qui à coupé les orteils de Michael dans la saison 1 de Prison Break ?", ["T-Bag", "Brad Bellick", "John Abruzzi", "Paul Kellerman"], "John Abruzzi"),
    new Question("Qui à tué Stannis Barathéon lors de la saison 5 et de la bataille contre l'armée des Bolton ?", ["Jon Snow", "Brienne de Torth", "Ramsay Bolton", "Roose Bolton"], "Brienne de Torth"),
    new Question("Qui à la toute fin de la saison 6 de Lost protége l'île ?", ["Jack Shepard", "Hugo Reyes et Benjamin Linus", "Desmond Hume", "Kate Austen et Sawyer"], "Hugo Reyes et Benjamin Linus"),
    new Question("Quel est le sujet principal de la saison 7 d'American Horror Story ?", ["Sectes", " Maisons hantées", "Fantômes", "Le cirque"], "Sectes"),
    new Question("Dans Breaking Bad avec quoi Walter et Jesse font disparaitre le corps du dealer dans la saison 1 ?" ["A l'acide", "En brûlant le corps", "En l'enterant", "En le jetant dans l'eau", "A l'acide"]),
    new Question("Quel est le nom du vol que les protagonistes prennent avant d'atterir sur l'île ?" ["Vol 915", "Vol 816", "Vol 815", "Vol 916"], "Vol 815"),
    new Question("Avec qui Michael est emprisonné à Sona dans la saison 3 de Prison Break ?" ["Mahone, T-Bag et LIncoln", "Mahone, Bellick et Lincoln", "Mahone, T-Bag et Bellick", "T-Bag, Lincoln et Bellick"], "Mahone, T-Bag et Bellick"),
    new Question("Dans la saison 4 de Walking Dead qui est le seul personnage qui est rester dans la prison ?", ["Tara", "Tyresse", "Daryl", "Glenn"]),
    new Question("Dans la saison 4 de Breaking Bad qui à tué Gale, le partenaire remplaçant de Walter quand il à travaillé pour Gus ?", ["Gus", "Mike", "Jesse", "Un dealer travaillant pour Gus"], "Jesse")
];

console.log(questions);

// Création d'une classe Quiz
class Quiz {
    // la constructeur de la classe prend en paramètre les différentes questions du quiz
    constructor(questions) {
        this.score = 0;
        // on stocke nos 10 questions (il peut y en avoir plus)
        this.questions = questions;
        // l'index de la question actuelle
        this.currentQuestionIndex = 0;
    }

    // fonction qui retourne la question actuelle
    getCurrentQueston() {
        return this.questions[this.currentQuestionIndex];
    }

    // fonction qui vérifie la réponse de l'utilisateur
    guess(answer) {

        // si la réponse de l'utilisateur est correcte
        if(this.getCurrentQueston().isCorrectAnswer(answer)) {

            // son score augmente
            this.score++;
        }
        // on passe à la question suivante en augmentant son index
        this.currentQuestionIndex++;
    }

    // fonction qui va dire que le quiz est fini
    hasEnded() {

        // si l'index de la question est supérieur ou égale au nombre de question du tableau alors le quiz est fini et une action viendra déclancher tout ça
        return this.currentQuestionIndex >= this.questions.leght;
    }
}

// regroupe toute les fonctions nécessaire à l'affichage du quiz
const display = {

}

// logique du jeu
quizApp = () => {

    if(quiz.hasEnded()) {

        // fin du jeu
    } else {

        // logique du jeu
        // question
        // les choix
        // la progression des questions
    }
}


// création du quiz
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);