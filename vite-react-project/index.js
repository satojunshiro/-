if (window.confirm("準備はいいですか？")) {
  console.log("ゲームを開始します！");
} else {
  console.log("準備が完了したら教えてね！");
}

const sentences = ["謎解きクイズ", "第一問", "第二問", "第三問", "第四問"]; // document.getElementById(questionSentence).textContent = "第一問";

let i = 0;

document.getElementById("questionSentence").textContent = sentences[i];

document.getElementById("startButton").onclick = function () {
  ++i;
  document.getElementById("startButton").textContent = "次へ";
  document.getElementById("questionSentence").textContent = sentences[i];
  console.log(sentences[i]);
};
