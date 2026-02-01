# Site Improvement Design - 2026-02-01

## Goals
- Improve conversion by clarifying the call-to-action and reducing above-the-fold noise.
- Improve performance by reducing continuous animation and honoring reduced-motion preferences.
- Refresh visuals while preserving the chaotic, anti-design brand energy.

## Direction
A “sharper funnel, same chaos” approach: keep the zine/punk energy, but make the hero read fast and guide the eye with a more disciplined color rhythm (acid yellow as primary, magenta as accent). The first screen is now a clear call and promise, with a short trust strip and a three-step mini flow. More chaotic elements are pushed slightly lower or reduced on mobile.

## Key Changes
- **Hero**: tighter copy, explicit trust strip, secondary “see how it works” anchor, and a small 3-step micro flow. Heavy background elements reduced on mobile. 
- **Sections**: add anchor targets to improve navigation and reduce cognitive load.
- **Motion**: gate GSAP animations behind reduced-motion checks and add CSS fallbacks to disable marquee/glitch/pulse when users prefer less motion.
- **Typography**: switch base body font to a more distinctive, readable typeface while keeping existing display fonts for loud headings.

## Performance + Accessibility
- Prefer-reduced-motion disables continuous animations and hover tilts.
- Reduce the number of background particles in the hero.
- Keep interactive elements keyboard- and screen-reader-friendly.

## Testing
- Run `npm run build` to validate the build and catch regressions.

