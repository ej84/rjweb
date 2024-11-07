import React, { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Drawing logic
    context.fillStyle = "white";
    context.fillRect(0, 0, 100, 100);
    context.fillStyle = "black";
    context.fillRect(15, 15, 70, 70);
  }, []);

  return <canvas ref={canvasRef} width={120} height={120} />;
};

export default Canvas;
