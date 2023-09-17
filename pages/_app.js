import React, { useState, useEffect } from "react";
import "../styles/styles.css";

export default function Board() {
  const [player, setPlayer] = useState(1);
  const [value, setValue] = useState(Array(9).fill(""));
  const [gameOver, setGameOver] = useState("");
  const [stop, setStop] = useState(true);

  const handleClick = (cellId) => {
    if (stop) {
      let currentValue = [...value];
      if (currentValue[cellId] === "") {
        player === 1
          ? (currentValue[cellId] = "X")
          : (currentValue[cellId] = "O");
        setValue(currentValue);
        setPlayer(player === 1 ? 2 : 1);
      }
    }
  };

  useEffect(() => {
    for (let index = 0; index < value.length; index++) {
      if (
        value[index] !== "" &&
        value[index] === value[index + 3] &&
        value[index] === value[index + 6]
      ) {
        setGameOver(`player${player}胜利`);
        setStop(false);
      }
    }
    for (let index = 0; index < value.length; index += 3) {
      if (
        value[index] !== "" &&
        value[index] === value[index + 1] &&
        value[index] === value[index + 2]
      ) {
        setGameOver(`player${player}胜利`);
        setStop(false);
      }
    }
    if (value[0] !== "" && value[0] === value[4] && value[0] === value[8]) {
      setGameOver(`player${player}胜利`);
      setStop(false);
    }
    if (value[2] !== "" && value[2] === value[4] && value[2] === value[6]) {
      setGameOver(`player${player}胜利`);
      setStop(false);
    }
  }, [value]);

  return (
    <>
      <h1>井字棋游戏</h1>
      <p>player1:O player2:X</p>
      <div className="board-row">
        <Square value={value[0]} handleClick={handleClick} cellId={0} />
        <Square value={value[1]} handleClick={handleClick} cellId={1} />
        <Square value={value[2]} handleClick={handleClick} cellId={2} />
      </div>
      <div className="board-row">
        <Square value={value[3]} handleClick={handleClick} cellId={3} />
        <Square value={value[4]} handleClick={handleClick} cellId={4} />
        <Square value={value[5]} handleClick={handleClick} cellId={5} />
      </div>
      <div className="board-row">
        <Square value={value[6]} handleClick={handleClick} cellId={6} />
        <Square value={value[7]} handleClick={handleClick} cellId={7} />
        <Square value={value[8]} handleClick={handleClick} cellId={8} />
      </div>
      <p>{gameOver}</p>
    </>
  );
}

function Square({ value, handleClick, cellId }) {
  return (
    <button
      className="square"
      onClick={() => {
        handleClick(cellId);
      }}
    >
      {value}
    </button>
  );
}
