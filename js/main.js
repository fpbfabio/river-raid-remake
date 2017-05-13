/*global Phaser, Screen, StateKeys, SplashState, GameState*/


var GAME_DIV_ID = "game";

var game = new Phaser.Game(Screen.WIDTH, Screen.HEIGHT, Phaser.Auto, GAME_DIV_ID);
game.state.add(StateKeys.SPLASH, SplashState);
game.state.add(StateKeys.GAME, GameState);
game.state.start(StateKeys.SPLASH);
