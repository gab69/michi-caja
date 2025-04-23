"use client";

export default function GameMenu({ onStart }) {
  return (
    <div className="flex justify-center min-h-screen items-center"> {/* Aquí añadimos min-h-screen y items-center */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-auto"> {/* Añadimos max-w-md para limitar el ancho máximo */}
        <img
          src="logo-caja.webp"
          alt="Logo Caja Huancayo"
          className="w-full h-auto mx-auto mb-4"
        />
      </div>

      <div className="menu">
        <h1>🎮 JUEGO MICHI</h1>
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
    </div>
  );
}
