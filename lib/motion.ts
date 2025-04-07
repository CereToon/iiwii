import { motion } from "framer-motion";

// Properly typed motion components for common HTML elements
export const MotionH1 = motion<HTMLHeadingElement>("h1");
export const MotionP = motion<HTMLParagraphElement>("p");
export const MotionDiv = motion<HTMLDivElement>("div");
export const MotionSpan = motion<HTMLSpanElement>("span");
export const MotionSection = motion<HTMLElement>("section");
export const MotionButton = motion<HTMLButtonElement>("button");
export const MotionImg = motion<HTMLImageElement>("img");

// Add more as needed, e.g., MotionNav, MotionHeader, MotionFooter, etc.
