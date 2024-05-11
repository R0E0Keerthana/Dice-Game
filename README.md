# Dice Game - Angular Project

This project is a dice game application built with Angular that demonstrates core functionalities and user interaction.

## Features

- Players enter their names.
- Players can start the game by clicking a button.
- Dice are rolled virtually for each player.
- The winner is determined based on the higher dice value.
- A message displays congratulating the winner or declaring a draw.

## Technologies Used

- Angular
- TypeScript
- FormsModule (for form handling)

## Getting Started

### 1. Prerequisites:

__Node.js__ and __npm__ (or yarn) installed on your system.

### 2. Clone the Repository:

**Bash:-**
>git clone https://github.com/your-username/dice-game.git
>cd dice-game

### 3. Install Dependencies:

**Bash:-**
>npm install
(or `yarn install`)

### 4. Run the Development Server:

**Bash:-**
>npm start
(or `yarn start`)
This will launch the application in your default browser, typically at `http://localhost:4200/`.

## Code Structure

- The AppComponent manages the game state and interaction (located in app.component.ts).
- The Player class (likely in a separate file cmp1/cmp1.component.ts) holds player information (name and dice value).
- The game namespace (likely in cmp1/cmp1.component.ts) contains functions for rolling dice and updating player values (implementation details not provided).

*Feel free to fork this repository and contribute your improvements via pull requests.*

### Disclaimer

This project provides a basic framework for a dice game. You can expand on it to create a more complex and engaging game experience.

***Happy Coding and have fun playing!***
