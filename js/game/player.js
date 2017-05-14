/*global Phaser, Assets, Screen*/


var PLAYER_DISTANCE_TO_BORDER = 50;
var PLAYER_VELOCITY_X = 300;


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
        this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    },
    update: function () {
        "use strict";
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.sprite.body.velocity.x = -PLAYER_VELOCITY_X;
        } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.sprite.body.velocity.x = PLAYER_VELOCITY_X;
        } else {
            this.sprite.body.velocity.x = 0;
        }
    }
};
