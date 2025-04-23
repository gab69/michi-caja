"use client";

export default function FullscreenButton() {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <button onClick={toggleFullscreen} className="fullscreen-button">
      🚀 Pantalla Completa
    </button>
  );
}