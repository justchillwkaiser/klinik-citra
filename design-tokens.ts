/*
  Klinik Citra Design Tokens
  Source of truth: klinikcitra.pen (variables) + src/app/globals.css @theme
  Palette: bg #FAFAF7, surface #FFFFFF, surface-soft #F1F5F2, primary #164A46,
  text #17211F, text-muted #65716E, border #DDE5E1, accent #B9674A, star #D9A441
  Typeface: Manrope only (no serif)
*/

/* Color Tokens */
export const color = {
  /* Background & Surface */
  bg: "#FAFAF7",           /* page background */
  surface: "#FFFFFF",      /* cards, panels */
  surfaceSoft: "#F1F5F2",  /* secondary surface */

  /* Primary Brand */
  primary: "#164A46",       /* deep teal-green — primary actions, links */
  primaryHover: "#103D3A",  /* hover/active states */
  primarySoft: "#E6EFEC",   /* soft primary overlay */

  /* Accent */
  accent: "#B9674A",        /* terracotta accent */
  accentSoft: "#F7EAE4",

  /* Text */
  text: "#17211F",          /* headings, body */
  textMuted: "#65716E",     /* secondary text, captions */

  /* Border & Dividers */
  border: "#DDE5E1",

  /* Status & Misc */
  success: "#3D806A",
  successSoft: "#E4EFE9",
  star: "#D9A441",
  onPrimary: "#FFFFFF",
  bad: "#97493A",
  badBg: "#F4E2DC",
} as const;

/* Typography Tokens */
export const typography = {
  primary: "'Manrope', ui-sans-serif, system-ui, sans-serif",
  weights: { normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
  sizes: { xs: 0.75, sm: 0.875, base: 1, lg: 1.25, xl: 1.5, "2xl": 2, "3xl": 3 },
  lineHeights: { none: 1, tight: 1.1, relaxed: 1.6 },
  tracking: { tight: "-0.025em", wider: "0.1em" },
} as const;

/* Radius Tokens (r-sm / r-md / r-lg / r-xl) */
export const radius = {
  sm: "8px",
  md: "12px",
  lg: "20px",
  xl: "28px",
  full: "9999px",
} as const;

/* Spacing Tokens */
export const spacing = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
} as const;

/* Shadow Tokens */
export const shadow = {
  soft: "0 12px 32px rgba(22, 74, 70, 0.08)",
} as const;

/* Motion & Interaction */
export const motion = {
  transitionFast: "150ms ease",
  transitionNormal: "200ms ease",
  transitionSlow: "300ms ease",
  reducedMotion: "prefers-reduced-motion: reduce",
} as const;

export type ColorToken = keyof typeof color;
export type RadiusToken = keyof typeof radius;
export type ShadowToken = keyof typeof shadow;
