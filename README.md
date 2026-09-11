# Advanced Counter App

A React and TypeScript counter application built to practice managing state with `useState` and side effects with `useEffect`. The app extends a basic counter with count history, customizable step values, keyboard controls, automatic local storage saving, and reset functionality.

## Features

### Core Counter

* Starts with a count of `0`
* Increment and decrement buttons
* Displays the current count

### Count History

* Tracks count values as the counter changes
* Displays the history vertically in the interface
* Clears when the counter is reset

### Custom Step

* Allows the user to define a custom step value
* Increment and decrement operations use the selected step

### Keyboard Controls

* `ArrowUp` increases the counter
* `ArrowDown` decreases the counter
* Keyboard event listeners are properly removed during cleanup

### Auto-Save

* Automatically saves the current count to `localStorage`
* Uses a short timeout to simulate an asynchronous save
* Cleans up the previous timeout when the count changes before the save completes

### Reset

* Resets the counter to `0`
* Resets the step value to `1`
* Clears the count history

## Technologies

* React
* TypeScript
* Vite
* Tailwind CSS
* React Hooks

  * `useState`
  * `useEffect`
* Browser `localStorage`

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository and navigate into the project directory:

```bash
git clone <your-repository-url>
cd advanced-counter-app
```

Install the dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local development URL provided by Vite in your browser.

### Build for Production

```bash
npm run build
```

## How to Use

1. Use **Increment** and **Decrement** to change the counter.
2. Enter a custom number in the **Step** field to change how much the counter changes.
3. Use the `ArrowUp` and `ArrowDown` keys as keyboard shortcuts.
4. View previous count values in the **Count History** section.
5. Select **Reset** to return the counter to `0`, restore the step to `1`, and clear the history.
6. The current count is automatically saved to browser `localStorage`.

## React Concepts Practiced

This project focuses on understanding how React state and effects work together.

### `useState`

Multiple pieces of component state are managed using `useState`:

* Current counter value
* Step value
* Count history

### `useEffect`

`useEffect` is used for side effects including:

* Synchronizing the counter with `localStorage`
* Managing the keyboard event listener
* Cleaning up timers and event listeners when necessary

## Project Structure

```text
advanced-counter-app/
├── src/
│   ├── components/
│   │   └── AdvancedCounter.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Testing

The production build was verified successfully with:

```bash
npm run build
```

The project successfully completed TypeScript compilation and the Vite production build.

## Lab Objective

This project was created as part of a React/TypeScript exercise focused on:

* Managing multiple pieces of state
* Using previous state for reliable state updates
* Understanding `useEffect` dependency arrays
* Implementing effect cleanup
* Working with browser APIs such as `localStorage` and keyboard events
* Building an interactive React component