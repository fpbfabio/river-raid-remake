/*global Phaser, Environment, Tilemap, Player, PlayerWeapon*/


var GameState = function (game) {
    "use strict";
    this.game = game;
    this.environment = new Environment(game);
    this.tilemap = new Tilemap(game);
    this.player = new Player(game);
    this.playerWeapon = new PlayerWeapon(game, this.player);
};
GameState.prototype = {
    create: function () {
        "use strict";
        this.environment.create();
        this.tilemap.create();
        this.player.create();
        this.playerWeapon.create();
    },
    update: function () {
        "use strict";
        this.player.update();
        this.playerWeapon.update();
    }
};
