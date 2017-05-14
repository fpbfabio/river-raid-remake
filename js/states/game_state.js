/*global Phaser, Environment, Background, Player, PlayerWeapon*/


var GameState = function (game) {
    "use strict";
    this.game = game;
    this.environment = new Environment(game);
    this.background = new Background(game);
    this.player = new Player(game);
    this.playerWeapon = new PlayerWeapon(game, this.player);
};
GameState.prototype = {
    create: function () {
        "use strict";
        this.environment.create();
        this.background.create();
        this.player.create();
        this.playerWeapon.create();
    },
    update: function () {
        "use strict";
        this.player.update();
        this.playerWeapon.update();
    }
};
