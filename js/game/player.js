/*global Assets, Screen*/


var PLAYER_DISTANCE_TO_BORDER = 50;

var Player = function (game) {
    "use strict";
    this.game = game;
    this.sprite = null;
};
Player.prototype = {
    create: function () {
        "use strict";
        var y = Screen.HEIGHT - PLAYER_DISTANCE_TO_BORDER;
        this.sprite = this.game.add.sprite(this.game.world.centerX, y, Assets.PLAYER_SPRITE_KEY);
        this.sprite.anchor = { x: 0.5, y: 0.5 };
    }
};
