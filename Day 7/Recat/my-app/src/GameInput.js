function GameInput({ guess, setGuess, checkGuess }) {
  return (
    <>
      <input
        type="number"
        className="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button className="btn check" onClick={checkGuess}>
        Check!
      </button>
    </>
  );
}

export default GameInput;
