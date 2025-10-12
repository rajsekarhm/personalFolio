import React from "react";

export default function CanvasBackground({ children }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <canvas
        id="space-canvas"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
