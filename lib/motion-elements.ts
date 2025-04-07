'use client';

import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';
import type { MotionProps } from 'framer-motion';

// Typed wrappers for common HTML elements
export const MotionH1 = motion<ComponentPropsWithoutRef<'h1'> & MotionProps>('h1');
export const MotionP = motion<ComponentPropsWithoutRef<'p'> & MotionProps>('p');
export const MotionDiv = motion<ComponentPropsWithoutRef<'div'> & MotionProps>('div');

// Special wrapper for animated card containers
export const MotionCardWrapper = motion<ComponentPropsWithoutRef<'div'> & MotionProps>('div');
