"use client";

export default function GameMenu({ onStart }) {
  return (
    <div className="menu">
      <h1>🎮 Tres en Raya</h1>
      <div className="options">
        <input
          type="text"
          placeholder="Jugador 1 (X)"
          id="player1"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Jugador 2 (O)"
          id="player2"
          className="input-field"
        />
      </div>
      <button
        className="start-button"
        onClick={() => {
          const player1 = document.getElementById("player1").value || "Jugador 1";
          const player2 = document.getElementById("player2").value || "Jugador 2";
          onStart(player1, player2);
        }}
      >
        Empezar Juego
      </button>
    </div>
  );
}