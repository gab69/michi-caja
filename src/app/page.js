"use client";
import { useState } from "react";
import GameMenu from "../components/GameMenu";
import Board from "../components/Board";
import FullscreenButton from "../components/FullscreenButton";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState({ player1: "X", player2: "O" });

  const handleStartGame = (player1, player2) => {
    setPlayers({ player1, player2 });
    setGameStarted(true);
  };

  const handleBackToMenu = () => {
    setGameStarted(false);
  };

  return (
    <div className="container">
      {!gameStarted ? (
        <GameMenu onStart={handleStartGame} />
      ) : (
        <Board
          player1={players.player1}
          player2={players.player2}
          onBackToMenu={handleBackToMenu}
        />
      )}
      <FullscreenButton />
    </div>
  );
}