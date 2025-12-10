import { useState } from "react";
import GameInput from "./GameInput";
import GameMessage from "./GameMessage";
function GuessGame() {
  const [secretNumber, setSecretNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [guess, setGuess] = useState("");
  const checkGuess = () => {
    const num = Number(guess);
    if (!num) {
      setMessage("No number!");
      return;
    }
    if (num === secretNumber) {
      setMessage("Correct Number!");
      if (score > highScore) {
        setHighScore(score);
      }
    } else {
      if (score > 1) {
        setMessage(num > secretNumber ? "Too high!" : "Too low!");
        setScore(score - 1);
      } else {
        setMessage("You lost the game!");
        setScore(0);
      }
    }
  };
  const resetGame = () => {
    setScore(20);
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setMessage("Start guessing...");
    setGuess("");
  };
  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>

        <button className="btn again" onClick={resetGame}>
          Again!
        </button>

        <div className="number">
          {message === "🎉 Correct Number!" ? secretNumber : "?"}
        </div>
      </header>
      <main>
        <section className="left">
          <GameInput
            guess={guess}
            setGuess={setGuess}
            checkGuess={checkGuess}
          />
        </section>

        <section className="right">
          <GameMessage message={message} />

          <p className="label-score">
            Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
             Highscore: <span className="highscore">{highScore}</span>
          </p>
        </section>
      </main>
    </>
  );
}
export default GuessGame;