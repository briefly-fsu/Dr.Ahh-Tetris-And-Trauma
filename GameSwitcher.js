// GameSwitcher (Use To Swap Between Games
import TetrisGame from "./TETRIS/TetrisGame.js";
import RPGGame from "./RPG/RPGGame.js";

export default class GameSwitcher {
  constructor() {
    this.currentGame = null;
    this.currentGameName = null;
  }

  startTetris() {
    this.stopCurrentGame();

    this.currentGame = new TetrisGame({
      onRPGStart: () => this.startRPG()
    });

    this.currentGameName = "tetris";
    this.currentGame.start();
  }

  startRPG() {
    this.stopCurrentGame();

    this.currentGame = new RPGGame({
      onTetrisStart: () => this.startTetris()
    });

    this.currentGameName = "rpg";
    this.currentGame.start();
  }

  stopCurrentGame() {
    if (this.currentGame) {
      this.currentGame.stop();
    }

    this.currentGame = null;
    this.currentGameName = null;
  }

  update(deltaTime) {
    if (this.currentGame) {
      this.currentGame.update(deltaTime);
    }
  }

  draw(ctx) {
    if (this.currentGame) {
      this.currentGame.draw(ctx);
    }
  }

  handleInput(event) {
    if (this.currentGame) {
      this.currentGame.handleInput(event);
    }
  }
}
