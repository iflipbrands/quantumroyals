// Quantum Royals - Minimal Luxury System Tailwind Config
// Core Principle: "If it's not black, it's an accent — not a background."

module.exports = {
  theme: {
    extend: {
      colors: {
        'obsidian-black': '#0B0B0F',    // Foundation (90%)
        'deep-royal-purple': '#2B0F52', // Identity & Depth
        'soft-antique-gold': '#D4AF37', // Metal & Sacred Accents
        'champagne-ivory': '#F3EBDD',   // Light & Readability
        'electric-teal': '#00F0D4',     // Energy & Movement
      },
      fontFamily: {
        'headlines': ['"Cormorant Garamond"', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
        'stats': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'nebula-haze': 'radial-gradient(circle at center, rgba(43, 15, 82, 0.04) 0%, rgba(11, 11, 15, 0) 70%)',
      },
      boxShadow: {
        'teal-glow': '0 0 15px rgba(0, 240, 212, 0.2)',
        'gold-glow': '0 0 10px rgba(212, 175, 55, 0.1)',
      },
      transitionDuration: {
        'luxury': '600ms',
      }
    },
  },
}
