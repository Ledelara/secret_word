import './Game.css';
import {useState, useRef} from 'react';

export const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters,
  guesses,
  score
}) => {

  const [letter, setletter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setletter("");
    letterInputRef.current.focus();
  };

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className='tip'>
        Dica sobre palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className='letterContainer'>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type='text' name='letter' maxLength="1" required onChange={(e) => setletter(e.target.value)} value={letter} ref={letterInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className='wrongLettersContainer'>
        <p>Letras já utilizas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}
