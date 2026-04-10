# Tenzies TypeScript

A lightweight, responsive implementation of the classic **Tenzies** dice game built with **React**, **TypeScript**, and **Vite**.

The goal is simple: roll until all 10 dice show the same value. You can lock (hold) selected dice between rolls to strategically reach a match.

## Table of Contents

- [Overview](#overview)
- [Gameplay Rules](#gameplay-rules)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Accessibility Notes](#accessibility-notes)
- [How It Works](#how-it-works)
- [Possible Improvements](#possible-improvements)

## Overview

This project is a compact front-end game focused on clean state management and solid TypeScript usage.

Core ideas demonstrated in this codebase:

- React functional components with hooks
- Type-safe component props and shared domain types
- Immutable updates for game state transitions
- Simple accessibility enhancements for keyboard and screen reader users

## Gameplay Rules

1. The game starts with 10 random dice values (from 1 to 6).
2. Click any die to hold it.
3. Press **Roll** to reroll only the unheld dice.
4. Continue until all dice are held and all values are identical.
5. After winning, the button changes to **New Game** to restart.

## Features

- 10 interactive dice rendered from typed state
- Hold/unhold toggle per die
- Win condition detection based on:
  - every die being held
  - every die having the same value
- Confetti celebration on win (`react-confetti`)
- Focus management for better keyboard UX after winning
- Polite live region announcement for screen readers
- Utility-based dice generation with unique IDs (`nanoid`)

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- ESLint 9 (with TypeScript + React Hooks + React Refresh configs)

## Project Structure

```text
.
|-- src/
|   |-- App.tsx                # Main game logic and UI composition
|   |-- Die.tsx                # Single die button component
|   |-- index.css              # Global and component-level styling
|   |-- main.tsx               # React root entry point
|   |-- components/
|       |-- utils.ts           # Dice type definition and generator
|-- index.html
|-- vite.config.ts
|-- eslint.config.js
|-- package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server with HMR
- `npm run build` - type-check and create production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks

## Accessibility Notes

This implementation includes basic accessibility support:

- Dice use `button` elements for native keyboard interaction
- `aria-pressed` indicates held/not-held state
- Descriptive `aria-label` announces die value and state
- A visually hidden live region (`aria-live="polite"`) announces the win message
- Focus is moved to the action button after winning for smoother keyboard flow

## How It Works

### State Model

Each die has:

- `value: number`
- `isHeld: boolean`
- `id: string`

The `hold` function is typed in the shared `Dice` type and passed to each `Die` component.

### Game Flow

- Initial dice are generated via `generateAllNewDice()`.
- On each roll:
  - held dice stay unchanged
  - unheld dice receive a new random value
- Win detection checks if all dice are held and equal.
- If won, pressing the button starts a fresh game.

## Possible Improvements

- Add roll counter and elapsed timer
- Store best score in `localStorage`
- Add difficulty modes (more dice, different target rules)
- Improve animations for die transitions
- Add unit tests for game logic and utility functions
