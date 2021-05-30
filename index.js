let chalk = require("chalk");
let read = require("readline-sync");
console.log(
  chalk.blue("Hello Buddy! ") +
    "\nThis is Vijay Tembugade!\n" +
    chalk.black.bgWhite.bold("Lets check how much do you know me!! ")
);
console.log(chalk.red.bold("Answer the following questions!"));

let score = 0;
let highScore = [
  {
    name: "Sebestian",
    score: 5,
  },
];

let userName = read.question("Whats is your Name? ");
console.log(
  chalk.red("Hello ") + chalk.bold(userName) + ", Lets move to quize!!\n"
);

function quize(question, ans) {
  console.log(chalk.bgBlue.white.bold(question));
  userAnswer = read.question().toLowerCase();

  if (userAnswer === ans) {
    score = score + 1;
    console.log("your score is is " + score);
  } else {
    console.log("uff.. wrong answer.. your score is " + score);
  }
}

questionsArray = [
  {
    question: "Where do I live(district place)?",
    ans: "kolhapur",
  },
  {
    question: "What is my birth Month?",
    ans: "february",
  },
  {
    question: "What is my School Name(Initial name only)?",
    ans: "rosary",
  },
  {
    question: "What is my Favorite animal?",
    ans: "dog",
  },
  {
    question: "Am I veg or Nonveg?",
    ans: "nonveg",
  },
];

for (let i = 0; i < questionsArray.length; i++) {
  quize(questionsArray[i].question, questionsArray[i].ans);
}

console.log(chalk.red.bold("\nYour Score is " + score));

if (score >= highScore[0].score) {
  console.log(
    chalk.green.bold(
      "\nHurrey!! You scored the Highest Score! Congratulations!"
    )
  );
} else {
  console.log(
    "Highest Score id scored by " +
      highScore[0].name +
      " and highest score is " +
      highScore[0].score
  );
}
