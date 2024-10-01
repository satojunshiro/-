const numbers = [
  "謎解きクイズ",
  "第一問",
  "第二問",
  "第三問",
  "ラスト問題",
  "終了",
];
const sentences = [
  "スタートボタンを押すと問題が表示されるよ！",
  "次の記号は何でしょう",
  "次の回答は何でしょう",
  "以下の問題に答えてください",
  "これは何を表しているでしょう",
  "",
];

const questionsArray = [
  "src/assets/画像/question1.jpg",
  "src/assets/画像/question2.jpg",
  "src/assets/画像/question3.jpg",
  "src/assets/画像/question4.png",
  "src/assets/画像/question5.jpg",
  "",
];
const startButton = document.getElementById("startButton");
const questionNumber = document.getElementById("questionNumber");
const questionSentence = document.getElementById("questionSentence");
const questionImages = document.getElementById("questionImages");

let i = 0;
let j = 0;

startButton.addEventListener("click", () => {
  ++i;
  if (i < 5) {
    startButton.textContent = "次へ";
    questionNumber.textContent = numbers[i];
    questionSentence.textContent = sentences[i];
    questionImages.src = questionsArray[j];

    ++j;
  } else {
    startButton.textContent = "終了";
    if (5 <= i) {
      startButton.addEventListener("click", () => {
        questionNumber.textContent = "結果";
        questionSentence.textContent = `あなたの点数は${i}点です`;
        questionImages.src = questionsArray[5];
      });
    }
  }
});

// //コールバック関数の復習

// // setTimeout(function () {
// //   startButton.addEventListener("click", fn(food));
// // }, 2000);

// // const fn = function (food) {
// //   console.log("ゲームスタート");
// //   for (let j = 0; j < 3; ++j) {
// //     console.log(food[j]);
// //   }
// // };
// // const food = ["人参", "じゃがいも", "キャベツ"];
// // fn(food);
