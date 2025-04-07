import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

// You can also export reusable props types if needed later
type MotionH1Props = HTMLMotionProps<"h1">;
type MotionPProps = HTMLMotionProps<"p">;
type MotionDivProps = HTMLMotionProps<"div">;

// Properly typed motion components
export const MotionH1 = motion<HTMLHeadingElement>("h1");
export const MotionP = motion<HTMLParagraphElement>("p");
export const MotionDiv = motion<HTMLDivElement>("div");
