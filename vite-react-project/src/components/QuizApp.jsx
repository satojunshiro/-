//import React from 'react'
import { useState } from "react";
//import AnswerCheck from "./AnswerCheck";

//問題文や問題表示の管理を行います
function Questions() {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  //クイズの問題数
  const numbers = ["第一問", "第二問", "第三問", "第四問", "ラスト問題"];
  //クイズの問題文
  const sentences = [
    "次の記号は何でしょう",
    "次の答えは何でしょう",
    "以下の問題に答えてください",
    "これは何を表しているでしょう",
    "以下の問題に答えてください",
  ];
  //クイズの画像
  const QuestionsArray = [
    "src/assets/画像/question1.jpg",
    "src/assets/画像/question2.jpg",
    "src/assets/画像/question3.jpg",
    "src/assets/画像/question4.jpg",
    "src/assets/画像/question5.jpg",
  ];
  //クイズのヒント
  const hint = [
    "石はROCKとSTONEと訳せるね",
    "アルファベットの間の文字を考えてみよう",
    "イラストの文字の位置を読んでみよう",
    "英語にしてどのように取り出されているか考えるとわかるよ",
    "抜けている棒をの箇所をよく見てみよう",
  ];
  //クイズの解答
  const answers = ["ZIKKEN", "ねぼう", "ころしや", "HOT", "MONEY"];

  //スタートボタンが押された時に、表示画面を変えます
  const startButton = () => {
    setStarted(true);
  };

  //次の問題へを押したときに正誤判定やエラー表示をします
  const answerSubmit = () => {
    const questionAnswer = answers[currentQuestionIndex];
    const trimmedUserAnswer = userAnswer.trim().toUpperCase();
    const regex =
      /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～「」]/g;

    if (!trimmedUserAnswer) {
      //入力されていない場合（スペースを除く）
      setErrorMessage("回答を入力してください");
    } else if (regex.test(trimmedUserAnswer)) {
      //記号が入っている場合
      setErrorMessage("回答に記号が含まれています");
    } else if (questionAnswer === trimmedUserAnswer) {
      setScore((score) => ++score);
      // エラーメッセージが出ている場合もあるのでリセットする
      setErrorMessage("");
      nextQuestion();
    } else {
      setErrorMessage("");
      nextQuestion();
    }
  };
  //indexの数を増やし、次の問題に移ります
  const nextQuestion = () => {
    setCurrentQuestionIndex((index) => ++index);
    setUserAnswer("");
  };
  //スタートに戻るを押すとスタート画面に戻り、indexを0にする
  const returnToStart = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
  };

  //startedがfalseならスタートボタンを表示
  if (!started) {
    return (
      <div>
        <button className="btn btn-primary" onClick={startButton}>
          スタート
        </button>
      </div>
    );
  }
  //もしindexが問題数と同じになったら、終了画面を表示
  if (currentQuestionIndex === QuestionsArray.length) {
    return (
      <div className="card">
        <h1>終了</h1>
        <p className="text-5xl">
          スコア： {score}/{QuestionsArray.length}
        </p>
        <button className="btn btn-primary mt-6 mx-20" onClick={returnToStart}>
          スタートへ戻る
        </button>
      </div>
    );
  } else {
    //indexが問題数と同じになるまで問題画面
    return (
      <div className="text-2xl">
        <h2>{numbers[currentQuestionIndex]}</h2>
        <p>{sentences[currentQuestionIndex]}</p>
        <img
          src={QuestionsArray[currentQuestionIndex]}
          alt=""
          className="m-6"
        />
        {<p style={{ color: "red" }}>{errorMessage}</p>}
        <input
          type="text"
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
          placeholder="ここに回答を入力してください"
          className="input input-bordered input-primary w-full max-w-xs mx-2"
        />
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          ヒント
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <p className="py-4">{hint[currentQuestionIndex]}</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <button onClick={answerSubmit} className="btn btn-primary mx-2">
          次の問題へ
        </button>
      </div>
    );
  }
}

export default Questions;
