'use client';

import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

// Hard-typed wrapper to force correct props on motion components
export const MotionH1 = motion<ComponentPropsWithoutRef<'h1'> & MotionProps>('h1');
export const MotionP = motion<ComponentPropsWithoutRef<'p'> & MotionProps>('p');
export const MotionDiv = motion<ComponentPropsWithoutRef<'div'> & MotionProps>('div');
