"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
  color: string;
}

interface SpaceBackgroundProps {
  children: ReactNode;
  speed?: number;
  starCount?: number;
  starColor?: string;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  children,
  speed = 0.5,
  starCount = 800,
  starColor = "#ffffff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      dimensionsRef.current = { width, height };

      const starColors = [
        "#ffffff", "#ffd700", "#87ceeb", "#ff6b6b",
        "#98fb98", "#dda0dd", "#ffa500", "#40e0d0",
      ];

      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z: Math.random() * 1000,
          prevX: 0,
          prevY: 0,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    const animate = () => {
      const { width, height } = dimensionsRef.current;
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        star.prevX = (star.x / star.z) * 100 + width / 2;
        star.prevY = (star.y / star.z) * 100 + height / 2;
        star.z -= speed;

        if (star.z <= 0) {
          const starColors = [
            "#ffffff", "#ffd700", "#87ceeb", "#ff6b6b",
            "#98fb98", "#dda0dd", "#ffa500", "#40e0d0",
          ];
          star.x = (Math.random() - 0.5) * 2000;
          star.y = (Math.random() - 0.5) * 2000;
          star.z = 1000;
          star.color = starColors[Math.floor(Math.random() * starColors.length)];
        }

        const x = (star.x / star.z) * 100 + width / 2;
        const y = (star.y / star.z) * 100 + height / 2;

        if (x < 0 || x > width || y < 0 || y > height) return;

        const size = Math.max(0, (1000 - star.z) / 1000) * 3;
        const opacity = Math.max(0.1, (1000 - star.z) / 1000);

        const hexToRgb = (hex: string) => {
          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
              }
            : { r: 255, g: 255, b: 255 };
        };

        const rgb = hexToRgb(star.color);

        if (star.z < 900) {
          const trailLength = Math.sqrt(
            Math.pow(x - star.prevX, 2) + Math.pow(y - star.prevY, 2)
          );
          if (trailLength > 1) {
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${
              opacity * 0.5
            })`;
            ctx.lineWidth = size * 0.5;
            ctx.beginPath();
            ctx.moveTo(star.prevX, star.prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        if (opacity > 0.7) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = size * 2;
          ctx.beginPath();
          ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    updateDimensions();
    animate();

    const handleResize = () => updateDimensions();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [speed, starCount, starColor]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at center, #0f0f23 0%, #000000 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpaceBackground;

// Optional HOC
export function withSpaceBackground<P extends object>(
  Component: React.ComponentType<P>,
  options?: { speed?: number; starCount?: number; starColor?: string }
) {
  return function SpaceBackgroundWrapper(props: P) {
    return (
      <SpaceBackground
        speed={options?.speed}
        starCount={options?.starCount}
        starColor={options?.starColor}
      >
        <Component {...props} />
      </SpaceBackground>
    );
  };
}
