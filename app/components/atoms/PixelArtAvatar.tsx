"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Pixel art data for a person waving (16x16 grid)
// 0 = transparent, 1 = skin, 2 = hair, 3 = shirt, 4 = outline
const pixelArtFrames = [
  // Frame 1 - hand up
  [
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  ],
  // Frame 2 - hand middle
  [
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 3, 3, 3, 3, 3, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  ],
  // Frame 3 - hand down
  [
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  ],
];

// Color palette
const colors: Record<number, string> = {
  0: "transparent",
  1: "#d8a98eff", // Skin
  2: "#5C4033", // Hair (brown)
  3: "#627a77", // Shirt (sage-600)
  4: "#204045", // Outline/details (forest-900)
};

export default function PixelArtAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  // Draw pixel art on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixelSize = canvas.width / 16;
    const frame = pixelArtFrames[frameIndex];

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw pixels
    for (let row = 0; row < 16; row++) {
      for (let col = 0; col < 16; col++) {
        const colorIndex = frame[row][col];
        if (colorIndex !== 0) {
          ctx.fillStyle = colors[colorIndex];
          ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
        }
      }
    }
  }, [frameIndex]);

  // Animation loop when hovered
  useEffect(() => {
    if (!isHovered) {
      setFrameIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % pixelArtFrames.length);
    }, 300);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="w-full max-w-md mx-auto h-full flex items-center justify-center"
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY }}
        className="relative cursor-pointer"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        {/* Glow effect behind the avatar */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-300 to-blush-300 rounded-full blur-2xl opacity-40 scale-110" />

        {/* Background shape */}
        <div className="relative bg-gradient-to-br from-ivory-100 to-ivory-200 rounded-3xl p-8 shadow-2xl border border-ivory-300">
          {/* Canvas for pixel art */}
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="image-rendering-pixelated"
            style={{ imageRendering: "pixelated" }}
          />

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-blush-400 rounded-full animate-pulse" />
          <div className="absolute top-8 right-8 w-2 h-2 bg-sage-400 rounded-full animate-pulse delay-100" />
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-coffee-400 rounded-full animate-pulse delay-200" />
        </div>

        {/* Location badge */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30">
          <span className="bg-forest-900/90 backdrop-blur-md text-ivory-50 px-4 py-2 rounded-full text-sm font-mono border border-sage-700 flex items-center gap-2 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
            </span>
            Lima, Perú
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
