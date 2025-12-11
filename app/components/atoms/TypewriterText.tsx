"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  words: string[];  
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterText({
  words = ["Developer", "Creator", "Dreamer"],
  className = "",
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } 
      else {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
    
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
      />
    </div>
  );
}