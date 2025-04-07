'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

// Motion components with proper DOM typing
export const MotionH1 = motion<HTMLHeadingElement>('h1');
export const MotionP = motion<HTMLParagraphElement>('p');
export const MotionDiv = motion<HTMLDivElement>('div');
