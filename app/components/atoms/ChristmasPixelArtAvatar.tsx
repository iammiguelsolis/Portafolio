"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Christmas pixel art data for a person waving with Santa hat (18x18 grid - taller for hat)
// 0 = transparent, 1 = skin, 2 = hair, 3 = shirt, 4 = outline, 5 = red (hat), 6 = white (hat trim/pompom)
const pixelArtFrames = [
  // Frame 1 - hand up
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 5, 5, 5, 5, 5, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 5, 5, 5, 5, 5, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  ],
  // Frame 2 - hand middle
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 5, 5, 5, 5, 5, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 5, 5, 5, 5, 5, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  ],
  // Frame 3 - hand down
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  ],
];

// Christmas color palette
const colors: Record<number, string> = {
  0: "transparent",
  1: "#d8a98eff", // Skin
  2: "#5C4033", // Hair (brown)
  3: "#627a77", // Shirt (sage-600) - keeping for potential use
  4: "#204045", // Outline/details (forest-900)
  5: "#c41e3a", // Christmas red (hat & sweater)
  6: "#ffffff", // White (hat trim & pompom)
};

export default function ChristmasPixelArtAvatar() {
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

    const pixelSize = canvas.width / 18; // 18x18 grid for Christmas version
    const frame = pixelArtFrames[frameIndex];

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw pixels
    for (let row = 0; row < 18; row++) {
      for (let col = 0; col < 18; col++) {
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
        {/* Glow effect behind the avatar - Christmas themed */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-green-400 rounded-full blur-2xl opacity-40 scale-110" />

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

          {/* Decorative elements - Christmas themed */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <div className="absolute top-8 right-8 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100" />
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200" />
          <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300" />
        </div>

        {/* Location badge - Christmas themed */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30">
          <span className="bg-red-700/90 backdrop-blur-md text-ivory-50 px-4 py-2 rounded-full text-sm font-mono border border-red-500 flex items-center gap-2 shadow-lg">
            <span className="text-lg">🎄</span>
            ¡Feliz Navidad!
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
