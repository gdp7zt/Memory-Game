import './App.css';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card from './components/cards';
import { click } from '@testing-library/user-event/dist/click';
import GitHub from './imgs/GitHub-Mark-32px.png'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [characterArray, setCharacterArray] = useState([
    {name: 'Minion with Guitar', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image1.png', id:uuidv4()},
    {name: 'Minion Writing', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image2.png', id: uuidv4()},
    {name: 'Minion Flying', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image3.png', id: uuidv4()},
    {name: 'Minion Saluting', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image4.png', id: uuidv4()},
    {name: 'Minion with Pig', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image5.png', id: uuidv4()},
    {name: 'Tall Minion', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image6.png', id: uuidv4()},
    {name: 'Minion with Banana', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image7.png', id: uuidv4()},
    {name: 'Minion with Bear', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image8.png', id: uuidv4()},
    {name: 'Minion with Starfish', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image9.png', id: uuidv4()},
    {name: 'Sneaky Minion', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image10.png', id: uuidv4()},
    {name: 'Begging Minion', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image11.png', id: uuidv4()},
    {name: 'Minion with Bananas', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image12.png', id: uuidv4()},
    {name: 'Approving Minion', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image13.png', id: uuidv4()},
    {name: 'Minion with Bear', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image14.png', id: uuidv4()},
    {name: 'Happy Minion', image: 'https://www.memozor.com/jeux/jquery/the_minions_kevin_bob_stuart/image15.png', id: uuidv4()}
  ])
  const [gameOver, setGameOver] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffleImages = () => {
    let newArray = [...characterArray];

    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setCharacterArray(newArray);
  }

  const handleClick = (image) => {
    if(clickedCards.includes(image)){
      setGameOver(true);
      if(highScore < score) setHighScore(score);
      setScore(0);
      setClickedCards([]);
      shuffleImages();
    } else{
      setScore(score + 1);
      setClickedCards([...clickedCards, image]);
      shuffleImages();
    }
  }

  return (
    <div className='App'>
      <div className="header">
        <div className="headerTop">
          <div className = 'title'>Despicable Me Memory Game</div>
          <div className= 'description'>Get points by clicking on unique images!</div>
        </div>
      </div>
      <div className='border'>
        <div className = 'score'>Current Score: {score}</div>
          <div className = 'highScore'>High Score: {highScore}</div>
      </div>
      <div className="body">
        {characterArray.map((char, index) => (
          <div key={index}><Card handleClick={handleClick} character={char}></Card></div>
        ))}
      </div>
      <div className='footer'>
            <h4>Copyright 2022 gdp7zt
                <a href="https://github.com/gdp7zt/Memory-Game" target="_blank">
                    <img src={GitHub} alt="Github Logo"></img>
                </a>
            </h4>
      </div>
    </div>
  );
}

export default App;
