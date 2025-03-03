import { useRef, useEffect } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const blobsRef = useRef([]);
  const animationFrameIdRef = useRef(null);
  const canvasDimensionsRef = useRef({ width: 0, height: 0 });
  const devicePixelRatio = window.devicePixelRatio || 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.floor(rect.width * devicePixelRatio);
      const height = Math.floor(rect.height * devicePixelRatio);
      canvas.width = width;
      canvas.height = height;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      canvasDimensionsRef.current = { width: rect.width, height: rect.height };
    };

    const colors = [
      "rgba(239, 68, 68, 0.05)",
      "rgba(251, 146, 60, 0.04)",
      "rgba(253, 224, 71, 0.03)",
    ];

    const createBlobs = (count) => {
      const { width, height } = canvasDimensionsRef.current;
      blobsRef.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 100 + 80,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        blur: Math.random() * 20 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const drawBlobs = () => {
      const { width, height } = canvasDimensionsRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#141414";
      ctx.fillRect(0, 0, width, height);
      blobsRef.current.forEach((blob) => {
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.shadowBlur = blob.blur;
        ctx.shadowColor = blob.color;
        ctx.fillStyle = blob.color;
        ctx.fill();
        blob.x += blob.speedX;
        blob.y += blob.speedY;
        if (blob.x - blob.radius > width) blob.x = -blob.radius;
        if (blob.x + blob.radius < 0) blob.x = width + blob.radius;
        if (blob.y - blob.radius > height) blob.y = -blob.radius;
        if (blob.y + blob.radius < 0) blob.y = height + blob.radius;
      });
    };

    const animate = () => {
      drawBlobs();
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      createBlobs(6);
      window.addEventListener("resize", resizeCanvas);
      animate();
    };

    init();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [devicePixelRatio]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
        imageRendering: "crisp-edges",
      }}
    />
  );
};

export default AnimatedBackground;
